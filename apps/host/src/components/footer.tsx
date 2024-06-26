import { cn } from "@acme/ui";

import { siteConfig } from "~/app/config";

export function SiteFooter(props: { className?: string }) {
	return (
		<footer className={cn("container border-t", props.className)}>
			<div className="my-4 grid grid-cols-2 md:flex md:items-center">
				<a
					href="/"
					className="col-start-1 row-start-1 flex items-center gap-2 md:mr-2"
				>
					<p className="text-lg font-medium md:hidden">{siteConfig.name}</p>
				</a>
				<p className="col-span-full row-start-2 text-center text-sm leading-loose text-muted-foreground md:flex-1 md:text-left">
					Built by{" "}
					<a
						href={siteConfig.twitter}
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						Julius
					</a>
					. Inspired by{" "}
					<a
						href="https://tx.shadcn.com"
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						Taxonomy
					</a>
					. Components by{" "}
					<a
						href="https://twitter.com/shadcn"
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						Shadcn
					</a>
					. The source code is available on{" "}
					<a
						href={siteConfig.github}
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
}
