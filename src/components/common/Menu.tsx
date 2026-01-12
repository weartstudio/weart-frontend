import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {};

function Menu({}: Props) {
	const { t } = useTranslation();

	return (
		<nav>
			<div className="container mx-auto px-5 py-6 flex items-center justify-between">
				<Link to="/">
					<img src="/logo-dark.png" width={109} height={57} alt={"Weart.hu"} />
				</Link>
				<div className="lg:block hidden">
					<ul className="flex space-x-6 text-light">
						<li>
							<Link to="/about" className="hover:text-primary">
								{t("menu.about")}
							</Link>
						</li>
						<li>
							<Link to="/portfolio" className="hover:text-primary">
								{t("menu.portfolio")}
							</Link>
						</li>
						<li>
							<Link to="/services" className="hover:text-primary">
								{t("menu.services")}
							</Link>
						</li>
						<li>
							<Link to="/posts" className="hover:text-primary">
								{t("menu.blog")}
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-4">
					<LanguageSwitcher />
					<Button link="/contact">{t("menu.contact")}</Button>
				</div>
			</div>
		</nav>
	);
}

export default Menu;
