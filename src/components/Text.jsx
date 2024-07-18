import { twMerge } from "tailwind-merge";

const Text = ({ className, children }) => {
	return <p className={twMerge("text-sm md:text-lg lg:text-xl font-darker", className)}>{children}</p>;
};

export default Text;
