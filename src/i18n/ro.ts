export default {
	nav: {
		home: "Acasă",
		schedule: "Program",
		about: "Despre",
		contact: "Contact",
	},
	home: {
		title: "Transport Company",
		subtitle: "Servicii de transport rapide și fiabile.",
	},
	about: {
		title: "Despre Noi",
		description: "Oferim servicii fiabile de transport de pasageri.",
	},
	schedule: {
		title: "Program",
		departures: [
			{ days: "Luni - Vineri", time: "08:00" },
			{ days: "Luni - Vineri", time: "18:00" },
		],
	},
	contact: {
		title: "Contact",
		phone: "Telefon",
		email: "Email",
		whatsapp: "Rezervă pe WhatsApp",
	},
} as const;
