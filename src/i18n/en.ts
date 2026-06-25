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
		days: {
			weekdays: "Monday – Friday",
			saturday: "Saturday",
			sunday: "Sunday",
			daily: "Daily",
		} as Record<string, string>,
		stops: {
			bucharest: "Bucharest",
			pitesti: "Pitești",
			ramnicu: "Râmnicu Vâlcea",
			targu_jiu: "Târgu Jiu",
		} as Record<string, string>,
		table: {
			stop: "Stop",
		},
	},
	contact: {
		title: "Contact",
		phone: "Phone",
		email: "Email",
		whatsapp: "Book on WhatsApp",
	},
} as const;
