import animateDesk from "../../assets/img/animate-desk.gif";
import { V_FROM_LEFT_TO_ORIGIN, V_FROM_RIGHT_TO_ORIGIN } from "../../constant/animationVariants";
import CustomAnimation from "../animation/animation";
import { XIcon } from "../icons";

const MainSection = () => {
	return (
		<section className="bg-texture-etapa2-luces w-full relative z-10">
			<div className="max-w-app mx-auto px-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-start  md:min-h-svh md:w-[90%] mx-auto md:pb-[60px] pt-[120px]">
					<CustomAnimation className="col-span-1 mb-[40px] lg:mb-0" variant={V_FROM_LEFT_TO_ORIGIN}>
						<h1 className="text-[40px] max-w-[265px] text-center md:text-[60px] lg:text-[96px] leading-none md:max-w-[430px] mx-auto">
							Earn, Solve <br className="md:hidden" /> and Build with <br className="md:hidden" />
							<span className="text-verde">
								Glue <XIcon className={"fill-verde"} />
							</span>
						</h1>
					</CustomAnimation>
					<CustomAnimation className="col-span-1" variant={V_FROM_RIGHT_TO_ORIGIN}>
						<img src={animateDesk} alt="Animacion de caja" className="max-w-[350px] lg:w-[90%] lg:max-w-[590px] mx-auto w-full" />
					</CustomAnimation>
				</div>
			</div>
		</section>
	);
};

export default MainSection;
