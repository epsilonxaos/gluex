import AnimatedNumber from "../animation/AnimatedNumber";
import { WordTransition } from "../animation/WordTransition";
import animate from "../../assets/img/animate.gif";

const word2 = ["Earn", "Solve", "Build"];
const words = ["flexible", "powerful", "all-round"];

export const SectionInitial = () => {
	return (
		<div className="md:flex md:flex-col relative md:flex-wrap md:items-end md:justify-end max-md:min-h-svh max-md:pt-[140px] md:pb-[15vh] w-full h-full">
			{/* //* Solo movil */}
			<div className="md:hidden text-[48px] w-full text-center mb-4 mx-auto">
				<span className="overflow-hidden flex items-center justify-center w-full">
					<WordTransition className="text-white" words={word2} based="Solve&nbsp;" />
					<span>with Glue</span>
					<svg className="w-[30px] relative top-1 inline ml-2" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 89.1 88.1" xmlSpace="preserve">
						<g>
							<path className="fill-white" d="M0.5,2.3l9.5,19c0.5,1,1.6,1.7,2.7,1.7h5.8v0c1.2,0,2.2,0.7,2.7,1.7l0,0L29,40.3c0.5,1,1.6,1.7,2.7,1.7h9.4 c1,0,1.6-1,1.2-1.9l-9.5-19c-0.5-1-1.6-1.7-2.7-1.7h-5.8v0c-1.2,0-2.2-0.7-2.7-1.7l0,0L13.8,2c-0.5-1-1.6-1.7-2.7-1.7H1.7 C0.7,0.3,0.1,1.4,0.5,2.3z" />
							<path className="fill-white" d="M42.4,48l-9.5,19c-0.5,1-1.6,1.7-2.7,1.7h-5.8v0c-1.2,0-2.2,0.7-2.7,1.7l0,0L13.8,86c-0.5,1-1.6,1.7-2.7,1.7H1.7 c-1,0-1.6-1-1.2-1.9l9.5-19c0.5-1,1.6-1.7,2.7-1.7h5.8v0c1.2,0,2.2-0.7,2.7-1.7l0,0L29,47.8c0.5-1,1.6-1.7,2.7-1.7h9.4 C42.2,46.1,42.8,47.1,42.4,48z" />
							<path className="fill-white" d="M88.6,2.3l-9.5,19c-0.5,1-1.6,1.7-2.7,1.7h-5.8v0c-1.2,0-2.2,0.7-2.7,1.7l0,0l-7.9,15.7c-0.5,1-1.6,1.7-2.7,1.7h-9.4 c-1,0-1.6-1-1.2-1.9l9.5-19c0.5-1,1.6-1.7,2.7-1.7h5.8v0c1.2,0,2.2-0.7,2.7-1.7l0,0L75.3,2c0.5-1,1.6-1.7,2.7-1.7h9.4 C88.4,0.3,89.1,1.4,88.6,2.3z" />
							<path className="fill-white" d="M46.7,48l9.5,19c0.5,1,1.6,1.7,2.7,1.7h5.8v0c1.2,0,2.2,0.7,2.7,1.7l0,0L75.3,86c0.5,1,1.6,1.7,2.7,1.7h9.4 c1,0,1.6-1,1.2-1.9l-9.5-19c-0.5-1-1.6-1.7-2.7-1.7h-5.8v0c-1.2,0-2.2-0.7-2.7-1.7l0,0l-7.9-15.7c-0.5-1-1.6-1.7-2.7-1.7h-9.4 C46.9,46.1,46.3,47.1,46.7,48z" />
						</g>
					</svg>
				</span>
			</div>

			<img src={animate} alt="Animacion" className="w-full mx-auto md:hidden " />

			<p className="text-[29px] leading-[30px] md:text-[32px] w-full text-center mb-[0px] md:mb-[8vh] px-4 md:flex md:items-center md:justify-center">
				<span className="inline-flex">
					A{" "}
					<div className="overflow-hidden">
						<WordTransition words={words} based="&nbsp;all-round&nbsp;" />
					</div>{" "}
					solving ecosystem
				</span>
				<span className="block md:inline">&nbsp;with strong track record.</span>
			</p>

			<div className="bg-gradient h-[70px] md:hidden"></div>
			<div className="bg-black-noise md:bg-none pb-[80px] md:pb-0 w-full">
				<ul className=" py-14 md:py-0 rounded-2xl max-w-max px-12 text-center md:flex md:items-center md:justify-between md:max-w-[960px] w-[95%] mx-auto font-auxMono">
					<li className="mb-[0px] md:mb-0">
						<p className="text-xs lg:text-sm">TOTAL VALUE FLOW</p>
						<p className="text-[18px] lg:text-[23px]">
							+$
							<AnimatedNumber value={32000000000} />
						</p>
					</li>
					<li className="py-4 md:hidden">
						<div className="h-[40px] w-[1px] bg-white mx-auto" />
					</li>
					<li className="mb-[0px] md:mb-0">
						<p className="text-xs lg:text-sm">TOTAL INTENTS SETTLED</p>
						<p className="text-[18px] lg:text-[23px]">
							+<AnimatedNumber value={300000} />
						</p>
					</li>
					<li className="py-4 md:hidden">
						<div className="h-[40px] w-[1px] bg-white mx-auto" />
					</li>
					<li className="">
						<p className="text-xs lg:text-sm">TOTAL VALUE SOLVED</p>
						<p className="text-[18px] lg:text-[23px]">
							+$
							<AnimatedNumber value={6000000000} />
						</p>
					</li>
				</ul>
			</div>

			<div className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 md:block hidden">
				<div className="scroll-down2"></div>
			</div>
		</div>
	);
};
