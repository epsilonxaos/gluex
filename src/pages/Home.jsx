import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { SectionInitial } from "../components/index/SectionInitial";
import { SectionBrands } from "../components/index/SectionBrands";
import { useEffect, useRef, useState } from "react";

export const Home = () => {
	const swiperRef = useRef(null);
	const [isSwiperEnabled, setIsSwiperEnabled] = useState(window.innerWidth >= 768);

	const updateSwiper = () => {
		if (window.innerWidth >= 768) {
			setIsSwiperEnabled(true);
		} else {
			setIsSwiperEnabled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", updateSwiper);

		updateSwiper();

		return () => {
			window.removeEventListener("resize", updateSwiper);
		};
	}, []);

	if (isSwiperEnabled) {
		return (
			<Swiper ref={swiperRef} direction={"vertical"} mousewheel={true} modules={[Mousewheel, EffectFade]} className="h-svh" effect={"fade"}>
				<SwiperSlide className="relative h-svh text-center">
					<SectionInitial />
				</SwiperSlide>
				<SwiperSlide className="relative h-svh text-center">
					<SectionBrands />
				</SwiperSlide>
			</Swiper>
		);
	}

	return (
		<section className="relative z-10">
			<SectionInitial />

			<SectionBrands />
		</section>
	);
};
