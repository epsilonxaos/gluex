import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { WordTransition } from "../animation/WordTransition";
import AnimatedNumber from "../animation/AnimatedNumber";

import "swiper/css/bundle";
import { BiChevronRight } from "react-icons/bi";
import { useRef, useState } from "react";

const words = ["flexible", "powerful", "all-round"];

const CountSection = () => {
	const [swiperIndex, setSwiperIndex] = useState(1);

	const swiperRef = useRef();

	return (
		<section className="w-full md:w-[85%] mx-auto md:py-[60px]">
			<p className="text-[20px] leading-[30px] md:text-[32px] w-full text-center md:mb-[8vh] px-4 mb-[80px]">
				<span className="inline-flex">
					The most{" "}
					<span className="overflow-hidden">
						<WordTransition words={words} based="&nbsp;all-round&nbsp;" />
					</span>{" "}
					solve
				</span>{" "}
				<br className="lg:hidden" />
				computing protocol for DeFi.
			</p>

			<ul className="py-14 rounded-2xl max-w-max px-12 text-center font-auxMono md:hidden w-[95%] mx-auto">
				<li className="mb-[0px] md:mb-0">
					<FlowValue />
				</li>
				<li className="py-4 md:hidden">
					<div className="h-[40px] w-[1px] bg-white mx-auto" />
				</li>
				<li className="mb-[0px] md:mb-0">
					<SettledValue />
				</li>
				<li className="py-4 md:hidden">
					<div className="h-[40px] w-[1px] bg-white mx-auto" />
				</li>
				<li className="">
					<SolvedValue />
				</li>
			</ul>

			<div className="hidden md:block">
				<div className="flex text-[24px] items-center justify-between mb-12">
					<div className="flex items-center justify-start gap-2">
						<div className="size-[65px] flex items-center justify-center rounded-full border text-verde">0{swiperIndex}</div>
						<span>/</span>
						<div>03</div>
					</div>

					<button type="button" onClick={() => swiperRef.current.slideNext()}>
						<BiChevronRight className="fill-verde" size={26} />
					</button>
				</div>

				<Swiper
					className="font-auxMono"
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					onSlideChange={(s) => setSwiperIndex(s.activeIndex + 1)}
				>
					<SwiperSlide>
						<FlowValue />
					</SwiperSlide>
					<SwiperSlide>
						<SolvedValue />
					</SwiperSlide>
					<SwiperSlide>
						<SettledValue />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

const FlowValue = () => {
	return (
		<>
			<p className="text-xs lg:text-sm">TOTAL VALUE FLOW</p>
			<p className="text-[18px] md:text-[40px] relative md:max-w-max">
				+$
				<AnimatedNumber value={32000000000} />
				<span className="border-t w-full absolute block bottom-2 left-0"></span>
			</p>
		</>
	);
};

const SettledValue = () => {
	return (
		<>
			<p className="text-xs lg:text-sm">TOTAL INTENTS SETTLED</p>
			<p className="text-[18px] md:text-[40px] relative md:max-w-max">
				+<AnimatedNumber value={300000} />
				<span className="border-t w-full absolute block bottom-2 left-0"></span>
			</p>
		</>
	);
};

const SolvedValue = () => {
	return (
		<>
			<p className="text-xs lg:text-sm">TOTAL VALUE SOLVED</p>
			<p className="text-[18px] md:text-[40px] relative md:max-w-max">
				+$
				<AnimatedNumber value={6000000000} />
				<span className="border-t w-full absolute block bottom-2 left-0"></span>
			</p>
		</>
	);
};

export default CountSection;
