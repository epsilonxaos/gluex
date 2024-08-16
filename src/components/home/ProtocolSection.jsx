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
		<section className="w-full  mx-auto pt-[30px] pb-[60px] md:py-[60px] lg:py-[90px]">
			<CustomAnimation variant={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN}>
				<h3 className="font-auxMono text-[32px] md:text-[40px] text-center mb-3">
					<span className="text-salmon">GlueX</span> Protocol
				</h3>

				<Text className={"max-w-[750px] mx-auto md:text-xl lg:text-2xl text-center mb-[40px] md:mb-[80px]"}>A solving framework that abstracts away the differences among blockchains, intents, originators and liquidity providers.</Text>
			</CustomAnimation>

			<motion.ul ref={ref} variants={V_STAGGER_CONTAINER} initial={"initial"} animate={isInView ? "show" : "initial"} className="grid md:gap-8 xl:gap-12 md:mb-10 grid-cols-1 md:grid-cols-3 text-center md:text-left">
				<LiProtocol icon={iconFlexible} title={"Flexible"} text={"Solving primitives that allow the integration of any blockchain, intent book or liquidity source."} />
				<LiProtocol icon={iconoPowerfull} title={"Powerful"} text={"Solving ecosystem powered by low-latency and high-availability node and indexing infrastructure."} />
				<LiProtocol icon={iconAllround} title={"All-round"} text={"Solving ecosystem that supports the complete value chain; from origination to settlement."} />
			</motion.ul>

			<div className="md:flex items-center justify-center gap-4">
				<a href="http://" target="_blank" rel="noopener noreferrer" className="btn mx-auto md:m-0 mb-8">
					Start integrating
				</a>
				<a href="http://" target="_blank" rel="noopener noreferrer" className="btn2 mx-auto md:m-0">
					See the data
				</a>
			</div>
		</section>
	);
};

const LiProtocol = ({ icon, title, text }) => {
	return (
		<motion.li variants={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN2} transition={{ duration: 0.3 }} className="col-span-1 max-md:mx-auto max-w-[350px] mb-10 md:mb-0">
			<div className="bg-neutral-900 bg-opacity-90 backdrop-blur-sm max-md:py-10 p-[25px] xl:p-[50px] rounded-[30px] h-full">
				<img src={icon} className="w-auto mx-auto md:ml-0 h-[50px] mb-9 md:mb-4" alt="Icon flexible" />
				<Text className={"font-auxMono uppercase"}>{title}</Text>
				<Text>{text}</Text>
			</div>
		</motion.li>
	);
};

export default ProtocolSection;
