export default {
	nav: {
		home: "Acasă",
		schedule: "Program",
		about: "Despre",
		contact: "Contact",
	},
	home: {
		title: "Transport Company",
		subtitle: "Transportăm pasageri între Târgu Jiu, Craiova și Otopeni. Rapid, sigur, confortabil.",
		cta: "Rezervă pe WhatsApp",
		features: {
			heading: "De ce să ne alegi?",
			items: [
				{
					icon: "⏱",
					title: "Punctualitate",
					description: "Plecăm la ora fixă. Întotdeauna.",
				},
				{
					icon: "🚌",
					title: "Confort",
					description: "Vehicule moderne, climatizate, cu spațiu generos pentru bagaje.",
				},
				{
					icon: "📍",
					title: "Trasee directe",
					description: "Fără schimbări. Ajungi direct la destinație.",
				},
			],
		},
		contactStrip: {
			heading: "Rezervă un loc acum",
			subtitle: "Sună-ne sau scrie pe WhatsApp. Răspundem rapid.",
			phone: "+40 xxx xxx xxx",
			cta: "Rezervă pe WhatsApp",
		},
	},
	about: {
		title: "Despre Noi",
		description: "Oferim servicii fiabile de transport de pasageri.",
	},
	schedule: {
		title: "Program",
		days: {
			daily: "Zilnic",
			weekdays: "Luni – Vineri",
			monday: "Luni",
			tuesday: "Marți",
			wednesday: "Miercuri",
			thursday: "Joi",
			friday: "Vineri",
			saturday: "Sâmbătă",
			sunday: "Duminică",
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
