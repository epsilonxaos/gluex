import { useEffect, useRef } from "react";
import { bubbleInit } from "../utils/bubblesAnimation";

import "../css/bubblesAnimation.css";
import { twMerge } from "tailwind-merge";

export const BubblesAnimation = ({ className = "", children }) => {
	const ref = useRef();

	useEffect(() => {
		if (ref) bubbleInit();
	}, [ref]);

	return (
		<section ref={ref} className={twMerge("overflow-hidden h-screen relative", className)}>
			<div className="bubblesAnimationNoise" />
			<div className="relative z-[2]">{children}</div>
			<div className="gradient-bg">
				<svg xmlns="http://www.w3.org/2000/svg">
					<defs>
						<filter id="goo">
							<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
							<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
							<feBlend in="SourceGraphic" in2="goo" />
						</filter>
					</defs>
				</svg>
				<div className="gradients-container">
					<div className="g1"></div>
					{/* <div className="g2"></div> */}
					<div className="g3"></div>
					<div className="g4"></div>
					<div className="g5"></div>
					<div className="interactive"></div>
				</div>
			</div>
		</section>
	);
};
