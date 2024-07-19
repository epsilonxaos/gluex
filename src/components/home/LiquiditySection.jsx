import Text from "../Text";

import iconToxic from "../../assets/img/icon/icon-toxic.svg";
import iconbetter from "../../assets/img/icon/icon-better.svg";
import iconZero from "../../assets/img/icon/icon-zero.svg";

const LiquiditySection = () => {
	return (
		<section className="w-full lg:w-[85%] mx-auto md:py-[60px]">
			<h3 className="font-auxMono text-[32px] md:text-[40px] text-center mb-3">
				GlueX <span className="text-salmon">Liquidity</span> Modules
			</h3>

			<Text className={"max-w-[750px] mx-auto md:text-xl lg:text-2xl text-center mb-[80px]"}>Get rebates, generate yield from non-toxic order flow and reduce your LVR by offering liquidity on GlueX Liquidity Pools or GlueX Limit Order Book</Text>

			<ul className="md:flex md:items-start md:justify-between">
				<li className="max-md:mx-auto max-w-[295px] mb-10 md:mb-0 md:max-w-[250px] max-md:bg-[#151515B2] max-md:rounded-[30px] max-md:py-[50px] max-md:px-6">
					<img src={iconToxic} className="w-auto mx-auto md:ml-0 h-[35px] mb-9 md:mb-4" alt="Icon Only Non-toxic" />
					<Text className={"font-auxMono uppercase text-salmon lg:text-lg"}>Only Non-toxic Flow</Text>
					<Text>Only expose your liquidity to order flow from reputable OFAs.</Text>
				</li>
				<li className="max-md:mx-auto max-w-[295px] mb-10 md:mb-0 md:max-w-[250px] max-md:bg-[#151515B2] max-md:rounded-[30px] max-md:py-[50px] max-md:px-6">
					<img src={iconbetter} className="w-auto mx-auto md:ml-0 h-[35px] mb-9 md:mb-4" alt="Icon Better Yields" />
					<Text className={"font-auxMono uppercase text-salmon lg:text-lg"}>Better Yields</Text>
					<Text>Improve your APY through solver-optimized liquidity pools.</Text>
				</li>
				<li className="max-md:mx-auto max-w-[295px] mb-10 md:mb-0 md:max-w-[250px] max-md:bg-[#151515B2] max-md:rounded-[30px] max-md:py-[50px] max-md:px-6">
					<img src={iconZero} className="w-auto mx-auto md:ml-0 h-[35px] mb-9 md:mb-4" alt="Icon Largest Exposure" />
					<Text className={"font-auxMono uppercase text-salmon lg:text-lg"}>Largest Exposure</Text>
					<Text>Liquidity is used to settle intents across multiple OFAs.</Text>
				</li>
			</ul>
		</section>
	);
};

export default LiquiditySection;
