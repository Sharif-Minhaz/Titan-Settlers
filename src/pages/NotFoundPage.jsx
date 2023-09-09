import { Link } from "react-router-dom";

import ActionButton from "../components/buttons/ActionButton";
import MainBackground from "../components/MainBackground";

export default function NotFoundPage() {
	return (
		<MainBackground src="bg-img-404">
			<section className="flex items-center justify-center h-screen bg-black/75">
				<div className="p-4 m-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl tracking-tight font-inter font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 to-cyan-500">
							404
						</h1>
						<p className="mb-4 text-3xl tracking-tight font-inter font-bold text-gray-100 md:text-4xl dark:text-white">
							Something&apos;s missing.
						</p>
						<p className="mb-4 text-lg font-inter font-light text-gray-200">
							Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on
							the home page.
						</p>
						<Link
							to="/function"
							className="inline-flex font-inter text-white bg-default-theme-200 hover:bg-default-theme-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 transition-all active:scale-95"
						>
							<ActionButton width="w-44" text="Back to Homepage" />
						</Link>
					</div>
				</div>
			</section>
		</MainBackground>
	);
}
