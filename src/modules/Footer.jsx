import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import Links from "../components/Links";

const iconSize = 14;

export const Footer = () => {
	return (
		<footer className="px-10 fixed bottom-0 left-0 w-full z-50">
			<div className="max-w-app mx-auto">
				<hr className="border-t border-verde" />

				<nav className="grid grid-cols-2 py-4 font-auxMono text-[10px] leading-[11px]">
					<div className="col-span-1 flex items-center justify-start">
						<ul className="grid grid-cols-3 max-w-max gap-2 mr-6">
							<li className="col-span-1">
								<Links>
									<FaLinkedin size={iconSize} />
								</Links>
							</li>
							<li className="col-span-1">
								<Links>
									<FaXTwitter size={iconSize} />
								</Links>
							</li>
							<li className="col-span-1">
								<Links>
									<FaDiscord size={iconSize} />
								</Links>
							</li>
						</ul>

						<ul className="flex items-center gap-8 max-w-max">
							<li className="col-span-1">
								<Links className={"flex items-center"}>
									<FaTelegram size={iconSize} className="inline-block mr-2" /> 000 000 0000
								</Links>
							</li>
							<li className="col-span-1">
								<Links.Mail>Mail</Links.Mail>
							</li>
							<li className="col-span-1">
								<Links>Integrate</Links>
							</li>
							<li className="col-span-1">
								<Links>Blog</Links>
							</li>
						</ul>
					</div>
					<div className="col-span-1 text-right">
						Copy Right® | <Links>Developed by MadebyPartners</Links>
					</div>
				</nav>
			</div>
		</footer>
	);
};
