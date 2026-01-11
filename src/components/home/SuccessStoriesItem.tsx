import React from "react";

type Props = {
	link: string;
	image: string;
	subtitle: string;
	children: React.ReactNode;
	className?: string;
};

const SuccessStoriesItem = (props: Props) => {
	return (
		<a href={props.link} className={`group flex flex-col ${props.className || ""}`}>
			<div style={{ backgroundImage: `url(${props.image})` }} className="aspect-video mb-4 shadow-lg rounded-lg overflow-hidden bg-primary"></div>
			<h3 className="text-primary uppercase font-semibold tracking-wider text-sm mb-4">{props.subtitle}</h3>
			<h2 className="text-secondary font-bold text-2xl leading-tight">{props.children}</h2>
		</a>
	);
};

export default SuccessStoriesItem;
