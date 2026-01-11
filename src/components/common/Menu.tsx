import { Link } from "@tanstack/react-router";
import Button from "./Button";

type Props = {};

function Menu({}: Props) {
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
								Rólunk
							</Link>
						</li>
						<li>
							<Link to="/portfolio" className="hover:text-primary">
								Munkáink
							</Link>
						</li>
						<li>
							<Link to="/services" className="hover:text-primary">
								Szolgáltatások
							</Link>
						</li>
						<li>
							<Link to="/posts" className="hover:text-primary">
								Blog
							</Link>
						</li>
					</ul>
				</div>
				<Button link="/contact">Beszélgessünk</Button>
			</div>
		</nav>
	);
}

export default Menu;
