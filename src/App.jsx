import { Toaster } from "sonner";
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

			<Home />

			<Footer />
		</AppContext.Provider>
	);
}

export default App;
