export type DayGroup = "weekdays" | "saturday" | "sunday" | "daily";

export interface Stop {
	id: string;
	deltaMinutes: number;
}

export interface Departure {
	time: string;
	days: DayGroup;
}

export interface Route {
	id: string;
	stops: Stop[];
	departures: Departure[];
}

export const routes: Route[] = [
	{
		id: "bucharest-targu-jiu",
		stops: [
			{ id: "bucharest", deltaMinutes: 0 },
			{ id: "pitesti", deltaMinutes: 75 },
			{ id: "ramnicu", deltaMinutes: 165 },
			{ id: "targu_jiu", deltaMinutes: 270 },
		],
		departures: [
			{ time: "08:00", days: "weekdays" },
			{ time: "18:00", days: "weekdays" },
		],
	},
];
