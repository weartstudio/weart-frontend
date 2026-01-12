import { useTranslation } from "react-i18next";
import Button from "../common/Button";

type Props = {};

function Hero({}: Props) {
	const { t } = useTranslation();

	return (
		<div className="container mx-auto px-5 min-h-162.5 flex items-center">
			<div className="max-w-150 mx-auto text-center text-light">
				<h2 className="uppercase font-medium tracking-wider text-primary mb-4">{t("hero.subtitle")}</h2>
				<h1 className="font-bold text-4xl leading-tight mb-4">{t("hero.title")}</h1>
				<p>{t("hero.description")}</p>
				<div className="flex justify-center items-center mt-6 gap-5">
					<Button link="/contact">{t("hero.ctaButton")}</Button>
					<div className="grid text-left text-secondary text-xs">
						<span className="flex gap-1">
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
						</span>
						<span>{t("hero.reviews")}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
