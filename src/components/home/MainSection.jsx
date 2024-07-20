import animateDesk from "../../assets/img/animate-desk.gif";
import { XIcon } from "../icons";

const MainSection = () => {
	return (
		<section className="bg-texture-etapa2-luces w-full relative z-10">
			<div className="max-w-app mx-auto px-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-start  md:min-h-svh md:w-[90%] mx-auto md:pb-[60px] pt-[120px]">
					<div className="col-span-1 mb-[40px] lg:mb-0">
						<h1 className="text-[40px] max-w-[265px] text-center md:text-[60px] lg:text-[96px] leading-none md:max-w-[430px] mx-auto">
							Earn, Solve <br className="md:hidden" /> and Build with <br className="md:hidden" />
							<span className="text-verde">
								Glue <XIcon className={"fill-verde"} />
							</span>
						</h1>
					</div>
					<div className="col-span-1">
						<img src={animateDesk} alt="Animacion de caja" className="max-w-[350px] lg:w-[90%] lg:max-w-[590px] mx-auto w-full" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainSection;
