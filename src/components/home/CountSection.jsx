import AnimatedNumber from "../animation/AnimatedNumber";

import "swiper/css/bundle";
import CustomAnimation from "../animation/animation";
import { V_FADE_IN_FROM_BOTTOM_TO_ORIGIN } from "../../constant/animationVariants";

const CountSection = () => {
	return (
		<section className="w-full  mx-auto md:py-[60px] lg:py-[90px]">
			<CustomAnimation variant={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN}>
				<ul className=" py-14 md:py-0 rounded-2xl max-w-max text-center md:text-left md:flex md:items-start md:justify-between md:max-w-[960px] w-[95%] mx-auto font-auxMono">
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
			</CustomAnimation>
		</section>
	);
};

const FlowValue = () => {
	return (
		<>
			<p className="text-xs lg:text-sm">TOTAL VALUE FLOW</p>
			<p className="text-[18px] lg:text-[23px] relative md:max-w-max">
				+$
				<AnimatedNumber value={32000000000} />
				<span className="hidden md:block border-t w-full absolute bottom-2 left-0"></span>
			</p>
		</>
	);
};

const SettledValue = () => {
	return (
		<>
			<p className="text-xs lg:text-sm">TOTAL INTENTS SETTLED</p>
			<p className="text-[18px] lg:text-[23px] relative md:max-w-max">
				+<AnimatedNumber value={300000} />
				<span className="hidden md:block border-t w-full absolute bottom-2 left-0"></span>
			</p>
		</>
	);
};

const SolvedValue = () => {
	return (
		<>
			<p className="text-xs lg:text-sm">TOTAL VALUE SOLVED</p>
			<p className="text-[18px] lg:text-[23px] relative md:max-w-max">
				+$
				<AnimatedNumber value={6000000000} />
				<span className="hidden md:block border-t w-full absolute bottom-2 left-0"></span>
			</p>
		</>
	);
};

export default CountSection;
