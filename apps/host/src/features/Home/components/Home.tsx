import { ProductsOnSale } from "../../Products";
import styles from "./Home.module.css";
import useScreenSize from "../../Products/hooks/useScreenSize";
import { ComponentType, Suspense } from "react";
import React from "react";
import { loadRemote } from "@module-federation/runtime";

const ProductHero = React.lazy(() => {
	const promise = loadRemote("products/ProductHero");
	return promise as Promise<{ default: ComponentType<any> }>;
});

const bodyElement = document.querySelector("body")!;
import { siteConfig } from "../../../config";
import { Balancer } from "react-wrap-balancer";

import { cn } from "@acme/ui";
import { buttonVariants } from "@acme/ui/button";
import * as Icons from "@acme/ui/icons";

const Home = () => {
	const { isSmallScreen } = useScreenSize({
		htmlElement: bodyElement,
	});

	return (
		<>
			<main className="flex min-h-screen w-full flex-col items-center justify-center pt-48">
				<div className="z-10 min-h-[50vh] w-full max-w-4xl px-5 xl:px-0">
					{/* <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-sky-100 px-7 py-2 transition-colors hover:bg-sky-200"
        >
          <Icons.twitter className="h-5 w-5 text-sky-500" />
          <p className="text-sm font-semibold text-sky-500">
            Introducing Acme Corp
          </p>
        </a> */}
					<h1
						className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
						style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
					>
						<Balancer>Your all-in-one, enterprise ready starting point</Balancer>
					</h1>
					<p
						className="mt-6 animate-fade-up text-center text-muted-foreground/80 opacity-0 md:text-xl"
						style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
					>
						<Balancer>
							Acme Corp is a Next.js starter kit that includes everything you need
							to build a modern web application. Mobile application preconfigured,
							ready to go.
						</Balancer>
					</p>
					<div
						className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
						style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}
					>
						<a
							className={cn(buttonVariants({ variant: "default" }))}
							href={siteConfig.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icons.GitHub className="mr-1 h-4 w-4" />
							<span>Star on GitHub</span>
						</a>
					</div>
				</div>
				<section className={styles["home"]}>
					<ProductsOnSale />
				</section>

			</main>

		</>
	);
};

export default Home;
