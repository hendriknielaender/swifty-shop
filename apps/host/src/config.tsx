export const siteConfig = {
	name: "Acme Corp",
	description:
		"Next.js starter kit that includes everything you need to build a modern web application. Mobile application preconfigured, ready to go.",
	github: "https://github.com/juliusmarminge/acme-corp",
	twitter: "https://twitter.com/jullerino",
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
