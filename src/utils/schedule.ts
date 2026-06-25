import type { Stop } from "../data/types";

export function addMinutes(hhmm: string, delta: number): string {
	const [h, m] = hhmm.split(":").map(Number);
	const total = h * 60 + m + delta;
	return `${String(Math.floor(total / 60) % 24).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

export function computeStopTimes(stops: Stop[], departureTime: string): { stopId: string; time: string }[] {
	return stops.map((s) => ({ stopId: s.id, time: addMinutes(departureTime, s.deltaMinutes) }));
}
