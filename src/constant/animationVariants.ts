export const V_FROM_LEFT_TO_ORIGIN = {
	initial: {
		x: -200,
		opacity: 0,
	},
	show: { x: 0, opacity: 1, transition: { duration: 1.5, type: "tween", delay: 0.4 } },
};
export const V_FROM_RIGHT_TO_ORIGIN = {
	initial: {
		x: 200,
		opacity: 0,
	},
	show: { x: 0, opacity: 1, transition: { duration: 1.5, type: "tween", delay: 0.4 } },
};
export const V_FROM_BOTTOM_TO_ORIGIN = {
	initial: {
		y: 200,
		opacity: 0,
	},
	show: { y: 0, opacity: 1, transition: { duration: 1.5, type: "tween", delay: 0.4 } },
};
export const V_FROM_TOP_TO_ORIGIN = {
	initial: {
		y: -40,
		opacity: 0,
	},
	show: { y: 0, opacity: 1, transition: { duration: 0.6, type: "tween", delay: 0.3 } },
};

export const V_FADE_IN = {
	initial: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1.5, type: "tween", delay: 0.4 } },
};

export const V_FADE_IN_FROM_BOTTOM_TO_ORIGIN = {
	initial: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 1, type: "tween", delay: 0.4 } },
};

export const V_FADE_IN_FROM_BOTTOM_TO_ORIGIN2 = {
	initial: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const DEFAULT_PARAMS_INVIEW = { once: true, margin: "0px 0px 50px 0px" };

export const V_STAGGER_CONTAINER = {
	initial: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // Tiempo entre la animación de cada hijo
			delayChildren: 0.5,
		},
	},
};
