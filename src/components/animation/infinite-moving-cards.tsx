"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../cn";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		icon: any;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty("--animation-direction", "forwards");
			} else {
				containerRef.current.style.setProperty("--animation-direction", "reverse");
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "150s");
			}
		}
	};
	return (
		<div ref={containerRef} className={cn("scroller relative z-20 w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]", className)}>
			<ul ref={scrollerRef} className={cn(" flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap", start && "animate-scroll ", pauseOnHover && "hover:[animation-play-state:paused]")}>
				{items.map((item, idx) => (
					<li className="w-9 max-w-full relative flex items-center justify-center" key={"icon-" + idx}>
						<img src={item.icon} className="invert size-9" alt="Icon" />
					</li>
				))}
			</ul>
		</div>
	);
};
