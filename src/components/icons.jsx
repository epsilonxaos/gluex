import { twMerge } from "tailwind-merge";

export const XIcon = ({ className }) => {
	return (
		<svg className={twMerge("w-[24px] md:w-[36px] lg:w-[55px] lg:left-[-15px] lg:top-[-6px] relative left-[-8px] top-[-3px] inline fill-white", className)} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 89.1 88.1" xmlSpace="preserve">
			<g>
				<path d="M0.5,2.3l9.5,19c0.5,1,1.6,1.7,2.7,1.7h5.8v0c1.2,0,2.2,0.7,2.7,1.7l0,0L29,40.3c0.5,1,1.6,1.7,2.7,1.7h9.4 c1,0,1.6-1,1.2-1.9l-9.5-19c-0.5-1-1.6-1.7-2.7-1.7h-5.8v0c-1.2,0-2.2-0.7-2.7-1.7l0,0L13.8,2c-0.5-1-1.6-1.7-2.7-1.7H1.7 C0.7,0.3,0.1,1.4,0.5,2.3z" />
				<path d="M42.4,48l-9.5,19c-0.5,1-1.6,1.7-2.7,1.7h-5.8v0c-1.2,0-2.2,0.7-2.7,1.7l0,0L13.8,86c-0.5,1-1.6,1.7-2.7,1.7H1.7 c-1,0-1.6-1-1.2-1.9l9.5-19c0.5-1,1.6-1.7,2.7-1.7h5.8v0c1.2,0,2.2-0.7,2.7-1.7l0,0L29,47.8c0.5-1,1.6-1.7,2.7-1.7h9.4 C42.2,46.1,42.8,47.1,42.4,48z" />
				<path d="M88.6,2.3l-9.5,19c-0.5,1-1.6,1.7-2.7,1.7h-5.8v0c-1.2,0-2.2,0.7-2.7,1.7l0,0l-7.9,15.7c-0.5,1-1.6,1.7-2.7,1.7h-9.4 c-1,0-1.6-1-1.2-1.9l9.5-19c0.5-1,1.6-1.7,2.7-1.7h5.8v0c1.2,0,2.2-0.7,2.7-1.7l0,0L75.3,2c0.5-1,1.6-1.7,2.7-1.7h9.4 C88.4,0.3,89.1,1.4,88.6,2.3z" />
				<path d="M46.7,48l9.5,19c0.5,1,1.6,1.7,2.7,1.7h5.8v0c1.2,0,2.2,0.7,2.7,1.7l0,0L75.3,86c0.5,1,1.6,1.7,2.7,1.7h9.4 c1,0,1.6-1,1.2-1.9l-9.5-19c-0.5-1-1.6-1.7-2.7-1.7h-5.8v0c-1.2,0-2.2-0.7-2.7-1.7l0,0l-7.9-15.7c-0.5-1-1.6-1.7-2.7-1.7h-9.4 C46.9,46.1,46.3,47.1,46.7,48z" />
			</g>
		</svg>
	);
};

export const IconViewMore = ({ className }) => {
	return (
		<svg className={twMerge(" size-4 inline", className)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 43.8 43.8">
			<g>
				<path className="st0" d="M0,0v43.8h43.8V0H0z M40.3,40.3H3.5V3.5h36.8V40.3z" />
				<path
					className="st0"
					d="M13.5,31.9c0.4,0,0.8-0.2,1.1-0.5l14.2-14.2v9.7c0,0.9,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-15h-15
	   c-0.9,0-1.5,0.7-1.5,1.5S16,15,16.8,15h9.7L12.4,29.2c-0.6,0.6-0.6,1.6,0,2.2C12.7,31.7,13.1,31.9,13.5,31.9z"
				/>
			</g>
		</svg>
	);
};
