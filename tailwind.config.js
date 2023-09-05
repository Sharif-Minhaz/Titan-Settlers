/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter', sans-serif",
				goldman: "'Goldman', cursive",
				poppins: "'Poppins', sans-serif",
			},
			backgroundPosition: {
				"center-bottom": "center bottom",
			},
			backgroundImage: {
				"intro-img": "url('/background-images/intro-bg.jpeg')",
				"home-img": "url('/background-images/home-bg.jpeg')",
				"earth-into-img": "url('/background-images/earth-intro-bg.jpg')",
			},
		},
	},
	plugins: [],
};
