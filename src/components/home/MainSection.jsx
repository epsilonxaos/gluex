import { useMediaQuery } from "react-responsive";
import animateDesk from "../../assets/img/animate-desk.svg";
// import animateMovil from "../../assets/img/animate-movil.gif";
import { V_FADE_IN_FROM_BOTTOM_TO_ORIGIN } from "../../constant/animationVariants";
import CustomAnimation from "../animation/animation";
import { InfiniteMovingCards } from "../animation/infinite-moving-cards";
import { XIcon } from "../icons";
import Text from "../Text";

const MainSection = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	return (
		<section className="w-full relative z-10 overflow-hidden">
			<div className="max-w-app mx-auto px-10 min-h-svh flex flex-col items-center justify-center md:min-h-svh">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-start   md:w-[90%] mx-auto md:pb-[60px] pt-[120px]">
					<CustomAnimation className="col-span-1 mb-[40px] lg:mb-0" animation="fade-right">
						<div className="max-w-[265px] md:max-w-[430px] mx-auto">
							<h1 className="text-[40px] text-left mb-4 md:text-[60px] lg:text-[96px] leading-none">
								Earn, Solve <br className="md:hidden" /> and Build with <br className="md:hidden" />
								<span className="text-verde">
									Glue <XIcon className={"fill-verde"} />
								</span>
							</h1>

							<Text className="mb-8">Via revenue-share among users, liquidity providers, solvers and contributors</Text>

							<div className="md:flex items-center justify-center lg:justify-start gap-4">
								<a href="http://" target="_blank" rel="noopener noreferrer" className="btn verde mx-auto md:m-0 mb-8">
									Start integrating
								</a>
								<a href="http://" target="_blank" rel="noopener noreferrer" className="btn2 verde mx-auto md:m-0">
									See the data
								</a>
							</div>
						</div>
					</CustomAnimation>
					<CustomAnimation className="col-span-1" animation="fade-left">
						<img src={animateDesk} alt="Animacion de caja" className="max-w-[350px] lg:w-[70%] 2xl:w-[90%] lg:max-w-[590px] mx-auto w-full" />
						{/* {isMobile ? <img src={animateMovil} className="max-w-[350px] mx-auto w-full" alt="" /> : <img src={animateDesk} alt="Animacion de caja" className="max-w-[350px] lg:w-[70%] 2xl:w-[90%] lg:max-w-[590px] mx-auto w-full" />} */}
					</CustomAnimation>
				</div>

				{!isMobile && (
					<div className="w-full overflow-hidden">
						<CustomAnimation variant={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN} className="pb-[60px] hidden md:block">
							<InfiniteMovingCards className="mx-auto w-[100%]" items={[...brands1, ...brands2]} pauseOnHover={false} direction="right" speed="slow" />
						</CustomAnimation>
					</div>
				)}
			</div>
		</section>
	);
};

const brands1 = [{ icon: "/img/logos/1.svg" }, { icon: "/img/logos/2.svg" }, { icon: "/img/logos/3.svg" }, { icon: "/img/logos/4.svg" }, { icon: "/img/logos/5.svg" }, { icon: "/img/logos/6.svg" }, { icon: "/img/logos/7.svg" }, { icon: "/img/logos/8.svg" }, { icon: "/img/logos/9.svg" }, { icon: "/img/logos/10.svg" }, { icon: "/img/logos/11.svg" }];
const brands2 = [{ icon: "/img/logos/12.svg" }, { icon: "/img/logos/13.svg" }, { icon: "/img/logos/14.svg" }, { icon: "/img/logos/15.svg" }, { icon: "/img/logos/16.svg" }, { icon: "/img/logos/17.svg" }, { icon: "/img/logos/18.svg" }, { icon: "/img/logos/19.svg" }, { icon: "/img/logos/20.svg" }, { icon: "/img/logos/21.svg" }];

export default MainSection;
