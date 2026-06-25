export type DayGroup =
	| "daily"
	| "weekdays"
	| "monday"
	| "tuesday"
	| "wednesday"
	| "thursday"
	| "friday"
	| "saturday"
	| "sunday";

export interface Stop {
	id: string;
	name: string;
	deltaMinutes: number;
	coords?: [number, number];
}

export interface Departure {
	time: string;
	days: DayGroup;
}
