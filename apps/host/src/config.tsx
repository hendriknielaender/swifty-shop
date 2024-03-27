export const productConfig = {
	categories: [
		{
			name: "skateboards",
			description: "The best skateboards for all levels of skaters.",
			subcategories: [
				{
					name: "Decks",
					description: "The board itself.",
					image: "/images/deck-one.webp",
					slug: "decks",
				},
				{
					name: "Wheels",
					description: "The wheels that go on the board.",
					image: "/images/wheel-one.webp",
					slug: "wheels",
				},
				{
					name: "Trucks",
					description: "The trucks that go on the board.",
					image: "/images/truck-one.webp",
					slug: "trucks",
				},
				{
					name: "Bearings",
					description: "The bearings that go in the wheels.",
					image: "/images/bearing-one.webp",
					slug: "bearings",
				},
				{
					name: "Griptape",
					description: "The griptape that goes on the board.",
					image: "/images/griptape-one.webp",
					slug: "griptape",
				},
				{
					name: "Hardware",
					description: "The hardware that goes on the board.",
					image: "/images/hardware-one.webp",
					slug: "hardware",
				},
				{
					name: "Tools",
					description: "The tools that go with the board.",
					image: "/images/tool-one.webp",
					slug: "tools",
				},
			],
		},
		{
			name: "clothing",
			description: "Stylish and comfortable skateboarding clothing.",
			subcategories: [
				{
					name: "T-shirts",
					description: "Cool and comfy tees for effortless style.",
					slug: "t-shirts",
				},
				{
					name: "Hoodies",
					description: "Cozy up in trendy hoodies.",
					slug: "hoodies",
				},
				{
					name: "Pants",
					description: "Relaxed and stylish pants for everyday wear.",
					slug: "pants",
				},
				{
					name: "Shorts",
					description: "Stay cool with casual and comfortable shorts.",
					slug: "shorts",
				},
				{
					name: "Hats",
					description: "Top off your look with stylish and laid-back hats.",
					slug: "hats",
				},
			],
		},
		{
			name: "shoes",
			description: "Rad shoes for long skate sessions.",
			subcategories: [
				{
					name: "Low Tops",
					description: "Rad low tops shoes for a stylish low-profile look.",
					slug: "low-tops",
				},
				{
					name: "High Tops",
					description: "Elevate your style with rad high top shoes.",
					slug: "high-tops",
				},
				{
					name: "Slip-ons",
					description: "Effortless style with rad slip-on shoes.",
					slug: "slip-ons",
				},
				{
					name: "Pros",
					description: "Performance-driven rad shoes for the pros.",
					slug: "pros",
				},
				{
					name: "Classics",
					description: "Timeless style with rad classic shoes.",
					slug: "classics",
				},
			],
		},
		{
			name: "accessories",
			description:
				"The essential skateboarding accessories to keep you rolling.",
			subcategories: [
				{
					name: "Skate Tools",
					description:
						"Essential tools for maintaining your skateboard, all rad.",
					slug: "skate-tools",
				},
				{
					name: "Bushings",
					description: "Upgrade your ride with our rad selection of bushings.",
					slug: "bushings",
				},
				{
					name: "Shock & Riser Pads",
					description:
						"Enhance your skateboard's performance with rad shock and riser pads.",
					slug: "shock-riser-pads",
				},
				{
					name: "Skate Rails",
					description:
						"Add creativity and style to your tricks with our rad skate rails.",
					slug: "skate-rails",
				},
				{
					name: "Wax",
					description:
						"Keep your board gliding smoothly with our rad skate wax.",
					slug: "wax",
				},
				{
					name: "Socks",
					description: "Keep your feet comfy and stylish with our rad socks.",
					slug: "socks",
				},
				{
					name: "Backpacks",
					description: "Carry your gear in style with our rad backpacks.",
					slug: "backpacks",
				},
			],
		},
	],
	tags: [
		"new",
		"sale",
		"bestseller",
		"featured",
		"popular",
		"trending",
		"limited",
		"exclusive",
	],
}


export const siteConfig = {
	name: "Swifty Shop",
	description:
		"Rspack module federation starter kit that includes everything you need to build a modern web application. Mobile application preconfigured, ready to go.",
	github: "https://github.com/hendriknielaender/swifty-shop",
	twitter: "https://twitter.com/double-trouble",
	mainNav: [
		{
			title: "Lobby",
			items: [
				{
					title: "Products",
					href: "/products",
					description: "All the products we have to offer.",
					items: [],
				},
				{
					title: "Build a Board",
					href: "/build-a-board",
					description: "Build your own custom skateboard.",
					items: [],
				},
				{
					title: "Blog",
					href: "/blog",
					description: "Read our latest blog posts.",
					items: [],
				},
			],
		},
		...productConfig.categories.map((category) => ({
			title: category.name,
			items: [
				{
					title: "All",
					href: `/categories/${slugify(category.name)}`,
					description: `All ${category.name}.`,
					items: [],
				},
				...category.subcategories.map((subcategory) => ({
					title: subcategory.name,
					href: `/categories/${slugify(category.name)}/${subcategory.slug}`,
					description: subcategory.description,
					items: [],
				})),
			],
		})),
	],
};

export const navItems = [
	{
		href: "/dashboard",
		title: "Overview",
	},
	{
		href: "/pricing",
		title: "Pricing",
	},
	{
		href: "/dashboard",
		title: "Products",
	},
	{
		href: "/dashboard",
		title: "Settings",
	},
] satisfies { href: any; title: string }[];

export function slugify(str: string) {
	return str
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "")
		.replace(/--+/g, "-")
}
