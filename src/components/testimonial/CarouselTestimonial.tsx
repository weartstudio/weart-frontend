import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { Testimonial } from "@/data/testimonials";

type Props = {
	testimonials: Testimonial[];
};

function CarouselTestimonial({ testimonials }: Props) {
	return (
		<div className="relative">
			<Swiper
				spaceBetween={50}
				slidesPerView={2}
				navigation={{
					prevEl: ".swiper-button-prev-custom",
					nextEl: ".swiper-button-next-custom",
				}}
				pagination={{
					clickable: true,
					el: ".swiper-pagination-custom",
				}}
				modules={[Navigation, Pagination]}
			>
				{testimonials.map((testimonial, index) => (
					<SwiperSlide key={index} className="p-0.75 h-full">
						<div className="px-10 py-10 bg-white shadow-sm p-4 rounded-lg h-full">
							<p className="fw-semibold text-dark text-[22px] pb-10 leading-normal">{testimonial.content}</p>
							<div className="flex gap-4">
								<div className="rounded-full w-14 h-14 flex items-center justify-center bg-dark text-secondary">
									{testimonial.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</div>
								<p>
									<strong>{testimonial.name}</strong>
									<br />
									{testimonial.alt}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Custom Navigation */}
			<div className="flex items-center gap-6 mt-8">
				<button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-[#A8D5D8] hover:bg-[#8BC5C9] flex items-center justify-center transition-colors">
					<i className="bi bi-arrow-left text-dark text-xl"></i>
				</button>

				<div className="mx-auto">
					<div className="swiper-pagination-custom flex gap-2"></div>
				</div>

				<button className="swiper-button-next-custom w-12 h-12 rounded-full bg-[#A8D5D8] hover:bg-[#8BC5C9] flex items-center justify-center transition-colors">
					<i className="bi bi-arrow-right text-dark text-xl"></i>
				</button>
			</div>
		</div>
	);
}

export default CarouselTestimonial;
