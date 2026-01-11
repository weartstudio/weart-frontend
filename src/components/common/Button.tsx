import { Link } from "@tanstack/react-router";

type Props = {
	link: string;
	children: React.ReactNode;
	className?: string;
};

const Button = (props: Props) => {
	return (
		<Link to={props.link} className={`py-3 pl-8 pr-7 inline-flex bg-primary hover:bg-secondary font-semibold rounded text-dark ${props.className || ""}`}>
			{props.children}
			<i className="bi bi-arrow-right ml-2"></i>
		</Link>
	);
};

export default Button;
