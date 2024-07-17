import { useContext, useState } from "react";
import logo from "../assets/img/logo.svg";
import Links from "../components/Links";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import AppContext from "../context/AppContext";

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

export const Header = () => {
	const [open, setOpen] = useState(false);
	const { dispatch } = useContext(AppContext);

	const handleToggle = () => setOpen(!open);

	return (
		<header className="absolute px-10 w-full z-50">
			<div className="max-w-app mx-auto">
				<nav className="grid grid-cols-2 py-7 items-center">
					<div className="col-span-1">
						<img src={logo} className="w-[95px]" alt="Glue X" />
					</div>
					<div className="col-span-1 flex items-center justify-end">
						<AnimatePresence>
							{open && (
								<nav className="mr-16 ">
									<Menu className="hidden items-center justify-end gap-16 text-xs font-auxMono md:flex" />
									<Menu className="absolute top-full text-right right-10 text-xs font-auxMono md:hidden" />
								</nav>
							)}
						</AnimatePresence>

						<button type="button" className="h-[30px] flex items-center justify-center" onClick={handleToggle}>
							{!open ? (
								<svg className="w-[18px] inline-block cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 89.1 68.8" xmlSpace="preserve">
									<g>
										<path fill="white" d="M3.8,68.8h81.4c2.1,0,3.8-1.7,3.8-3.8v-3.3c0-2.1-1.7-3.8-3.8-3.8H3.8c-2.1,0-3.8,1.7-3.8,3.8L0,65 C0,67.1,1.7,68.8,3.8,68.8z" />
										<path fill="white" d="M25,39.9h60.2c2.1,0,3.8-1.7,3.8-3.8v-3.3c0-2.1-1.7-3.8-3.8-3.8H25c-2.1,0-3.8,1.7-3.8,3.8V36 C21.2,38.2,22.9,39.9,25,39.9z" />
										<path fill="white" d="M3.8,11h81.4c2.1,0,3.8-1.7,3.8-3.8V3.8c0-2.1-1.7-3.8-3.8-3.8L3.8,0C1.7,0,0,1.7,0,3.8l0,3.3 C0,9.3,1.7,11,3.8,11z" />
									</g>
								</svg>
							) : (
								<IoCloseOutline size={30} className="relative -right-1.5" />
							)}
							{/* <IoCloseOutline size={32} /> */}
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

const Menu = ({ className = "" }) => {
	const { dispatch } = useContext(AppContext);

	return (
		<motion.ul initial="hidden" animate="visible" exit="hidden" variants={containerVariants} className={className}>
			<motion.li className="mb-4 md:mb-0" variants={variantEscritorio} transition={{ duration: 0.3 }}>
				<Links url={"https://mirror.xyz/gluex.eth"}>Blog</Links>
			</motion.li>
			<motion.li variants={variantEscritorio} transition={{ duration: 0.3 }}>
				<button className="text-white hover:text-verde" type="button" onClick={() => dispatch({ openModalContact: true })}>
					Integrate
				</button>
			</motion.li>
		</motion.ul>
	);
};
