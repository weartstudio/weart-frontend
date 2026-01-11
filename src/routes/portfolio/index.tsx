import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/")({
	component: Portfolio,
});

function Portfolio() {
	return (
		<div>
			<h1>Portfolio</h1>
			<p>Portfolio oldal tartalma ide kerül.</p>
		</div>
	);
}
