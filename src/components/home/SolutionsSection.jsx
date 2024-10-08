import { useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import Text from "../Text";

import iconBuild from "../../assets/img/icon/icon-build.svg";
import iconEarn from "../../assets/img/icon/icon-earn.svg";
import iconSolve from "../../assets/img/icon/icon-solve.svg";

import iconEarnList1 from "../../assets/img/icon/earn/1.svg";
import iconEarnList2 from "../../assets/img/icon/earn/2.svg";
import iconEarnList3 from "../../assets/img/icon/earn/3.svg";

import iconSolveList1 from "../../assets/img/icon/solve/1.svg";
import iconSolveList2 from "../../assets/img/icon/solve/2.svg";
import iconSolveList3 from "../../assets/img/icon/solve/3.svg";

import iconBuildList1 from "../../assets/img/icon/build/1.svg";
import iconBuildList2 from "../../assets/img/icon/build/2.svg";
import iconBuildList3 from "../../assets/img/icon/build/3.svg";
import CustomAnimation from "../animation/animation";
import { WordTransition } from "../animation/WordTransition";
import { Autoplay } from "swiper/modules";

import "swiper/css/autoplay";

const words = ["flexible", "powerful", "all-round"];

const SolutionsSection = () => {
	const ref = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<div className="md:px-10">
			<section className="w-full md:py-[60px] lg:py-[90px] relative max-w-app mx-auto max-md:overflow-hidden">
				<CustomAnimation animation="fade-up">
					<p className="text-[20px] leading-[30px] md:text-[32px] w-full text-center px-4 mb-[50px]">
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
				</CustomAnimation>
				<CustomAnimation animation="fade-up">
					<Swiper
						loop={true}
						autoplay={{
							disableOnInteraction: false,
						}}
						speed={1500}
						onSwiper={(swiper) => {
							ref.current = swiper;
						}}
						modules={[Autoplay]}
						onSlideChange={(s) => setIndex(s.activeIndex)}
						spaceBetween={50}
					>
						<SwiperSlide>
							<SolutionCard
								mainColor="text-verde"
								btnColor="verde"
								icon={iconEarn}
								title={"Earn"}
								desc={"Via revenue-share among users, liquidity providers, solvers and contributors"}
								list={[
									{
										icon: iconEarnList1,
										text: "MEV protected by default",
									},
									{
										icon: iconEarnList2,
										text: "Better yield for liquidity providers",
									},
									{
										icon: iconEarnList3,
										text: "Best execution for users",
									},
								]}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SolutionCard
								mainColor="text-salmon"
								icon={iconSolve}
								title={"Solve"}
								desc={"With GlueX SDK"}
								list={[
									{
										icon: iconSolveList1,
										text: "No collateral requirements",
									},
									{
										icon: iconSolveList2,
										text: "Fastest onboarding",
									},
									{
										icon: iconSolveList3,
										text: "Zero-risk solving",
									},
								]}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SolutionCard
								mainColor="text-verde"
								btnColor="verde"
								icon={iconBuild}
								title={"Build"}
								desc={"With GlueX Protocol"}
								list={[
									{
										icon: iconBuildList1,
										text: "Simple",
									},
									{
										icon: iconBuildList2,
										text: "Upgradeable",
									},
									{
										icon: iconBuildList3,
										text: "Ownable",
									},
								]}
							/>
						</SwiperSlide>
					</Swiper>

					<div className="max-md:absolute bottom-8 z-10 flex w-full items-center justify-center gap-4">
						<button className={`md:absolute transition-colors size-[30px] ${index % 2 == 0 ? "bg-verde" : "bg-salmon"} flex items-center justify-center z-10 rounded-full md:top-1/2 md:-translate-y-1/2 md:left-[-15px]`} onClick={() => ref.current.slidePrev()} type="button">
							<GoChevronLeft className="text-black" size={20} />
						</button>
						<button className={`md:absolute transition-colors size-[30px] ${index % 2 == 0 ? "bg-verde" : "bg-salmon"} flex items-center justify-center z-10 rounded-full md:top-1/2 md:-translate-y-1/2 md:right-[-15px]`} onClick={() => ref.current.slideNext()} type="button">
							<GoChevronRight className="text-black" size={20} />
						</button>
					</div>
				</CustomAnimation>
			</section>
		</div>
	);
};

const SolutionCard = ({ mainColor = "text-verde", btnColor = "", icon, title, desc, list = [{ icon: "", text: "" }], link = "" }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 items-center h-full bg-neutral-900 bg-opacity-90 backdrop-blur-sm md:rounded-[30px] md:pt-[10px] md:pb-[60px] px-10 lg:px-20">
			<div className="col-span-1 order-2 md:order-1 py-12 max-md:pb-[85px] max-md:min-h-[490px]">
				<div className="w-full mx-auto max-w-[440px] text-center md:text-left">
					<Text className={twMerge("font-auxMono !text-[40px] mb-4", mainColor)}>{title}</Text>
					<Text className={"mb-8 md:mb-12"}>{desc}</Text>

					<ul className="grid grid-cols-2 lg:grid-cols-3 md:items-start md:gap-3 md:justify-between md:mb-12">
						{list.map((item, idx) => (
							<li className={`col-span-1 ${list.length == idx + 1 ? "col-span-2 lg:col-span-1" : ""} mb-8 lg:mb-0`} key={"idx-" + title + "-" + idx}>
								<img className="max-h-[20px] mx-auto md:ml-0 w-auto mb-2 md:mb-4" src={item.icon} alt="" />
								<Text className={"!leading-none lg:text-lg"}>{item.text}</Text>
							</li>
						))}
					</ul>

					<a href={link} target="_blank" rel="noopener noreferrer" className={`btn2 ${btnColor} w-[130px] mx-auto my-4 md:m-0 md:ml-0`}>
						Learn more
					</a>
				</div>
			</div>
			<div className="col-span-1 relative order-1 md:order-2">
				<img src={iconEarn} className="w-full lg:w-[70%] max-md:max-w-[150px] mx-auto md:max-h-[550px] max-h-[400px] opacity-0 pointer-events-none select-none" alt={"Icon demo"} />
				<img src={icon} className="w-full lg:w-[70%] max-md:max-w-[150px] mx-auto md:max-h-[550px] max-h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt={"Icon " + title} />
			</div>
		</div>
	);
};

export default SolutionsSection;
