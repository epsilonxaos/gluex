/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				verde: "#02F994",
				grisClaro: "#ECECEC",
				salmon: "#FC6977",
			},
			fontFamily: {
				auxMono: ["Aux Mono", "sans-serif"],
				aeonik: ["Aeonik", "sans-serif"],
			},
		},
	},
	plugins: [],
};
