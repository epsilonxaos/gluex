import { InfiniteMovingCards } from "../animation/infinite-moving-cards";
import { Si7Zip, SiAirbnb, SiAmazongames, SiAmd, SiApple, SiCocacola, SiCoolermaster, SiCorsair, SiDeno, SiDiscord, SiGithub, SiGreensock, SiHuawei, SiIntel, SiLaravel, SiLess, SiMsibusiness, SiNasa, SiNintendoswitch, SiSteamdeck } from "react-icons/si";

export const SectionBrands = () => {
	return (
		<div className="flex flex-col flex-wrap items-end justify-end pb-[140px] md:pb-[14vh] w-full h-full px-10 max-w-app mx-auto bg-black-noise md:bg-none">
			<h3 className="text-[32px] w-full text-center mb-4">
				Gluing <span className="text-salmon">DeFi</span>
			</h3>
			<p className="mb-8 w-[230px] mx-auto md:w-full md:font-auxMono text-sm text-center">GlueX pulls together the capabilities of all DeFi protocols</p>

			<InfiniteMovingCards className="mx-auto w-[90%]" items={testimonials} direction="right" speed="slow" />
			<InfiniteMovingCards className="mx-auto w-[90%]" items={testimonials} direction="left" speed="slow" />
		</div>
	);
};

const iconTest = 36;
const testimonials = [
	{
		icon: <SiIntel size={iconTest} />,
	},
	{
		icon: <SiAmd size={iconTest} />,
	},
	{
		icon: <Si7Zip size={iconTest} />,
	},
	{
		icon: <SiAirbnb size={iconTest} />,
	},
	{
		icon: <SiAmazongames size={iconTest} />,
	},
	{
		icon: <SiApple size={iconTest} />,
	},
	{
		icon: <SiCocacola size={iconTest} />,
	},
	{
		icon: <SiCoolermaster size={iconTest} />,
	},
	{
		icon: <SiCorsair size={iconTest} />,
	},
	{
		icon: <SiDiscord size={iconTest} />,
	},
	{
		icon: <SiDeno size={iconTest} />,
	},
	{
		icon: <SiGithub size={iconTest} />,
	},
	{
		icon: <SiGreensock size={iconTest} />,
	},
	{
		icon: <SiHuawei size={iconTest} />,
	},
	{
		icon: <SiLaravel size={iconTest} />,
	},
	{
		icon: <SiLess size={iconTest} />,
	},
	{
		icon: <SiMsibusiness size={iconTest} />,
	},
	{
		icon: <SiNasa size={iconTest} />,
	},
	{
		icon: <SiNintendoswitch size={iconTest} />,
	},
	{
		icon: <SiSteamdeck size={iconTest} />,
	},
];
