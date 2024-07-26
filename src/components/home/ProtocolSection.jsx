import Text from "../Text";

import iconFlexible from "../../assets/img/icon/icon-flexible.svg";
import iconoPowerfull from "../../assets/img/icon/icon-powerfull.svg";
import iconAllround from "../../assets/img/icon/icon-allround.svg";
import CustomAnimation from "../animation/animation";
import { DEFAULT_PARAMS_INVIEW, V_FADE_IN_FROM_BOTTOM_TO_ORIGIN, V_FADE_IN_FROM_BOTTOM_TO_ORIGIN2, V_STAGGER_CONTAINER } from "../../constant/animationVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProtocolSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, DEFAULT_PARAMS_INVIEW);

	return (
		<section className="w-full lg:w-[85%] mx-auto pt-[30px] pb-[60px] md:py-[60px] lg:py-[130px]">
			<CustomAnimation variant={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN}>
				<h3 className="font-auxMono text-[32px] md:text-[40px] text-center mb-3">
					<span className="text-salmon">GlueX</span> Protocol
				</h3>

				<Text className={"max-w-[750px] mx-auto md:text-xl lg:text-2xl text-center mb-[40px] md:mb-[80px]"}>A solving framework that abstracts away the differences among blockchains, intents, originators and liquidity providers.</Text>
			</CustomAnimation>

			<motion.ul ref={ref} variants={V_STAGGER_CONTAINER} initial={"initial"} animate={isInView ? "show" : "initial"} className="md:flex md:items-start md:justify-between text-center md:text-left">
				<motion.li variants={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN2} transition={{ duration: 0.3 }} className="max-md:mx-auto max-w-[295px] mb-10 md:mb-0 md:max-w-[250px] max-md:bg-[#151515B2] max-md:rounded-[30px] max-md:py-[50px] max-md:px-6">
					<img src={iconFlexible} className="w-auto mx-auto md:ml-0 h-[50px] mb-9 md:mb-4" alt="Icon flexible" />
					<Text className={"font-auxMono uppercase"}>Flexible</Text>
					<Text>Solving primitives that allow the integration of any blockchain, intent book or liquidity source.</Text>
				</motion.li>
				<motion.li variants={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN2} transition={{ duration: 0.3 }} className="max-md:mx-auto max-w-[295px] mb-10 md:mb-0 md:max-w-[250px] max-md:bg-[#151515B2] max-md:rounded-[30px] max-md:py-[50px] max-md:px-6">
					<img src={iconoPowerfull} className="w-auto mx-auto md:ml-0 h-[50px] mb-9 md:mb-4" alt="Icon powerfull" />
					<Text className={"font-auxMono uppercase"}>Powerful</Text>
					<Text>Solving ecosystem powered by low-latency and high-availability node and indexing infrastructure.</Text>
				</motion.li>
				<motion.li variants={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN2} transition={{ duration: 0.3 }} className="max-md:mx-auto max-w-[295px] mb-10 md:mb-0 md:max-w-[250px] max-md:bg-[#151515B2] max-md:rounded-[30px] max-md:py-[50px] max-md:px-6">
					<img src={iconAllround} className="w-auto mx-auto md:ml-0 h-[50px] mb-9 md:mb-4" alt="Icon All-round" />
					<Text className={"font-auxMono uppercase"}>All-round</Text>
					<Text>Solving ecosystem that supports the complete value chain; from origination to settlement.</Text>
				</motion.li>
			</motion.ul>
		</section>
	);
};

export default ProtocolSection;
