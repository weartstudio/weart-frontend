import React from "react";

type Props = {
	children?: React.ReactNode;
	className?: string;
	title: string;
	subtitle: string;
};

const Title = (props: Props) => {
	return (
		<div className={`${props.className ?? "text-secondary"}`}>
			<h2 className="uppercase font-medium tracking-wider text-primary mb-4">{props.subtitle}</h2>
			<h1 className="font-bold text-4xl leading-tight mb-4">{props.title}</h1>
			<p className="text-white max-w-116">{props.children}</p>
		</div>
	);
};

export default Title;
