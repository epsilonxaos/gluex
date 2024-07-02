import { Toaster } from "sonner";
import { BubblesAnimation } from "./components/BubblesAnimation";
import { ModalContacto } from "./components/ModalContacto";
import { Footer } from "./modules/Footer";
import { Header } from "./modules/Header";
import { Home } from "./pages/Home";
import AppContext from "./context/AppContext";
import { useReducer } from "react";

const initialArgs = {
	openModalContact: false,
};
const reducer = (prev, next) => ({ ...prev, ...next });

function App() {
	const [state, dispatch] = useReducer(reducer, initialArgs);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<Header />
			<Toaster />

			<ModalContacto />

			<main>
				<BubblesAnimation className="fixed top-0 left-0 h-svh w-full">
					<div className="hidden md:block text-center text-[96px] absolute z-[1] top-[40%] -translate-y-1/2 w-full">
						<span className="overflow-hidden block leading-none">Earn, Solve and Build</span>
						<div className="leading-none flex items-center justify-center">
							<span>with Glue</span>
							<svg className="w-[60px] relative top-2.5 inline ml-2" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 89.1 88.1" xmlSpace="preserve">
								<g>
									<path fill="white" d="M0.5,2.3l9.5,19c0.5,1,1.6,1.7,2.7,1.7h5.8v0c1.2,0,2.2,0.7,2.7,1.7l0,0L29,40.3c0.5,1,1.6,1.7,2.7,1.7h9.4 c1,0,1.6-1,1.2-1.9l-9.5-19c-0.5-1-1.6-1.7-2.7-1.7h-5.8v0c-1.2,0-2.2-0.7-2.7-1.7l0,0L13.8,2c-0.5-1-1.6-1.7-2.7-1.7H1.7 C0.7,0.3,0.1,1.4,0.5,2.3z" />
									<path fill="white" d="M42.4,48l-9.5,19c-0.5,1-1.6,1.7-2.7,1.7h-5.8v0c-1.2,0-2.2,0.7-2.7,1.7l0,0L13.8,86c-0.5,1-1.6,1.7-2.7,1.7H1.7 c-1,0-1.6-1-1.2-1.9l9.5-19c0.5-1,1.6-1.7,2.7-1.7h5.8v0c1.2,0,2.2-0.7,2.7-1.7l0,0L29,47.8c0.5-1,1.6-1.7,2.7-1.7h9.4 C42.2,46.1,42.8,47.1,42.4,48z" />
									<path fill="white" d="M88.6,2.3l-9.5,19c-0.5,1-1.6,1.7-2.7,1.7h-5.8v0c-1.2,0-2.2,0.7-2.7,1.7l0,0l-7.9,15.7c-0.5,1-1.6,1.7-2.7,1.7h-9.4 c-1,0-1.6-1-1.2-1.9l9.5-19c0.5-1,1.6-1.7,2.7-1.7h5.8v0c1.2,0,2.2-0.7,2.7-1.7l0,0L75.3,2c0.5-1,1.6-1.7,2.7-1.7h9.4 C88.4,0.3,89.1,1.4,88.6,2.3z" />
									<path fill="white" d="M46.7,48l9.5,19c0.5,1,1.6,1.7,2.7,1.7h5.8v0c1.2,0,2.2,0.7,2.7,1.7l0,0L75.3,86c0.5,1,1.6,1.7,2.7,1.7h9.4 c1,0,1.6-1,1.2-1.9l-9.5-19c-0.5-1-1.6-1.7-2.7-1.7h-5.8v0c-1.2,0-2.2-0.7-2.7-1.7l0,0l-7.9-15.7c-0.5-1-1.6-1.7-2.7-1.7h-9.4 C46.9,46.1,46.3,47.1,46.7,48z" />
								</g>
							</svg>
						</div>
					</div>
				</BubblesAnimation>

				<Home />
			</main>

			<Footer />
		</AppContext.Provider>
	);
}

export default App;
