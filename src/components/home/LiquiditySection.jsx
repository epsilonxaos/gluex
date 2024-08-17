import Text from "../Text";

import iconbetter from "../../assets/img/icon/icon-better.svg";
import iconToxic from "../../assets/img/icon/icon-toxic.svg";
import iconZero from "../../assets/img/icon/icon-zero.svg";
import CustomAnimation from "../animation/animation";

const LiquiditySection = () => {
	return (
		<div className="md:px-10">
			<section className="w-full pt-[30px] pb-[60px] md:py-[60px] lg:py-[90px] relative max-w-app mx-auto max-md:overflow-hidden">
				<div className="bg-neutral-900 bg-opacity-90 backdrop-blur-sm md:rounded-[30px] py-12 md:py-20 px-10 lg:px-20">
					<CustomAnimation animation="fade-in">
						<h3 className="font-auxMono text-[32px] md:text-[40px] text-center mb-3">
							GlueX <span className="text-verde">Liquidity</span> Modules
						</h3>

						<Text className={"max-w-[750px] mx-auto md:text-xl lg:text-2xl text-center mb-[40px] md:mb-[80px]"}>Get rebates, generate yield from non-toxic order flow and reduce your LVR by offering liquidity on GlueX Liquidity Pools or GlueX Limit Order Book</Text>
					</CustomAnimation>

					<ul className="grid md:gap-8 xl:gap-12 mb-[40px] md:mb-[80px] grid-cols-1 md:grid-cols-3 text-center md:text-left">
						<LiLiquidity delay={0} icon={iconToxic} title={"Only Non-toxic Flow"} text={"Only expose your liquidity to order flow from reputable OFAs."} />
						<LiLiquidity delay={100} icon={iconbetter} title={"Better Yields"} text={"Improve your APY through solver-optimized liquidity pools."} />
						<LiLiquidity delay={200} icon={iconZero} title={"Largest Exposure"} text={"Liquidity is used to settle intents across multiple OFAs."} />
					</ul>

					<div className="md:flex items-center justify-center gap-4">
						<a href="http://" target="_blank" rel="noopener noreferrer" className="btn verde mx-auto md:m-0 mb-8">
							Start integrating
						</a>
						<a href="http://" target="_blank" rel="noopener noreferrer" className="btn2 verde mx-auto md:m-0">
							See the data
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

const LiLiquidity = ({ icon, title, text, delay }) => {
	return (
		<CustomAnimation animation="fade-up" delay={delay}>
			<li className="col-span-1 max-md:mx-auto max-w-[350px] mb-10 md:mb-0">
				<img src={icon} className="w-auto mx-auto md:ml-0 h-[50px] mb-9 md:mb-4" alt="Icon flexible" />
				<Text className={"font-auxMono uppercase"}>{title}</Text>
				<Text>{text}</Text>
			</li>
		</CustomAnimation>
	);
};

export default LiquiditySection;
