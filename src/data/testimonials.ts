import { createServerFn } from '@tanstack/react-start';

export type Testimonial = {
	content: string;
	name: string;
	alt: string;
};

export const getTestimonials = createServerFn({
	method: 'GET',
}).handler(async () => {
	const response = await fetch('https://weart.hu/wp-json/weart/v1/testimonials');
	const testimonials: Testimonial[] = await response.json();
	return testimonials;
});
