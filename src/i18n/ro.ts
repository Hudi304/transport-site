export default {
	nav: {
		home: "Acasă",
		schedule: "Program",
		private: "Curse Private",
		about: "Despre",
		contact: "Contact",
	},
	home: {
		title: "Transport Company",
		subtitle: "Transportăm pasageri între Târgu Jiu, Craiova și Otopeni. Rapid, sigur, confortabil.",
		cta: "Rezervă pe WhatsApp",
		availableRides: {
			heading: "Curse disponibile",
			period: "perioada 29 Iunie - 5 Iulie",
			card: {
				title: "Cursa Aeroport Otopeni",
				dayLabel: "Ziua plecării",
				dayValue: "Luni, 29 Iunie",
				locationLabel: "Locul de preluare",
				locationValue: "Târgu Jiu",
				itinerary: {
					label: "Traseul complet",
					viewOnMap: "Vezi pe harta",
					departureLabel: "Plecare",
					departureTime: "06:30",
					duration: "~3h 15min",
					stops: [
						{ name: "Târgu Jiu", time: "08:00", note: "Punctul tău de preluare" },
						{ name: "Horezu", time: "9:00" },
						{ name: "Râmnicu Vâlcea", time: "10:00" },
						{ name: "Pitești", time: "11:00" },
						{ name: "București Otopeni", time: "12:15" },
					],
					dateLabel: "Data",
					dateValue: "Luni, 29 iunie",
					pickupLabel: "Preluare",
					pickupValue: "Târgu Jiu - 08:00",
					arrivalLabel: "Sosire aeroport",
					arrivalValue: "~ 12:15",
					totalLabel: "Total",
					totalPrice: "130 Lei",
					totalUnit: "/ pers.",
					cta: "Rezerva acum",
					whatsappMessage: "Bună ziua! Doresc să rezerv un loc pentru cursa Târgu Jiu - Otopeni (Aeroport), din data de 29 Iunie, ora 08:00.",
				},
			},
		},
		privateVip: {
			heading: "Transport privat VIP",
			intro: "Realizăm curse private la cerere:",
			options: [
				{ label: "Mercedes E Class", detail: "pentru maxim 3 persoane" },
				{ label: "Renault Trafic Combi", detail: "pentru grupuri 4-8 persoane" },
			],
			cta: "Contactează acum",
			whatsappMessage: "Bună ziua! Doresc să solicit o cursă privată VIP.",
		},
		about: {
			heading: "Despre noi",
			paragraphs: [
				"Oferim transport de persoane către și de la aeroport, cu accent pe confort, siguranță și punctualitate. Indiferent dacă pleci într-o vacanță sau într-o călătorie de afaceri, ne asigurăm că ajungi la timp și fără griji.",
				"Cu șoferi profesioniști, vehicule confortabile și un proces simplu de rezervare, transformăm fiecare transfer într-o experiență plăcută și eficientă.",
			],
			features: [
				{ icon: "thumbsUp", title: "Punctualitate la fiecare cursă" },
				{ icon: "star", title: "Confort pe tot parcursul călătoriei" },
				{ icon: "shield", title: "Siguranță și profesionalism" },
				{ icon: "chat", title: "Comunicare clară și rezervări rapide" },
			],
		},
		contactTeaser: {
			heading: "Contactează-ne",
			intro: "Ne bucurăm să luăm legătura cu tine! Completează formularul pentru a ne trimite un mesaj sau, dacă îți este mai convenabil, contactează-ne direct folosind informațiile afișate mai jos.",
			form: {
				nameLabel: "Nume",
				namePlaceholder: "Ex: John Doe",
				phoneLabel: "Numar de telefon",
				phonePlaceholder: "(xxx) xxx-xxxx",
				emailLabel: "Email",
				emailPlaceholder: "Ex: john.doe@company.com",
				messageLabel: "Mesaj",
				messagePlaceholder: "Type here...",
				messageMaxLength: 100,
				consent: "Sunt de acord să primesc mesaje din partea companiei prin SMS și e-mail.",
				submit: "Trimite mesajul",
				whatsappTemplate: "Bună ziua! Mă numesc {name}.\nTelefon: {phone}\nEmail: {email}\nMesaj: {message}",
			},
		},
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
		tagline: "Transport de pasageri cu experiență, seriozitate și respect pentru timpul tău.",
		stats: [
			{ value: "10+", label: "ani de experiență" },
			{ value: "4",   label: "trasee regulate" },
			{ value: "500+", label: "pasageri pe lună" },
			{ value: "100%", label: "plecări la timp" },
		],
		story: {
			heading: "Povestea noastră",
			paragraphs: [
				"Am început ca o firmă de transport local din Târgu Jiu, cu un singur microbuz și dorința de a oferi o alternativă serioasă față de transportul în comun. De-a lungul anilor, am extins traseele până la Craiova și Aeroportul Otopeni, deservind zilnic pasageri care au nevoie de confort și punctualitate.",
				"Suntem o afacere de familie. Fiecare călătorie contează pentru noi — nu suntem un operator anonim, ci oameni care înțeleg că ai un avion de prins sau o întâlnire importantă.",
			],
		},
		values: {
			heading: "Valorile noastre",
			items: [
				{
					icon: "🛡️",
					title: "Siguranță",
					description: "Vehicule întreținute regulat, șoferi cu experiență. Ajungi în siguranță la destinație.",
				},
				{
					icon: "⏱️",
					title: "Punctualitate",
					description: "Plecăm la ora fixată. Dacă avem un avion de prins, respectăm ora de plecare.",
				},
				{
					icon: "🤝",
					title: "Seriozitate",
					description: "Locul rezervat este garantat. Fără surprize, fără anulări de ultim moment.",
				},
			],
		},
	},
	private: {
		title: "Transport la Cerere",
		tagline: "Închiriezi vehiculul întreg. Orarul tău, destinația ta.",
		occasions: {
			heading: "Când apelezi la noi",
			items: [
				{
					icon: "✈️",
					title: "Transfer aeroport",
					description: "Plecare la orice oră, direct din ușa ta până la poarta de îmbarcare. Fără grija parcării.",
				},
				{
					icon: "🏥",
					title: "Consultații medicale",
					description: "Transport tur-retur la spitale din Craiova, Pitești sau București, la ora stabilită.",
				},
				{
					icon: "💒",
					title: "Nunți și evenimente",
					description: "Grup de invitați, un singur vehicul, fără bătăi de cap cu parcarea sau rutele.",
				},
				{
					icon: "💼",
					title: "Deplasări de afaceri",
					description: "Confort și discreție pentru întâlniri importante. Ajungi odihnit la destinație.",
				},
				{
					icon: "👨‍👩‍👧‍👦",
					title: "Grupuri și familii",
					description: "Până la 8 locuri. Adesea mai avantajos decât mai multe bilete separate.",
				},
				{
					icon: "📍",
					title: "Orice destinație",
					description: "Nu ești limitat la traseele fixe. Oriunde în țară, la adresă.",
				},
			],
		},
		howItWorks: {
			heading: "Cum funcționează",
			steps: [
				{ number: "1", title: "Ne contactezi", description: "Scrie-ne pe WhatsApp cu ruta, data și numărul de pasageri." },
				{ number: "2", title: "Stabilim detaliile", description: "Confirmăm disponibilitatea și prețul în cel mai scurt timp." },
				{ number: "3", title: "Te preluăm", description: "Venim la adresa ta la ora convenită. Fără întârzieri." },
			],
		},
		cta: {
			heading: "Solicită o cursă privată",
			description: "Mesajul de mai jos este deja pregătit — completează ruta și data, apoi trimite.",
			button: "Deschide WhatsApp",
			message: "Bună ziua! Doresc să solicit o cursă privată.\nRută: \nData: \nOra: \nNumăr de pasageri: \nDetalii suplimentare: ",
		},
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
	mapSection: {
		heading: "Traseele noastre",
		subheading: "Trasee directe, fără schimburi.",
		loading: "Se încarcă harta…",
	},
	contact: {
		title: "Contact",
		tagline: "Suntem la un mesaj distanță. Răspundem rapid.",
		channels: {
			heading: "Cum ne găsești",
			phone: { label: "Telefon", value: "+40 xxx xxx xxx" },
			email: { label: "Email", value: "contact@example.com" },
			whatsapp: { label: "WhatsApp", value: "+40 xxx xxx xxx" },
		},
		cta: {
			heading: "Rezervă acum pe WhatsApp",
			description: "Alege traseul, apoi apasă butonul — mesajul este deja completat.",
			button: "Deschide WhatsApp",
			selectLabel: "Traseu",
			selectPlaceholder: "Alege un traseu…",
			message: "Bună ziua! Doresc să rezerv un loc.\nTraseu: {route}\nData: \nOra plecării: \nNumăr de persoane: ",
		},
	},
	footer: {
		tagline: "Transport Aeroport",
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
