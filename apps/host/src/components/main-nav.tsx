"use client"

import * as React from "react"

import { siteConfig } from "../config"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@acme/ui/navigation-menu"
import * as Icons from "@acme/ui/icons";
import { cn } from "@acme/ui";

interface MainNavProps {
	items?: any[]
}

const ListItem = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
	({ className, title, children, href, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						href={String(href)}
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
							{children as any}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		)
	});

export function MainNav({ items }: MainNavProps) {
	return (
		<div className="hidden gap-6 lg:flex">
			<a href="/" className="hidden items-center space-x-2 lg:flex">
				<Icons.Logo className="size-6" aria-hidden="true" />
				<span className="hidden font-bold lg:inline-block">
					{siteConfig.name}
				</span>
				<span className="sr-only">Home</span>
			</a>
			<NavigationMenu>
				<NavigationMenuList>
					{items?.[0]?.items ? (
						<NavigationMenuItem>
							<NavigationMenuTrigger className="h-auto">
								{items[0].title}
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<a
												href="/"
												className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
											>
												<Icons.Logo className="size-6" aria-hidden="true" />
												<div className="mb-2 mt-4 text-lg font-medium">
													{siteConfig.name}
												</div>
												<p className="text-sm leading-tight text-muted-foreground">
													{siteConfig.description}
												</p>
												<span className="sr-only">Home</span>
											</a>
										</NavigationMenuLink>
									</li>
									{items[0].items.map((item) => (
										<ListItem
											key={item.title}
											title={item.title}
											href={item.href}
										>
											{item.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					) : null}
					{items
						?.filter((item) => item.title !== items[0]?.title)
						.map((item) =>
							item?.items ? (
								<NavigationMenuItem key={item.title}>
									<NavigationMenuTrigger className="h-auto capitalize">
										{item.title}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
											{item.items.map((item) => (
												<ListItem
													key={item.title}
													title={item.title}
													href={item.href}
												>
													{item.description}
												</ListItem>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							) : (
								item.href && (
									<NavigationMenuItem key={item.title}>
										<a href={item.href} >
											<NavigationMenuLink
												className={cn(navigationMenuTriggerStyle(), "h-auto")}
											>
												{item.title}
											</NavigationMenuLink>
										</a>
									</NavigationMenuItem>
								)
							)
						)}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}


