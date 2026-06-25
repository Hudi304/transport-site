import { Waypoint, Route } from "./route";

const targuJiu        = Waypoint.new("Târgu Jiu",          [45.0353, 23.2750]);
const pitesti         = Waypoint.new("Pitești",            [44.8565, 24.8691]);
const bumbesti        = Waypoint.new("Bumbești",           [45.1547, 23.4013]);
const craiova         = Waypoint.new("Craiova",            [44.3302, 23.7949]);
const otopeniAeroport = Waypoint.new("Otopeni (Aeroport)", [44.5722, 26.0850]);

const targuJiuCraiova = Route.new(targuJiu, craiova)
	.via(bumbesti, 30)
	.via(craiova,  60);

const targuJiuOtopeni = Route.new(targuJiu, otopeniAeroport)
	.via(pitesti,         75)
	.via(otopeniAeroport, 105);

export const routes: Route[] = [
	targuJiuCraiova.departing([
		{ time: "08:00", days: "weekdays" },
		{ time: "18:00", days: "weekdays" },
	]),
	targuJiuCraiova.reversed([
		{ time: "10:30", days: "thursday" },
	]),

	targuJiuOtopeni.departing([
		{ time: "06:00", days: "daily"  },
		{ time: "12:00", days: "monday" },
	]),
	targuJiuOtopeni.reversed([
		{ time: "21:00", days: "monday" },
	]),
];
