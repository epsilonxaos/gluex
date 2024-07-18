import Text from "../Text";

import iconFlexible from "../../assets/img/icon/icon-flexible.svg";
import iconoPowerfull from "../../assets/img/icon/icon-powerfull.svg";
import iconAllround from "../../assets/img/icon/icon-allround.svg";

const ProtocolSection = () => {
	return (
		<section className="w-full lg:w-[85%] mx-auto md:py-[60px]">
			<h3 className="font-auxMono text-[32px] md:text-[40px] text-center mb-3">
				<span className="text-salmon">GlueX</span> Protocol
			</h3>

			<Text className={"max-w-[750px] mx-auto md:text-xl lg:text-2xl text-center mb-[80px]"}>A solving framework that abstracts away the differences among blockchains, intents, originators and liquidity providers.</Text>

			<ul className="md:flex md:items-start md:justify-between">
				<li className="max-md:mx-auto max-w-[295px] mb-10 md:mb-0 md:max-w-[250px] max-md:bg-[#151515B2] max-md:rounded-[30px] max-md:py-[50px] max-md:px-6">
					<img src={iconFlexible} className="w-auto mx-auto md:ml-0 h-[50px] mb-9 md:mb-4" alt="Icon flexible" />
					<Text className={"font-auxMono uppercase"}>Flexible</Text>
					<Text>Solving primitives that allow the integration of any blockchain, intent book or liquidity source.</Text>
				</li>
				<li className="max-md:mx-auto max-w-[295px] mb-10 md:mb-0 md:max-w-[250px] max-md:bg-[#151515B2] max-md:rounded-[30px] max-md:py-[50px] max-md:px-6">
					<img src={iconoPowerfull} className="w-auto mx-auto md:ml-0 h-[50px] mb-9 md:mb-4" alt="Icon powerfull" />
					<Text className={"font-auxMono uppercase"}>Powerful</Text>
					<Text>Solving ecosystem powered by low-latency and high-availability node and indexing infrastructure.</Text>
				</li>
				<li className="max-md:mx-auto max-w-[295px] mb-10 md:mb-0 md:max-w-[250px] max-md:bg-[#151515B2] max-md:rounded-[30px] max-md:py-[50px] max-md:px-6">
					<img src={iconAllround} className="w-auto mx-auto md:ml-0 h-[50px] mb-9 md:mb-4" alt="Icon All-round" />
					<Text className={"font-auxMono uppercase"}>All-round</Text>
					<Text>Solving ecosystem that supports the complete value chain; from origination to settlement.</Text>
				</li>
			</ul>
		</section>
	);
};

export default ProtocolSection;
