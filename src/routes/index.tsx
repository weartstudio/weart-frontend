import { createFileRoute } from "@tanstack/react-router";
import Menu from "@/components/common/Menu";
import Hero from "@/components/home/Hero";
import SuccessStories from "@/components/home/SuccessStories";
import Title from "@/components/common/Title";
import CarouselTestimonial from "@/components/testimonial/CarouselTestimonial";
import { getTestimonials } from "@/data/testimonials";

export const Route = createFileRoute("/")({
	component: App,
	loader: async () => {
		const testimonials = await getTestimonials();
		return { testimonials };
	},
});

function App() {
	const { testimonials } = Route.useLoaderData();

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
			<section className="container mx-auto py-20">
				<div className="container mx-auto pb-10">
					<Title subtitle="vélemények" title="Akik már megbíztak bennünk" className="text-dark">
						Quisque sit amet laoreet ante. Nulla porttitor nisl a vestibulum mollis. Sed malesuada, lacus vitae lobortis convallis.
					</Title>
				</div>
				<CarouselTestimonial testimonials={testimonials} />
			</section>
		</>
	);
}
