import { toast } from "sonner";
import Input from "./Input";
import Select from "./Select";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

export const ModalContacto = () => {
	const { state, dispatch } = useContext(AppContext);

	useEffect(() => {
		if (state.openModalContact) document.querySelector("body").classList.add("overflow-hidden");
		else document.querySelector("body").classList.remove("overflow-hidden");
	}, [state.openModalContact]);

	if (!state.openModalContact) return null;

	return (
		<div onClick={() => dispatch({ openModalContact: false })} className="fixed z-[100] md:flex md:items-center md:justify-center overflow-auto p-4 top-0 left-0 bg-black bg-opacity-25 backdrop-blur-sm w-full h-full">
			<div
				onClick={(ev) => {
					ev.stopPropagation();
				}}
				className="w-full max-w-[800px] mx-auto bg-black py-10 rounded-md px-4 md:px-10"
			>
				<div className="text-center mb-8">
					<h3 className="text-salmon font-bold text-2xl mb-8">Partnerships, Integrations & Collaborations</h3>

					<p className="mb-3">GlueX Protocol is an open-access solving ecosystem for intent-based dApps - enabling chain abstraction, compute-cost abstraction and optimal execution from of the get-go. </p>
					<p className="mb-3">
						Please fill in this form if you are interested in <span className="underline">partnership, integrations and collaboration opportunities</span> and want to get in touch.
					</p>

					<p className="mb-3">We are getting back to everyone as soon as possible. Due to high demand this might take some days, please share as much information as possible.</p>
				</div>

				<FormContacto />
			</div>
			{/* <div className="overflow-auto h-full w-full ">
			</div> */}
		</div>
	);
};

const optionsSelectLookingFor = [
	{ value: "", name: "Choose a option" },
	{ value: "Partnerships", name: "Partnerships" },
	{ value: "Collaboration", name: "Collaboration" },
	{ value: "Marketing", name: "Marketing" },
	{ value: "Media", name: "Media" },
	{ value: "Integration", name: "Integration" },
	{ value: "Other", name: "Other" },
];

const FormContacto = () => {
	const { dispatch } = useContext(AppContext);

	const {
		formState: { errors },
		register,
		handleSubmit,
		reset,
		watch,
	} = useForm();

	const onSubmit = async (data) => {
		let { email, project, contact, looking, share } = data;

		toast("Sending...");

		setTimeout(() => {
			toast("Message sent!");
			reset();
		}, 3000);
	};

	console.log();

	return (
		<form onSubmit={handleSubmit(onSubmit)} action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<Input className={"col-span-1"} validate={true} register={register} rules={{ required: "This field is required" }} validateError={!!errors.email} validateErrorMessage={errors.email?.message} label={"Email"} name={"email"} />
			<Input className={"col-span-1"} validate={true} register={register} rules={{ required: "This field is required" }} validateError={!!errors.project} validateErrorMessage={errors.project?.message} label={"Project"} name={"project"} placeholder="Name & homepage/Twitter" />
			<Input className={"col-span-1"} validate={true} register={register} rules={{ required: "This field is required" }} validateError={!!errors.contact} validateErrorMessage={errors.contact?.message} label={"Contact"} name={"contact"} placeholder="Name & e-mail/Telegram" />
			<Select className={"col-span-1"} validate={true} register={register} rules={{ required: "This field is required" }} validateError={!!errors.looking} validateErrorMessage={errors.looking?.message} label={"Looking for"} name={"looking"} options={optionsSelectLookingFor} />
			{watch("looking") == "Other" && <Input className={"col-span-1 md:col-span-2"} validate={true} register={register} rules={{ required: "This field is required" }} validateError={!!errors.other} validateErrorMessage={errors.other?.message} label={"Write your answer about what you are looking for"} name={"other"} />}
			<Input className={"col-span-1 md:col-span-2"} validate={true} register={register} rules={{ required: "This field is required" }} validateError={!!errors.share} validateErrorMessage={errors.share?.message} label={"Share more context"} name={"share"} />

			<div className="col-span-1 md:col-span-2 text-center flex items-center justify-center gap-4">
				<button onClick={() => dispatch({ openModalContact: false })} type="button" className="bg-gray-600 py-2 px-8 rounded-sm text-white">
					Cancel
				</button>
				<button type="submit" className="bg-verde py-2 px-8 rounded-sm text-black">
					Send
				</button>
			</div>
		</form>
	);
};
