import { Waypoint, Route } from "./route";

const targuJiu        = Waypoint.new("Târgu Jiu");
const pitesti         = Waypoint.new("Pitești");
const bumbestii       = Waypoint.new("Bumbești");
const craiova         = Waypoint.new("Craiova");
const otopeniAeroport = Waypoint.new("Otopeni (Aeroport)");

const targuJiuCraiova = Route.new(targuJiu, craiova)
	.via(bumbestii, 30)
	.via(craiova,   60);

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
