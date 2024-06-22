import { twMerge } from "tailwind-merge";

const Links = ({ children, url, className }) => {
	return (
		<a href={url} className={twMerge("text-grisClaro cursor-pointer transition-all hover:text-verde", className)} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
};

const Mail = ({ mail, children, className }) => {
	return (
		<a className={twMerge("text-grisClaro cursor-pointer transition-all hover:text-verde", className)} href={"mailto:" + mail}>
			{children}
		</a>
	);
};

const Phone = ({ tel, children, className }) => {
	return (
		<a className={twMerge("text-grisClaro cursor-pointer transition-all hover:text-verde", className)} href={"tel:+52" + tel}>
			{children}
		</a>
	);
};

Links.Mail = Mail;
Links.Phone = Phone;

export default Links;
