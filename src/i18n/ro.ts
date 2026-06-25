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
} as const;
