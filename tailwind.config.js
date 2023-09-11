/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter', sans-serif",
				goldman: "'Goldman', cursive",
				poppins: "'Poppins', sans-serif",
				roboto: "'Roboto', sans-serif",
				itim: "'Itim', cursive",
			},
			backgroundPosition: {
				"center-bottom": "center bottom",
			},
			backgroundImage: {
				"intro-img": "url('/background-images/intro-bg.jpeg')",
				"home-img": "url('/background-images/home-bg.jpeg')",
				"earth-intro-img": "url('/background-images/earth-intro-bg.jpg')",
				"img-404": "url('/background-images/404.jpg')",
				"dark-sky-img": "url('/background-images/earth-destroyer-bg.webp')",
				"complete-task-img": "url('/background-images/complete-task.jpeg')",
				"intro-dark-img": "url('/background-images/intro-dark.jpeg')",
				"stars-img": "url('/background-images/stars.jpeg')",
				"dark-space-img": "url('/background-images/dark-space.png')",
			},
		},
	},
	plugins: [],
};
