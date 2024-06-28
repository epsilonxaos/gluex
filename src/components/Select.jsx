import { twMerge } from "tailwind-merge";

export default function Select({ className, name, label, options = [], register, validate = false, rules, validateError = "", validateErrorMessage = "" }) {
	return (
		<div className={twMerge("relative z-0 mb-4 w-full", className)}>
			<label htmlFor={name} className={`text-sm font-auxMono mb-1 block ${validateError ? "border-2 border-none text-verde" : "text-verde"}`}>
				{label}
				{validate && <span className="font-bold text-verde">*</span>}
			</label>

			<select name={name} id={name} {...(validate && register(name, rules))} {...(!validate && { name })} className="block w-full font-auxMono border min-h-[42px] border-white bg-transparent px-4 py-2.5 text-sm text-inherit focus:border-white focus:outline-none focus:ring-0">
				{options.map((item, idx) => (
					<option className="text-black font-auxMono text-sm" key={"select_" + name + "_" + idx} value={item.value}>
						{item.name}
					</option>
				))}
			</select>

			{validateError && <span className=" text-xs text-verde">{validateErrorMessage}</span>}
		</div>
	);
}
