import ProtocolSection from "../components/home/ProtocolSection";
import CountSection from "../components/home/CountSection";
import MainSection from "../components/home/MainSection";
import SolutionsSection from "../components/home/SolutionsSection";
import LiquiditySection from "../components/home/LiquiditySection";
import BrandSection from "../components/home/BrandSection";
import { BubblesAnimation } from "../components/animation/BubblesAnimation";

export const Home = () => {
	return (
		<>
			<BubblesAnimation className=" top-0 left-0 w-full h-svh" />
			<MainSection />
			<main className="relative z-10 ">
				<div className="max-w-app mx-auto px-10">
					<CountSection />

					<ProtocolSection />
				</div>

				<SolutionsSection />

				<div className="max-w-app mx-auto px-10">
					<LiquiditySection />

					<BrandSection />
				</div>
			</main>
		</>
	);
};
