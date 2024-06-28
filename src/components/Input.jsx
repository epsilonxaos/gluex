import { twMerge } from "tailwind-merge";

export default function Input({ className, name, type = "text", label, register, validate = false, rules, validateError = "", validateErrorMessage = "", placeholder = "" }) {
	return (
		<div className={twMerge("relative z-0 mb-4 w-full", className)}>
			<label htmlFor={name} className={`text-sm font-auxMono mb-1 block ${validateError ? "border-2 border-none text-verde" : "text-verde"}`}>
				{label}
				{validate && <span className="font-bold text-verde">*</span>}
			</label>

			<input
				{...(type && { type })}
				name={name}
				id={name}
				className="block w-full appearance-none placeholder:text-gray-500 placeholder:font-auxMono placeholder:text-sm border border-white bg-black px-4 py-2.5 text-sm text-inherit focus:border-white focus:outline-none focus:ring-0"
				placeholder={placeholder}
				{...(validate && register(name, rules))}
				{...(!validate && { name })}
				// required
			/>

			{validateError && <span className=" text-xs text-verde">{validateErrorMessage}</span>}
		</div>
	);
}
