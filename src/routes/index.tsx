import { createFileRoute } from "@tanstack/react-router";
import Menu from "@/components/common/Menu";
import Hero from "@/components/home/Hero";
import SuccessStories from "@/components/home/SuccessStories";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<>
			<header className="animated-dots-bg pb-20">
				<div className="dots-layer-1"></div>
				<div className="relative z-10">
					<Menu />
					<Hero />
					<SuccessStories />
				</div>
			</header>
		</>
	);
}
