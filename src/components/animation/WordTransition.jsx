import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const vr = {
	enter: {
		y: 60,
		opacity: 0,
	},
	center: {
		y: 0,
		opacity: 1,
	},
	exit: {
		y: -100,
		opacity: 0,
	},
};

export const WordTransition = ({ words, className, based = "" }) => {
	const [index, setIndex] = useState(0);

	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.visibilityState === "visible") {
				setIsAnimating(false);
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		if (!isAnimating) {
			const timeout = setTimeout(() => {
				setIsAnimating(true);
				setIndex((prevIndex) => (prevIndex + 1) % words.length);
			}, 2000);
			return () => {
				clearTimeout(timeout);
				document.removeEventListener("visibilitychange", handleVisibilityChange);
			};
		}
	}, [index, isAnimating, words.length]);

	return (
		<span className={twMerge("relative inline text-verde overflow-hidden text-center", className)}>
			<span className="opacity-0">{based}</span>
			<AnimatePresence initial={false}>
				<motion.span
					className=" absolute top-0 left-0 size-full flex items-center justify-center"
					key={words[index]}
					variants={vr}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						opacity: { duration: 0.5 },
					}}
					onAnimationComplete={() => setIsAnimating(false)}
				>
					{words[index]}
				</motion.span>
			</AnimatePresence>
		</span>
	);
};
