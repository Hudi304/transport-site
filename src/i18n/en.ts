export default {
	nav: {
		home: "Home",
		schedule: "Schedule",
		about: "About",
		contact: "Contact",
	},
	home: {
		title: "Transport Company",
		subtitle: "Passenger transport between Târgu Jiu, Craiova and Otopeni. Fast, safe, comfortable.",
		cta: "Book on WhatsApp",
		features: {
			heading: "Why choose us?",
			items: [
				{
					icon: "⏱",
					title: "On time",
					description: "We depart at the scheduled time. Every time.",
				},
				{
					icon: "🚌",
					title: "Comfort",
					description: "Modern, air-conditioned vehicles with generous luggage space.",
				},
				{
					icon: "📍",
					title: "Direct routes",
					description: "No changes. You arrive straight at your destination.",
				},
			],
		},
		contactStrip: {
			heading: "Book a seat now",
			subtitle: "Call us or message on WhatsApp. We reply quickly.",
			phone: "+40 xxx xxx xxx",
			cta: "Book on WhatsApp",
		},
	},
	about: {
		title: "About Us",
		description: "We provide reliable passenger transport services.",
	},
	schedule: {
		title: "Schedule",
		days: {
			daily: "Daily",
			weekdays: "Monday – Friday",
			monday: "Monday",
			tuesday: "Tuesday",
			wednesday: "Wednesday",
			thursday: "Thursday",
			friday: "Friday",
			saturday: "Saturday",
			sunday: "Sunday",
		} as Record<string, string>,
		table: {
			stop: "Stop",
		},
	},
	mapSection: {
		heading: "Our routes",
		subheading: "Direct routes, no transfers.",
		loading: "Loading map…",
	},
	contact: {
		title: "Contact",
		phone: "Phone",
		email: "Email",
		whatsapp: "Book on WhatsApp",
	},
} as const;
