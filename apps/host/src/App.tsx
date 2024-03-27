import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "./features/Home";
import React, { lazy, Suspense, ComponentType } from "react";
import { Navbar } from "./features/Navbar";
import { init } from "@module-federation/runtime";
import { SiteFooter } from "./components/footer";
import { MainNav } from "./components/main-nav";
import { loadRemote } from "@module-federation/runtime";

const Products = lazy(() => import("./features/Products/components/Products"));
const Cart = lazy(() => import("./features/Cart/components/Cart"));

const Product = React.lazy(() => {
	const promise = loadRemote("products/Product");
	return promise as Promise<{ default: ComponentType<any> }>;
});

import * as Icons from "@acme/ui/icons";
import { siteConfig } from "./config";
import { MobileDropdown } from "./components/mobile-nav";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<div className="flex min-h-screen flex-col">
					<nav className="container z-50 flex h-16 items-center border-b bg-background">
						<MobileDropdown />
						<MainNav items={siteConfig.mainNav} />
					</nav>

					<main className="flex-1"><Outlet /></main>
					<SiteFooter />
				</div>
			</>
		),
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/products",
				element: (
					<Suspense>
						<Products />
					</Suspense>
				),
			},
			{
				path: "/product",
				element: (
					<Suspense>
						<Product />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: (
					<Suspense>
						<Cart />
					</Suspense>
				),
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
