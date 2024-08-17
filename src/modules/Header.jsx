import { useContext, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/img/logo.svg";
import Links from "../components/Links";
import AppContext from "../context/AppContext";

import { useClickAway, useHover } from "@uidotdev/usehooks";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import iconLiquid1 from "../assets/img/menu/liquid1.svg";
import iconLiquid2 from "../assets/img/menu/liquid2.svg";
import iconProtocol1 from "../assets/img/menu/protocol1.svg";
import iconProtocol2 from "../assets/img/menu/protocol2.svg";

export const Header = () => {
	const [open, setOpen] = useState(false);
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	const handleToggle = () => setOpen(!open);
	const ref = useClickAway(() => setOpen(false));

	useEffect(() => {
		if (open) document.querySelector("body").classList.add("overflow-hidden");
		else document.querySelector("body").classList.remove("overflow-hidden");
	}, [open]);

	return (
		<>
			<header ref={ref} className="fixed px-10 w-full z-50">
				<div className="absolute bg-black bg-opacity-95 backdrop-blur-sm top-0 left-0 w-full h-full"></div>
				<div className="max-w-app mx-auto relative z-10">
					<nav className="grid grid-cols-2 py-4 md:py-7 items-center">
						<div className="col-span-1">
							<img src={logo} className="w-[95px]" alt="Glue X" />
						</div>
						<div className="col-span-1 flex items-center justify-end">
							<nav className="mr-12 md:m-0">
								{/* // * Escritorio */}
								{!isMobile && <Menu className="hidden items-center justify-end gap-12 text-xs font-auxMono md:flex" />}

								{/* // * Movil */}
								{isMobile && open && <Menu className="fixed top-[80px] h-[80%] left-10 w-full text-xs font-auxMono md:hidden" />}
							</nav>

							<button type="button" className="h-[30px] w-[30px] md:hidden flex items-center justify-center" onClick={handleToggle}>
								{!open ? (
									<svg className="w-[30px] scale-[.65] block cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 89.1 68.8" xmlSpace="preserve">
										<g>
											<path fill="white" d="M3.8,68.8h81.4c2.1,0,3.8-1.7,3.8-3.8v-3.3c0-2.1-1.7-3.8-3.8-3.8H3.8c-2.1,0-3.8,1.7-3.8,3.8L0,65 C0,67.1,1.7,68.8,3.8,68.8z" />
											<path fill="white" d="M25,39.9h60.2c2.1,0,3.8-1.7,3.8-3.8v-3.3c0-2.1-1.7-3.8-3.8-3.8H25c-2.1,0-3.8,1.7-3.8,3.8V36 C21.2,38.2,22.9,39.9,25,39.9z" />
											<path fill="white" d="M3.8,11h81.4c2.1,0,3.8-1.7,3.8-3.8V3.8c0-2.1-1.7-3.8-3.8-3.8L3.8,0C1.7,0,0,1.7,0,3.8l0,3.3 C0,9.3,1.7,11,3.8,11z" />
										</g>
									</svg>
								) : (
									<IoCloseOutline size={30} className="relative" />
								)}
							</button>
						</div>
					</nav>
				</div>
			</header>

			{open && <div className="bg-black lg:hidden bg-opacity-95 backdrop-blur-sm fixed top-0 left-0 w-full h-svh z-20"></div>}
		</>
	);
};

const Menu = ({ className = "" }) => {
	const { dispatch } = useContext(AppContext);

	const [ref, hovering] = useHover();
	const [open, setOpen] = useState();

	useEffect(() => setOpen(hovering), [hovering]);

	return (
		<ul className={className}>
			<li data-aos="fade-in" className="mb-4 max-w-max md:mb-0 relative" ref={ref}>
				<button onClick={() => setOpen(!open)} className={`text-white text-base md:text-xs md:flex md:items-center md:gap-1  ${open ? "hover:text-verde !text-verde" : ""}`} type="button">
					Product <FaAngleDown className="inline-block ml-1" />
				</button>

				{open && (
					<div data-aos="fade-in" className="md:absolute w-[330px] md:top-full pt-[28px]">
						<div className="md:bg-neutral-900 md:bg-opacity-95 md:backdrop-blur-sm md:rounded-[30px] md:rounded-tl-none md:p-8">
							<h4 data-aos="fade-in" className="text-base md:text-xs mb-3">
								For Liquidity Providers
							</h4>
							<ul data-aos="fade-in" data-aos-delay="100" className="text-[10px] mb-6 pl-4 md:pl-0">
								<li className="mb-3">
									<Links className={"flex text-base md:text-xs items-center justify-start"} url={""}>
										<img className="size-[16px] mr-2" src={iconLiquid2} alt="" /> GlueX Limit Order Book
									</Links>
								</li>
								<li>
									<Links className={"flex text-base md:text-xs items-center justify-start"} url={""}>
										<img className="size-[16px] mr-2" src={iconLiquid1} alt="" />
										GlueX Liquidity Pools
									</Links>
								</li>
							</ul>
							<h4 data-aos="fade-in" className="text-base md:text-xs mb-3">
								For Protocols and dApps
							</h4>
							<ul data-aos="fade-in" data-aos-delay="100" className="text-[10px] pl-4 md:pl-0">
								<li className="mb-3">
									<Links className={"flex text-base md:text-xs items-center justify-start"} url={""}>
										<img className="size-[16px] mr-2" src={iconProtocol1} alt="" /> GlueX SDK
									</Links>
								</li>
								<li>
									<Links className={"flex text-base md:text-xs items-center justify-start"} url={""}>
										<img className="size-[16px] mr-2" src={iconProtocol2} alt="" /> GlueX Hooks
									</Links>
								</li>
							</ul>
						</div>
					</div>
				)}
			</li>
			<li data-aos="fade-in" data-aos-delay="100" className={`mb-4 max-w-max md:mb-0 transition-opacity ${open ? "max-md:!opacity-40 pointer-events-none cursor-auto" : ""}`}>
				<Links className={"flex text-base md:text-xs items-center gap-2"} url={"https://mirror.xyz/gluex.eth"}>
					Whitepaper <HiOutlineExternalLink size={16} />
				</Links>
			</li>
			<li data-aos="fade-in" data-aos-delay="150" className={`mb-4 max-w-max md:mb-0 transition-opacity ${open ? "max-md:!opacity-40 pointer-events-none cursor-auto" : ""}`}>
				<Links className={"flex text-base md:text-xs items-center gap-2"} url={"https://mirror.xyz/gluex.eth"}>
					Jobs <HiOutlineExternalLink size={16} />
				</Links>
			</li>
			<li data-aos="fade-in" data-aos-delay="200" className={`mb-4 max-w-max md:mb-0 transition-opacity ${open ? "max-md:!opacity-40 pointer-events-none cursor-auto" : ""}`}>
				<Links className={"flex text-base md:text-xs items-center gap-2"} url={"https://mirror.xyz/gluex.eth"}>
					Blog <HiOutlineExternalLink size={16} />
				</Links>
			</li>
			<li data-aos="fade-in" data-aos-delay="250" className={`max-w-max text-base md:text-xs transition-opacity ${open ? "max-md:!opacity-40 pointer-events-none cursor-auto" : ""}`}>
				<button className="text-white hover:text-verde" type="button" onClick={() => dispatch({ openModalContact: true })}>
					Integrate
				</button>
			</li>
		</ul>
	);
};
