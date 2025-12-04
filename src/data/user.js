const techImages = {
	react: "../reactLogo.png",
	python: "../pythonLogo.png",
	html: "../htmlLogo.png",
	sass: "../sassLogo.png",
	css: "../cssLogo.png",
	javascript: "../jsLogo.png",
};

const INFO = {
	main: {
		title: "Diego Solorzano | Software Engineer",
		name: "Diego Solorzano",
		email: "diegohumberto33@gmail.com",
		logo: "../man.png",
	},

	socials: {
		github: "https://github.com/pelongdlmx",
		linkedin: "https://www.linkedin.com/in/diego-solorzano/?locale=en-US",
	},

	homepage: {
		title: "Front-end Software Engineer. I'm a gamer both in and out of the terminal.",
		description:
			"Focused on creating fast, scalable, and user-centric web experiences. Expert in React & Node.js, with a proven track record of transforming complex corporate requirements into awarded and efficient digital solutions.",
	},

	about: {
		title: "I’m Diego. I live in Guadalajara, Mexico.",
		description:
			"Throughout my 8+ year career, I have driven a variety of high-impact projects, from architecting award-winning global websites to implementing proprietary Artificial Intelligence engines. I am incredibly proud of the technical and leadership growth I've achieved. While many of my key projects have been internal developments for leading corporations, I am always open to discussing methodologies, sharing my knowledge in React and Python, and exploring new ideas. Please feel free to reach out to collaborate or share insights on optimization and scalability strategies.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Directed Enterprise Front-end Architecture",
			description:
				"Defined code standards and best practices and led the development of reusable components across multiple domains, ensuring corporate consistency and scalability.",
			logo: [`${techImages.react}`],
			linkText: "View Project",
			link: "https://www.nxp.com/",
		},

		{
			title: "Led the #1 Industry Website",
			description:
				"Managed the UI for a global platform exceeding 17k pages in 4 languages, resulting in the #1 industry ranking by Bowen Craggs (2022).",
			logo: [
				`${techImages.html}`,
				`${techImages.css}`,
				`${techImages.react}`,
				`${techImages.javascript}`,
			],
			linkText: "View Project",
			link: "https://www.bowencraggs.com/the-index/current-leaders/",
		},

		{
			title: "Drove Performance",
			description:
				"Implemented advanced optimization strategies, such as dynamic imports and code splitting, resulting in significant improvements in front-end load speed and bundle efficiency.",
			logo: [`${techImages.react}`, `${techImages.css}`],
			linkText: "View Project",
			link: "https://www.nxp.com/",
		},

		{
			title: "Architected and Developed Proprietary AI Engine",
			description:
				"Led the end-to-end development of an AI engine (Mistral-7B) and designed its sovereign, zero-cost inference architecture using a FastAPI backend and QLORA.",
			logo: [`${techImages.python}`, `${techImages.react}`],
			linkText: "View Project",
			link: "https://github.com/pelongdlmx/AICinvestav_project",
		},

		{
			title: "Dynamic Content Components",
			description:
				"Developed a React JS application to display real-time, search-driven content, implementing highly-responsive components and ensuring a fluid user experience on high-traffic sites.",
			logo: [`${techImages.react}`],
			linkText: "View Project",
			link: "https://www.nxp.com/",
		},
	],
};

export default INFO;
