import Button from "../common/Button";

type Props = {};

function Hero({}: Props) {
	return (
		<div className="container mx-auto px-5 min-h-162.5 flex items-center">
			<div className="max-w-150 mx-auto text-center text-light">
				<h2 className="uppercase font-medium tracking-wider text-primary mb-4">weboldal fejlesztés</h2>
				<h1 className="font-bold text-4xl leading-tight mb-4">Legyen egy weboldalad, ami profi megjelenést ad, bizalmat épít, és eredményeket szállít.</h1>
				<p>10+ év rutinnal építünk egyedi, gyors weboldalakat. Rendszereink nemcsak látványosak, de vevőket szereznek és veled együtt fejlődnek.</p>
				<div className="flex justify-center items-center mt-6 gap-5">
					<Button link="/contact">Egyeztessünk időpontot</Button>
					<div className="grid text-left text-secondary text-xs">
						<span className="flex gap-1">
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
						</span>
						<span>90+ elégedett ügyfél</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
