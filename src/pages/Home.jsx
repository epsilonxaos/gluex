// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export const Home = () => {
	return (
		<>
			<Swiper direction={"vertical"} mousewheel={true} modules={[Mousewheel, EffectFade]} className="h-svh" effect={"fade"}>
				<SwiperSlide className="relative h-svh text-center">
					<div className="flex flex-col flex-wrap items-end justify-end pb-[8%] w-full h-full">
						<p className="text-[32px] w-full mb-[5%]">
							A <span className="text-verde">all-round</span> solving ecosystem with strong track record.
						</p>

						<ul className="flex items-center justify-between max-w-[960px] w-[95%] mx-auto font-auxMono">
							<li>
								<p>TOTAL VALUE FLOW</p>
								<p className="text-2xl">+$32,000,000,000</p>
							</li>
							<li>
								<p>TOTAL INTENTS SETTLED</p>
								<p className="text-2xl">+300,000</p>
							</li>
							<li>
								<p>TOTAL VALUE SOLVED</p>
								<p className="text-2xl">+$6,000,000,000</p>
							</li>
						</ul>
					</div>
					{/* <section className="">
					</section> */}
				</SwiperSlide>
				<SwiperSlide className="relative h-svh text-center">adadasdasd</SwiperSlide>
			</Swiper>
		</>
	);
};
