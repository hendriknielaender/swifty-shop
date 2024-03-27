import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "./features/Home";
import { lazy, Suspense } from "react";
import { Navbar } from "./features/Navbar";
import { init } from "@module-federation/runtime";
import { SiteFooter } from "./components/footer";
import { MainNav } from "./components/main-nav";

const Products = lazy(() => import("./features/Products/components/Products"));
const Cart = lazy(() => import("./features/Cart/components/Cart"));

import * as Icons from "@acme/ui/icons";
import { siteConfig } from "./config";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<div className="flex min-h-screen flex-col">
					<nav className="container z-50 flex h-16 items-center border-b bg-background">
						<div className="mr-8 hidden items-center md:flex">
							<Icons.Logo className="mr-2 h-6 w-6" />
							<span className="text-lg font-bold tracking-tight">
								{siteConfig.name}
							</span>
						</div>
						<MainNav />
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
