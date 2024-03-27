import { useLayoutEffect, useState } from "react";
import { cn } from "@acme/ui";

import { navItems } from "../config";

import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

type Theme = "light" | "dark";

const getColorScheme = () =>
	window.matchMedia("(prefers-color-scheme: light)").matches
		? "light"
		: "dark";

const isThemeDark = (theme: Theme) => (theme === "dark" ? true : false);


// TODO: idx not needed as key when all items have unique hrefs
// also, the active link should be filtered by href and not idx
export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	useLayoutEffect(() => {
		const currentTheme = getColorScheme();
		changeTheme(currentTheme);
	}, []);

	const [theme, setTheme] = useState<Theme>(getColorScheme());

	const changeTheme = (themeName: Theme) => {
		const isNewThemeDark = isThemeDark(themeName) ? true : false;
		const body = document.querySelector("body") as HTMLBodyElement;

		body.classList.remove(isNewThemeDark ? "light-mode" : "dark-mode");
		body.classList.add(isNewThemeDark ? "dark-mode" : "light-mode");

		setTheme(themeName);
	};

	const InactiveThemeIcon = () => {
		const onClick = () =>
			isThemeDark(theme) ? changeTheme("light") : changeTheme("dark");

		return isThemeDark(theme) ? (
			<SunIcon
				onClick={onClick}
			/>
		) : (
			<MoonIcon
				onClick={onClick}
			/>
		);
	};

	return (
		<>
			<nav
				className={cn(
					"hidden items-center space-x-4 md:flex lg:space-x-6",
					className,
				)}
				{...props}
			>
				{navItems.map((item, idx) => (
					<a
						href={item.href}
						key={`${item.href}-${idx}`}
						className={cn(
							"text-sm font-medium transition-colors hover:text-primary",
							idx !== 0 && "text-muted-foreground",
						)}
					>
						{item.title}
					</a>
				))}
			</nav>
			<div>{InactiveThemeIcon()}</div>
		</>
	);
}
