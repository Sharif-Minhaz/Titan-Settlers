import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainBackground from "../../components/MainBackground";
import Overlay from "../../components/Overlay";
import earthExpanding from "../../assets/gifs/expanding-earth.gif";
import { useNavigate } from "react-router-dom";

export default function EarthMissionPage() {
	const navigate = useNavigate();
	const [progress, setProgress] = useState(0);
	const [showEarthAnime, setShowEarthAnime] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((oldProgress) => {
				const newProgress = oldProgress + 10;
				if (newProgress >= 100) {
					clearInterval(interval);
					return 100;
				}
				return newProgress;
			});
		}, 200);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowEarthAnime(true);
		}, 3000);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			gotoEarth();
		}, 7700);

		return () => clearTimeout(timeout);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const gotoEarth = () => navigate("/earth");

	return (
		<>
			{showEarthAnime ? (
				<img className="w-full h-screen object-cover" src={earthExpanding} />
			) : (
				<MainBackground position="bg-[center_55%]" src="bg-titan-loading-img">
					<motion.div
						initial={{ opacity: 1 }}
						animate={{ opacity: 0 }}
						transition={{ duration: 1, delay: 2.3 }}
					>
						<Overlay>
							<div>
								<div className="text-center text-white text-3xl font-semibold font-inter mb-3 tracking-wider">
									Loading
								</div>

								<div className="w-[180px] bg-gray-200 rounded-full">
									<div
										style={{ width: `${progress}%`, transition: "0.3s width" }}
										className="bg-gradient-to-r from-cyan-500 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
									>
										{progress}%
									</div>
								</div>
							</div>
						</Overlay>
					</motion.div>
				</MainBackground>
			)}
		</>
	);
}
