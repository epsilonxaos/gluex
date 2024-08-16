import Text from "../Text";

import iconToxic from "../../assets/img/icon/icon-toxic.svg";
import iconbetter from "../../assets/img/icon/icon-better.svg";
import iconZero from "../../assets/img/icon/icon-zero.svg";
import CustomAnimation from "../animation/animation";
import { DEFAULT_PARAMS_INVIEW, V_FADE_IN_FROM_BOTTOM_TO_ORIGIN, V_FADE_IN_FROM_BOTTOM_TO_ORIGIN2, V_STAGGER_CONTAINER } from "../../constant/animationVariants";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const LiquiditySection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, DEFAULT_PARAMS_INVIEW);

	return (
		<div className="md:px-10">
			<section className="w-full pt-[30px] pb-[60px] md:py-[60px] lg:py-[90px] relative max-w-app mx-auto max-md:overflow-hidden">
				<div className="bg-neutral-900 bg-opacity-90 backdrop-blur-sm md:rounded-[30px] py-12 md:py-20 px-10 lg:px-20">
					<CustomAnimation variant={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN}>
						<h3 className="font-auxMono text-[32px] md:text-[40px] text-center mb-3">
							GlueX <span className="text-verde">Liquidity</span> Modules
						</h3>

						<Text className={"max-w-[750px] mx-auto md:text-xl lg:text-2xl text-center mb-[40px] md:mb-[80px]"}>Get rebates, generate yield from non-toxic order flow and reduce your LVR by offering liquidity on GlueX Liquidity Pools or GlueX Limit Order Book</Text>
					</CustomAnimation>

					<motion.ul ref={ref} variants={V_STAGGER_CONTAINER} initial={"initial"} animate={isInView ? "show" : "initial"} className="grid md:gap-8 xl:gap-12 md:mb-10 grid-cols-1 md:grid-cols-3 text-center md:text-left">
						<LiLiquidity icon={iconToxic} title={"Only Non-toxic Flow"} text={"Only expose your liquidity to order flow from reputable OFAs."} />
						<LiLiquidity icon={iconbetter} title={"Better Yields"} text={"Improve your APY through solver-optimized liquidity pools."} />
						<LiLiquidity icon={iconZero} title={"Largest Exposure"} text={"Liquidity is used to settle intents across multiple OFAs."} />
					</motion.ul>

					<div className="md:flex items-center justify-center gap-4">
						<a href="http://" target="_blank" rel="noopener noreferrer" className="btn verde mx-auto md:m-0 mb-8">
							Start integrating
						</a>
						<a href="http://" target="_blank" rel="noopener noreferrer" className="btn2 verde mx-auto md:m-0">
							See the data
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

const LiLiquidity = ({ icon, title, text }) => {
	return (
		<motion.li variants={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN2} transition={{ duration: 0.3 }} className="col-span-1 max-md:mx-auto max-w-[350px] mb-10 md:mb-0">
			<img src={icon} className="w-auto mx-auto md:ml-0 h-[50px] mb-9 md:mb-4" alt="Icon flexible" />
			<Text className={"font-auxMono uppercase"}>{title}</Text>
			<Text>{text}</Text>
		</motion.li>
	);
};

export default LiquiditySection;
