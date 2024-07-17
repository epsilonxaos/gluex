import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import Links from "../components/Links";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const iconSize = 14;

export const Footer = () => {
	return (
		<footer className="px-7 lg:px-10 relative w-full z-50 bg-black-noise md:bg-none">
			<div className="max-w-app mx-auto font-auxMono text-[10px] leading-[11px]">
				<hr className="border-t border-verde" />

				<nav className="md:grid-cols-2 py-4 hidden md:grid">
					<div className="col-span-1 flex items-center justify-start">
						<SocialMedia />

						<NavFooter />
					</div>
					<div className="col-span-1 text-right">
						<CopyRight />
					</div>
				</nav>

				<nav className="py-10 md:hidden">
					<div className="flex items-center justify-center mb-7 gap-8">
						<SocialMedia />
						{/* <Links className={"flex items-center"}>
							<FaTelegram size={iconSize} className="inline-block mr-2" /> 000 000 0000
						</Links> */}
						<NavFooter />
					</div>

					<p className="mt-7 text-center">
						<CopyRight />
					</p>
				</nav>
			</div>
		</footer>
	);
};

const SocialMedia = () => {
	return (
		<ul className="grid grid-cols-2 max-w-max gap-2 md:mr-6">
			{/* <li className="col-span-1">
				<Links url={"https://www.linkedin.com/company/gluex-protocol/"}>
					<FaLinkedin size={iconSize} />
				</Links>
			</li> */}
			<li className="col-span-1">
				<Links url={"https://x.com/GluexProtocol"}>
					<FaXTwitter size={iconSize} />
				</Links>
			</li>
			<li className="col-span-1">
				<Links className={"flex items-center"} url={"https://t.me/+yf_US2ACNrgyNzY0"}>
					<FaTelegram size={iconSize} />
				</Links>
			</li>
			{/* <li className="col-span-1">
				<Links>
					<FaDiscord size={iconSize} />
				</Links>
			</li> */}
		</ul>
	);
};

const NavFooter = () => {
	const { dispatch } = useContext(AppContext);

	return (
		<ul className="flex items-center gap-8 md:gap-5 lg:gap-8 max-w-max">
			{/* <li className="hidden md:block">
				<Links className={"flex items-center"} url={"https://t.me/+yf_US2ACNrgyNzY0"}>
					<FaTelegram size={iconSize} className="inline-block mr-2" /> 000 000 0000
				</Links>
			</li> */}
			<li className="">
				<Links.Mail mail={"contact@gluex.xyz"}>Mail</Links.Mail>
			</li>
			<li className="">
				<button type="button" onClick={() => dispatch({ openModalContact: true })}>
					Integrate
				</button>
			</li>
			<li className="">
				<Links url={"https://mirror.xyz/gluex.eth"}>Blog</Links>
			</li>
		</ul>
	);
};

const CopyRight = () => {
	return (
		<>
			Copyright® | <Links url={"https://madeby.partners/"}>Designed by MadebyPartners</Links>
		</>
	);
};
