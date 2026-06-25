export default {
	nav: {
		home: "Home",
		schedule: "Schedule",
		private: "Private Rides",
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
		tagline: "Passenger transport built on experience, reliability, and respect for your time.",
		stats: [
			{ value: "10+", label: "years of experience" },
			{ value: "4",   label: "regular routes" },
			{ value: "500+", label: "passengers per month" },
			{ value: "100%", label: "on-time departures" },
		],
		story: {
			heading: "Our story",
			paragraphs: [
				"We started as a local transport company in Târgu Jiu with a single minibus and a drive to offer a real alternative to public transport. Over the years we expanded our routes to Craiova and Otopeni Airport, serving passengers who need comfort and punctuality every day.",
				"We are a family business. Every journey matters to us — we are not an anonymous operator, but people who understand that you have a flight to catch or an important meeting to make.",
			],
		},
		values: {
			heading: "Our values",
			items: [
				{
					icon: "🛡️",
					title: "Safety",
					description: "Regularly maintained vehicles and experienced drivers. You arrive safely at your destination.",
				},
				{
					icon: "⏱️",
					title: "Punctuality",
					description: "We leave at the agreed time. If there is a flight to catch, we respect the departure hour.",
				},
				{
					icon: "🤝",
					title: "Reliability",
					description: "Your reserved seat is guaranteed. No surprises, no last-minute cancellations.",
				},
			],
		},
	},
	private: {
		title: "On-Demand Transport",
		tagline: "Hire the whole vehicle. Your schedule, your destination.",
		occasions: {
			heading: "When to use this service",
			items: [
				{
					icon: "✈️",
					title: "Airport transfer",
					description: "Depart at any hour, door to gate. No parking stress, no missed flights.",
				},
				{
					icon: "🏥",
					title: "Medical appointments",
					description: "Return trips to hospitals in Craiova, Pitești or Bucharest, on your schedule.",
				},
				{
					icon: "💒",
					title: "Weddings & events",
					description: "A group of guests, one vehicle, no logistics headache.",
				},
				{
					icon: "💼",
					title: "Business travel",
					description: "Comfort and discretion for important meetings. Arrive rested.",
				},
				{
					icon: "👨‍👩‍👧‍👦",
					title: "Groups & families",
					description: "Up to 8 seats. Often more affordable than multiple separate tickets.",
				},
				{
					icon: "📍",
					title: "Any destination",
					description: "Not limited to fixed routes. Anywhere in the country, to your address.",
				},
			],
		},
		howItWorks: {
			heading: "How it works",
			steps: [
				{ number: "1", title: "Contact us", description: "Message us on WhatsApp with the route, date, and number of passengers." },
				{ number: "2", title: "We confirm details", description: "We get back to you quickly with availability and price." },
				{ number: "3", title: "We pick you up", description: "We arrive at your address at the agreed time. No delays." },
			],
		},
		cta: {
			heading: "Request a private ride",
			description: "The message below is already prepared — fill in the route and date, then send.",
			button: "Open WhatsApp",
			message: "Hello! I would like to request a private ride.\nRoute: \nDate: \nTime: \nNumber of passengers: \nAdditional details: ",
		},
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
		tagline: "We are one message away. We reply quickly.",
		channels: {
			heading: "How to reach us",
			phone: { label: "Phone", value: "+40 xxx xxx xxx" },
			email: { label: "Email", value: "contact@example.com" },
			whatsapp: { label: "WhatsApp", value: "+40 xxx xxx xxx" },
		},
		cta: {
			heading: "Book now on WhatsApp",
			description: "Choose a route, then press the button — the message is already filled in.",
			button: "Open WhatsApp",
			selectLabel: "Route",
			selectPlaceholder: "Choose a route…",
			message: "Hello! I would like to book a seat.\nRoute: {route}\nDate: \nDeparture time: \nNumber of passengers: ",
		},
	},
} as const;
