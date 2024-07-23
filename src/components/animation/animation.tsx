import React, { type ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DEFAULT_PARAMS_INVIEW } from "../../constant/animationVariants";

interface ICustomAnimation {
	children: ReactNode;
	variant: {
		initial: object;
		show: object;
		hide: object;
	};
	className?: string;
}

const CustomAnimation = (opt: ICustomAnimation) => {
	const { children, variant, className } = opt;
	const ref = useRef(null);
	const isInView = useInView(ref, DEFAULT_PARAMS_INVIEW);

	return (
		<motion.div className={className} ref={ref} variants={variant} initial={"initial"} animate={isInView ? "show" : "hide"}>
			{children}
		</motion.div>
	);
};

export default CustomAnimation;
