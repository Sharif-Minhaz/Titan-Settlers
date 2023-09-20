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
				"titan-loading-img": "url('/background-images/titan-loading.png')",
				"earth-base-img": "url('/background-images/spaceship-base.jpeg')",
				"leaving-earth-img": "url('/background-images/leaving-earth.jpeg')",
				"titan-surface-img": "url('/background-images/titan-surface.jpeg')",
				"titan-sky-img": "url('/background-images/titan-sky.jpeg')",
				"plain-surface-img": "url('/background-images/plain-surface.jpeg')",
				"titan-lake-img": "url('/background-images/titan-lake.jpeg')",
				"water-surface-img": "url('/background-images/water-surface.jpeg')",
			},
		},
	},
	plugins: [],
};
