import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function AnimatedNumber({ value, direction = "up" }: { value: number; direction?: "up" | "down" }) {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	const ref = useRef<HTMLSpanElement>(null);
	const motionValue = useMotionValue(direction === "down" ? value : 0);
	const springValue = useSpring(motionValue, {
		damping: 100,
		stiffness: isMobile ? 1000 : 100,
		duration: 2,
	});
	const isInView = useInView(ref, { once: true, margin: "0px" });

	useEffect(() => {
		if (isInView) {
			motionValue.set(direction === "down" ? 0 : value);
		}
	}, [motionValue, isInView]);

	useEffect(
		() =>
			springValue.on("change", (latest) => {
				if (ref.current) {
					ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0));
				}
			}),
		[springValue]
	);

	return <span ref={ref} />;
}
