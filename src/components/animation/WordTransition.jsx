import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const WordTransition = ({ words = [], className = "" }) => {
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [displayedText, setDisplayedText] = useState(words[0]);
	const [phase, setPhase] = useState("remove");

	useEffect(() => {
		let timeout;

		if (phase === "remove") {
			if (displayedText.length > 0) {
				timeout = setTimeout(() => {
					setDisplayedText(displayedText.slice(0, -1));
				}, 50);
			} else {
				setPhase("add");
				setCurrentWord(words[(words.indexOf(currentWord) + 1) % words.length]);
			}
		} else if (phase === "add") {
			if (displayedText.length < currentWord.length) {
				timeout = setTimeout(() => {
					setDisplayedText(currentWord.slice(0, displayedText.length + 1));
				}, 100);
			} else {
				timeout = setTimeout(() => {
					setPhase("remove");
				}, 4000);
			}
		}

		return () => clearTimeout(timeout);
	}, [displayedText, phase, currentWord]);

	return <motion.span className={twMerge("text-verde", className)}>{displayedText}</motion.span>;
};

// export const WordTransition = ({ words }) => {
// 	const [index, setIndex] = useState(0);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setIndex((prevIndex) => (prevIndex + 1) % words.length);
// 		}, 2000); // Cambia cada 2 segundos
// 		return () => clearInterval(interval);
// 	}, []);

// 	return (
// 		<AnimatePresence>
// 			<motion.span key={words[index]} className="text-verde inline-block" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.5 }}>
// 				{words[index]}
// 			</motion.span>
// 		</AnimatePresence>
// 	);
// };
