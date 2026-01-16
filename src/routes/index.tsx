import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Menu from "@/components/common/Menu";
import Hero from "@/components/home/Hero";
import SuccessStories from "@/components/home/SuccessStories";
import Title from "@/components/common/Title";
import CarouselTestimonial from "@/components/testimonial/CarouselTestimonial";
import { getTestimonials } from "@/data/testimonials";
import about1 from "@/assets/about-1.svg";
import about2 from "@/assets/about-2.svg";

export const Route = createFileRoute("/")({
	component: App,
	loader: async () => {
		const testimonials = await getTestimonials();
		return { testimonials };
	},
});

function App() {
	const { testimonials } = Route.useLoaderData();
	const { t } = useTranslation();

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
					<Title subtitle={t("home.testimonials.subtitle")} title={t("home.testimonials.title")} className="text-dark">
						{t("home.testimonials.description")}
					</Title>
				</div>
				<CarouselTestimonial testimonials={testimonials} />
			</section>
			<section className="container mx-auto py-20 grid lg:grid-cols-3 grid-cols-1 gap-20">
				<div className="bg-secondary rounded-3xl aspect-square relative flex flex-col w-full">
					<div className="rounded-full w-1/2 absolute -left-5 -top-5">
						<div className="rounded-full bg-primary aspect-square w-full relative z-10"></div>
						<div className="rounded-full bg-dark aspect-square w-full absolute -top-7 -left-7"></div>
						<div className="border-dashed border border-dark rounded-full aspect-square w-full absolute -top-5 left-2"></div>
						<img src={about1} className="absolute top-1/7 left-4/5" />
					</div>

					<div className="ml-auto mr-10 mt-10 mb-auto">
						<h3 className="text-2xl font-semibold">Egyed Balázs</h3>
						<h4 className="text-sm">Web developer</h4>
					</div>
					<div className="mr-auto ml-10 mt-auto mb-10">
						<h3 className="text-2xl font-semibold">Ágoston Fanni</h3>
						<h4 className="text-sm">Projektmanager</h4>
					</div>

					<div className="rounded-full w-1/2 absolute -right-5 -bottom-5">
						<img src={about2} className="absolute bottom-1/7 w-6/4 right-2/3" />
						<div className="rounded-full bg-primary aspect-square w-full relative z-10"></div>
						<div className="rounded-full bg-dark aspect-square w-full absolute -bottom-7 -right-7"></div>
						<div className="border-dashed border border-dark rounded-full aspect-square w-full absolute -bottom-5 right-2"></div>
					</div>
				</div>
				<div className="lg:col-span-2">
					<Title subtitle={t("home.testimonials.subtitle")} title={t("home.testimonials.title")} className="text-dark">
						{t("home.testimonials.description")}
					</Title>
				</div>
			</section>
		</>
	);
}
