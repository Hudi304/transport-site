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
		availableRides: {
			heading: "Available rides",
			period: "period June 29 - July 5",
			card: {
				title: "Otopeni Airport Ride",
				dayLabel: "Departure day",
				dayValue: "Monday, June 29",
				locationLabel: "Pickup location",
				locationValue: "Târgu Jiu",
				itinerary: {
					label: "Full route",
					viewOnMap: "View on map",
					departureLabel: "Departure",
					departureTime: "06:30",
					duration: "~3h 15min",
					stops: [
						{ name: "Târgu Jiu", time: "08:00", note: "Your pickup point" },
						{ name: "Horezu", time: "9:00" },
						{ name: "Râmnicu Vâlcea", time: "10:00" },
						{ name: "Pitești", time: "11:00" },
						{ name: "Bucharest Otopeni", time: "12:15" },
					],
					dateLabel: "Date",
					dateValue: "Monday, June 29",
					pickupLabel: "Pickup",
					pickupValue: "Târgu Jiu - 08:00",
					arrivalLabel: "Airport arrival",
					arrivalValue: "~ 12:15",
					totalLabel: "Total",
					totalPrice: "130 RON",
					totalUnit: "/ person",
					cta: "Book now",
					whatsappMessage: "Hello! I'd like to book a seat for the Târgu Jiu - Otopeni (Airport) ride, on June 29, at 08:00.",
				},
			},
		},
		privateVip: {
			heading: "Private VIP transport",
			intro: "We arrange private rides on request:",
			options: [
				{ label: "Mercedes E Class", detail: "for up to 3 passengers" },
				{ label: "Renault Trafic Combi", detail: "for groups of 4-8" },
			],
			cta: "Contact us now",
			whatsappMessage: "Hello! I'd like to request a private VIP ride.",
		},
		about: {
			heading: "About us",
			paragraphs: [
				"We provide passenger transport to and from the airport, focused on comfort, safety and punctuality. Whether you're leaving for vacation or a business trip, we make sure you get there on time and worry-free.",
				"With professional drivers, comfortable vehicles and a simple booking process, we turn every transfer into a pleasant, efficient experience.",
			],
			features: [
				{ icon: "thumbsUp", title: "On-time for every ride" },
				{ icon: "star", title: "Comfort throughout the trip" },
				{ icon: "shield", title: "Safety and professionalism" },
				{ icon: "chat", title: "Clear communication and quick bookings" },
			],
		},
		contactTeaser: {
			heading: "Contact us",
			intro: "We'd love to hear from you! Fill in the form to send us a message, or, if it's more convenient, reach out directly using the details shown below.",
			form: {
				nameLabel: "Name",
				namePlaceholder: "Ex: John Doe",
				phoneLabel: "Phone number",
				phonePlaceholder: "(xxx) xxx-xxxx",
				emailLabel: "Email",
				emailPlaceholder: "Ex: john.doe@company.com",
				messageLabel: "Message",
				messagePlaceholder: "Type here...",
				messageMaxLength: 100,
				consent: "I agree to receive messages from the company via SMS and email.",
				submit: "Send message",
				whatsappTemplate: "Hello! My name is {name}.\nPhone: {phone}\nEmail: {email}\nMessage: {message}",
			},
		},
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
	footer: {
		tagline: "Airport Transport",
		supportHeading: "Support",
		links: {
			terms: "Terms & Conditions",
			privacy: "Privacy Policy",
			faq: "FAQ",
			contact: "Contact Us",
		},
		copyright: "Copyright © {year} ZaboTravel",
		rights: "All rights reserved",
	},
} as const;
