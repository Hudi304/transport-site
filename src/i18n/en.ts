export default {
	nav: {
		home: "Home",
		schedule: "Schedule",
		about: "About",
		contact: "Contact",
	},
	home: {
		title: "Transport Company",
		subtitle: "Fast and reliable transport services.",
	},
	about: {
		title: "About Us",
		description: "We provide reliable passenger transport services.",
	},
	schedule: {
		title: "Schedule",
		departures: [
			{ days: "Monday - Friday", time: "08:00" },
			{ days: "Monday - Friday", time: "18:00" },
		],
	},
	contact: {
		title: "Contact",
		phone: "Phone",
		email: "Email",
		whatsapp: "Book on WhatsApp",
	},
} as const;
