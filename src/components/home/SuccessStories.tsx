import Title from "../common/Title";
import SuccessStoriesItem from "./SuccessStoriesItem";
import { Link } from "@tanstack/react-router";

type Props = {};

const SuccessStories = (props: Props) => {
	return (
		<div className="container mx-auto px-5 ">
			<Title title="Sikeres történetek" subtitle="Kiemelt munkáink">
				Az elmúlt évek során sok különféle problémával találkoztunk, és sok vállalkozással volt szerencsénk együtt dolgozni. 
			</Title>
			<div className="mt-20 grid gap-20 md:grid-cols-2 md:items-start">
				{[...Array(4)].map((_, index) => (
					<SuccessStoriesItem
						key={index}
						className={index % 2 != 0 && "mt-0 md:-mt-20"}
						image="/images/success-stories/fitness-weboldal.jpg"
						link="https://weart.hu/portfolio/joker-ruhazati-webshop/"
						subtitle="Joker ruházati webáruház"
					>
						Egyedi fejlesztésű, gyors és könnyen kezelhető webáruház, amely növelte a cég online jelenlétét és értékesítéseit.
					</SuccessStoriesItem>
				))}
			</div>
			<div className="mt-20 flex justify-center">
				<Link to="/portfolio" className="text-white font-normal">
					<span className="border-b border-primary pb-0.5">Még több átadott weboldal</span>
					<i className="bi bi-arrow-right inline-block align-middle ml-2 text-lg"></i>
				</Link>
			</div>
		</div>
	);
};

export default SuccessStories;
