import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/")({
	component: Services,
});

function Services() {
	return <div>page</div>;
}
