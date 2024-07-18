import ProtocolSection from "../components/home/ProtocolSection";
import CountSection from "../components/home/CountSection";
import MainSection from "../components/home/MainSection";

export const Home = () => {
	return (
		<main className="relative z-10">
			<MainSection />

			<div className="max-w-app mx-auto px-10">
				<CountSection />

				<ProtocolSection />
			</div>
		</main>
	);
};
