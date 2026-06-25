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
		days: {
			weekdays: "Luni – Vineri",
			saturday: "Sâmbătă",
			sunday: "Duminică",
			daily: "Zilnic",
		} as Record<string, string>,
		stops: {
			bucharest: "București",
			pitesti: "Pitești",
			ramnicu: "Râmnicu Vâlcea",
			targu_jiu: "Târgu Jiu",
		} as Record<string, string>,
		table: {
			stop: "Localitate",
		},
	},
	contact: {
		title: "Contact",
		phone: "Telefon",
		email: "Email",
		whatsapp: "Rezervă pe WhatsApp",
	},
} as const;
