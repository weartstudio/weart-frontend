import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	notFoundComponent: () => (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-bold mb-4">404 - Oldal nem található</h1>
			<p className="text-gray-600 mb-6">A keresett oldal nem létezik.</p>
			<a href="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90">
				Vissza a főoldalra
			</a>
		</div>
	),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="hu">
			<head>
				<HeadContent />
			</head>
			<body suppressHydrationWarning>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
