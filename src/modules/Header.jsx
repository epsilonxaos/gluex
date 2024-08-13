import { useContext, useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import Links from "../components/Links";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import AppContext from "../context/AppContext";

import iconLiquid1 from "../assets/img/menu/liquid1.svg";
import iconLiquid2 from "../assets/img/menu/liquid2.svg";
import iconProtocol1 from "../assets/img/menu/protocol1.svg";
import iconProtocol2 from "../assets/img/menu/protocol2.svg";
import { useClickAway, useHover } from "@uidotdev/usehooks";
import { FaAngleDown } from "react-icons/fa6";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // Tiempo entre la animación de cada hijo
		},
	},
};

const variantEscritorio = {
	hidden: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0 },
};

const variantsubMenu = {
	hidden: { opacity: 0, x: -10 },
	visible: { opacity: 1, x: 0 },
};

export const Header = () => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);

	const ref = useClickAway(() => {
		setOpen(false);
	});

	// useEffect(() => {
	// 	if (open) document.querySelector("body").classList.add("overflow-hidden");
	// 	else document.querySelector("body").classList.remove("overflow-hidden");
	// }, [open]);

	return (
		<>
			<header ref={ref} className="absolute px-10 w-full z-50">
				<div className="max-w-app mx-auto">
					<nav className="grid grid-cols-2 py-7 items-center">
						<div className="col-span-1">
							<img src={logo} className="w-[95px]" alt="Glue X" />
						</div>
						<div className="col-span-1 flex items-center justify-end">
							<AnimatePresence>
								<nav className="mr-12 md:m-0">
									{/* // * Escritorio */}
									<Menu className="hidden items-center justify-end gap-12 text-xs font-auxMono md:flex" />

									{/* // * Movil */}
									{open && <Menu className="fixed top-[80px] h-[80%] left-10 w-full text-xs font-auxMono md:hidden" />}
								</nav>
							</AnimatePresence>

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

			{open && <div className="bg-black lg:hidden bg-opacity-95 backdrop-blur-sm absolute top-0 left-0 w-full h-svh z-20"></div>}
		</>
	);
};

const Menu = ({ className = "" }) => {
	const { dispatch } = useContext(AppContext);

	const [ref, hovering] = useHover();
	const [open, setOpen] = useState();

	useEffect(() => setOpen(hovering), [hovering]);

	return (
		<motion.ul initial="hidden" animate="visible" exit="hidden" variants={containerVariants} className={className}>
			<motion.li className="mb-4 max-w-max md:mb-0 relative" variants={variantEscritorio} transition={{ duration: 0.3 }} ref={ref}>
				<button className={`text-white md:flex md:items-center md:gap-1  ${open ? "hover:text-verde !text-verde" : ""}`} type="button">
					Product <FaAngleDown className="inline-block ml-1" />
				</button>

				{open && (
					<motion.div className="md:absolute w-[330px] md:top-full pt-4" initial="hidden" animate="visible" exit="hidden" variants={containerVariants}>
						<div className="md:bg-[#151515B2] md:rounded-[30px] md:p-8">
							<motion.h4 className="text-xs mb-3" variants={variantsubMenu}>
								For Liquidity Providers
							</motion.h4>
							<motion.ul className="text-[10px] mb-6 pl-4 md:pl-0" variants={variantsubMenu}>
								<li className="mb-3">
									<Links className={"flex items-center justify-start"} url={""}>
										<img className="size-[16px] mr-2" src={iconLiquid2} alt="" /> GlueX Limit Order Book
									</Links>
								</li>
								<li>
									<Links className={"flex items-center justify-start"} url={""}>
										<img className="size-[16px] mr-2" src={iconLiquid1} alt="" />
										GlueX Liquidity Pools
									</Links>
								</li>
							</motion.ul>
							<motion.h4 className="text-xs mb-3" variants={variantsubMenu}>
								For Protocols and dApps
							</motion.h4>
							<motion.ul className="text-[10px] pl-4 md:pl-0" variants={variantsubMenu}>
								<li className="mb-3">
									<Links className={"flex items-center justify-start"} url={""}>
										<img className="size-[16px] mr-2" src={iconProtocol1} alt="" /> GlueX SDK
									</Links>
								</li>
								<li>
									<Links className={"flex items-center justify-start"} url={""}>
										<img className="size-[16px] mr-2" src={iconProtocol2} alt="" /> GlueX Hooks
									</Links>
								</li>
							</motion.ul>
						</div>
					</motion.div>
				)}
			</motion.li>
			<motion.li className={`mb-4 max-w-max md:mb-0 transition-opacity ${open ? "max-md:!opacity-40 pointer-events-none cursor-auto" : ""}`} variants={variantEscritorio} transition={{ duration: 0.3 }}>
				<Links url={"https://mirror.xyz/gluex.eth"}>Whitepaper</Links>
			</motion.li>
			<motion.li className={`mb-4 max-w-max md:mb-0 transition-opacity ${open ? "max-md:!opacity-40 pointer-events-none cursor-auto" : ""}`} variants={variantEscritorio} transition={{ duration: 0.3 }}>
				<Links url={"https://mirror.xyz/gluex.eth"}>Jobs</Links>
			</motion.li>
			<motion.li className={`mb-4 max-w-max md:mb-0 transition-opacity ${open ? "max-md:!opacity-40 pointer-events-none cursor-auto" : ""}`} variants={variantEscritorio} transition={{ duration: 0.3 }}>
				<Links url={"https://mirror.xyz/gluex.eth"}>Blog</Links>
			</motion.li>
			<motion.li className={`max-w-max transition-opacity ${open ? "max-md:!opacity-40 pointer-events-none cursor-auto" : ""}`} variants={variantEscritorio} transition={{ duration: 0.3 }}>
				<button className="text-white hover:text-verde" type="button" onClick={() => dispatch({ openModalContact: true })}>
					Integrate
				</button>
			</motion.li>
		</motion.ul>
	);
};
