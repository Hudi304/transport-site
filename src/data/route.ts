import type { Stop, Departure } from "./types";

/**
 * A named geographic location used as a segment endpoint.
 * The `id` is derived automatically from the name — no manual key needed.
 */
export class Waypoint {
	readonly id: string;

	private constructor(readonly name: string) {
		this.id = Waypoint.toId(name);
	}

	/** Create a waypoint. `id` is slugified from `name` ("Târgu Jiu" → "targu_jiu"). */
	static new(name: string): Waypoint {
		return new Waypoint(name);
	}

	private static toId(name: string): string {
		return name
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/[^a-z0-9]+/g, "_")
			.replace(/^_|_$/g, "");
	}
}

/**
 * A single road leg connecting two waypoints with a fixed travel time.
 * Segments are the building blocks of a Route — their durations are summed
 * to derive each stop's arrival offset from the departure time.
 */
export class Segment {
	private constructor(
		readonly from: Waypoint,
		readonly to: Waypoint,
		readonly durationMinutes: number,
	) {}

	/** Create a segment between two waypoints. */
	static new(from: Waypoint, to: Waypoint, durationMinutes: number): Segment {
		return new Segment(from, to, durationMinutes);
	}
}

/**
 * An immutable route from an origin to a destination, made up of ordered
 * segments and one or more scheduled departures.
 *
 * Route is its own builder — chain `.via()` calls then finalise with `.departing()`:
 * ```ts
 * Route.new(origin, destination)
 *   .via(intermediate, 45)
 *   .via(destination, 30)
 *   .departing(outboundDeps, returnDeps?)
 * ```
 * `.departing()` returns `Route[]` so it can be spread into the routes array,
 * yielding one route (outbound only) or two (outbound + reversed return).
 */
export class Route {
	readonly id: string;
	/** Ordered stop list with computed arrival offsets, derived from segments. */
	readonly stops: Stop[];

	private constructor(
		readonly origin: Waypoint,
		readonly destination: Waypoint,
		private readonly _segments: Segment[],
		private readonly _current: Waypoint,
		readonly departures: Departure[],
	) {
		this.id = `${origin.id}-${destination.id}`;
		this.stops = Route.deriveStops(_segments);
	}

	/** Entry point. Returns a draft Route — chain `.via()` then call `.departing()`. */
	static new(origin: Waypoint, destination: Waypoint): Route {
		return new Route(origin, destination, [], origin, []);
	}

	/**
	 * Add the next leg from the current position to `waypoint` in `durationMinutes`.
	 * Returns a new Route with the segment appended.
	 */
	via(waypoint: Waypoint, durationMinutes: number): Route {
		return new Route(
			this.origin,
			this.destination,
			[...this._segments, Segment.new(this._current, waypoint, durationMinutes)],
			waypoint,
			this.departures,
		);
	}

	/**
	 * Finalise the route with departure times.
	 * Throws if the chain does not end at the declared destination.
	 */
	departing(departures: Departure[]): Route {
		if (this._segments.length === 0) throw new Error("Route requires at least one segment");
		if (this._current.id !== this.destination.id) {
			throw new Error(`Route does not end at declared destination "${this.destination.name}"`);
		}
		return new Route(this.origin, this.destination, this._segments, this._current, departures);
	}

	/**
	 * Create a return Route from this one.
	 * Reverses the segment order, swaps `from`/`to` on each segment,
	 * and swaps `origin`/`destination`. The caller supplies new departure times.
	 */
	reversed(departures: Departure[]): Route {
		const reversedSegments = [...this._segments]
			.reverse()
			.map(seg => Segment.new(seg.to, seg.from, seg.durationMinutes));
		return new Route(this.destination, this.origin, reversedSegments, this.origin, departures);
	}

	/** Walks segments in order, deduplicates endpoints by id, accumulates deltaMinutes. */
	private static deriveStops(segments: Segment[]): Stop[] {
		const seen = new Set<string>();
		const result: Stop[] = [];
		let elapsed = 0;

		for (const seg of segments) {
			if (!seen.has(seg.from.id)) {
				seen.add(seg.from.id);
				result.push({ id: seg.from.id, name: seg.from.name, deltaMinutes: elapsed });
			}
			elapsed += seg.durationMinutes;
			if (!seen.has(seg.to.id)) {
				seen.add(seg.to.id);
				result.push({ id: seg.to.id, name: seg.to.name, deltaMinutes: elapsed });
			}
		}

		return result;
	}

	/** Sum of all segment durations in minutes. */
	get totalDurationMinutes(): number {
		return this._segments.reduce((sum, seg) => sum + seg.durationMinutes, 0);
	}

	/** Display name: "Origin – Destination". */
	get heading(): string {
		return `${this.origin.name} – ${this.destination.name}`;
	}
}
