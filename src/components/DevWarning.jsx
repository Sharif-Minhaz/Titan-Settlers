import info from "../assets/gifs/info.gif";

export default function DevWarning() {
	return (
		<div className="grid place-content-center text-center p-4 w-full h-screen fixed top-0 left-0 z-[99999] backdrop-blur-[35px]">
			<div className="bg-gradient-to-tr from-rose-100 to-teal-100 w-full sm:w-[500px] shadow-md rounded-xl p-4">
				<img className="w-28 inline-block" src={info} alt="info" />
				<p className="mt-4 font-inter px-2 pb-2">
					Welcome to our website! Please note that our site is currently under development
					and is optimized for larger screens, such as PCs and tablets only.
					Unfortunately, the experience on mobile devices may be less than optimal, and
					you may encounter issues with the layout and functionality. We apologize for any
					inconvenience this may cause. We are actively working on making our website
					fully responsive for all devices, and we appreciate your understanding during
					this transition.
				</p>
				<p className="mb-3">Thank you for visiting!</p>
			</div>
		</div>
	);
}
