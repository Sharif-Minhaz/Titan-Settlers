import { motion } from "framer-motion";
import MainBackground from "../../components/MainBackground";
import astroid from "../../assets/images/asteroid.png";
import sun from "../../assets/images/sun.png";
import cosmic from "../../assets/images/cosmic-ray.png";
import solarPanel from "../../assets/images/solar-panel.png";
import prevIcon from "../../assets/icons/prev.svg";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { useState } from "react";

export default function EarthDestroyerPage() {
	const navigate = useNavigate();
	const [loading] = useState(false);
	const [rotateDeg, setRotateDeg] = useState(0);

	const images = ["astroid", "cosmic ray", "sun"];
	const [selectedIndex, setSelectedIndex] = useState(0);

	const getImageSrc = (imgName) => {
		switch (imgName) {
			case "astroid":
				return astroid;
			case "sun":
				return sun;
			case "cosmic ray":
				return cosmic;
			default:
				return astroid;
		}
	};

	const getImageDescription = (imgName) => {
		switch (imgName) {
			case "astroid":
				return "Asteroid's cataclysmic collision with Earth leads to catastrophic devastation.";
			case "sun":
				return "Sun's expansion engulfs Earth as it becomes a red giant during its later stages.";
			case "cosmic ray":
				return "Cosmic rays can damage Earth's electronic systems and pose risks to space travelers";
			default:
				return "";
		}
	};

	const onPrevClick = () => {
		setRotateDeg(rotateDeg - 45);
		setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	const onNextClick = () => {
		setRotateDeg(rotateDeg + 45);
		setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<MainBackground src="bg-astroid-destroyer-img">
					<nav className="px-[70px] pt-8 fixed top-0">
						<img
							onClick={() => navigate(-1)}
							className="pointer-events-auto cursor-pointer w-7"
							src={prevIcon}
							alt="previous"
						/>
					</nav>
					<div className="relative h-screen">
						<div className="mt-14">
							<h2 className="text-center font-inter text-white text-5xl font-normal uppercase tracking-widest">
								{images[selectedIndex]}
							</h2>
							<p className="text-center font-poppins mt-4 text-gray-200 text-[21px] font-normal tracking-widest">
								{getImageDescription(images[selectedIndex])}
							</p>
						</div>

						<div
							onClick={onPrevClick}
							className="flex items-center mt-8 absolute -left-28 top-[140px] w-[320px]"
						>
							<motion.img
								className="pointer-events-auto w-[200px] z-10 cursor-pointer"
								src={getImageSrc(
									images[(selectedIndex - 1 + images.length) % images.length]
								)}
								alt=""
							/>
							<span className="text-center whitespace-nowrap text-white text-2xl font-poppins uppercase font-normal tracking-widest">
								{images[(selectedIndex - 1 + images.length) % images.length]}
							</span>
						</div>

						<div className="absolute left-1/2 top-1/5 w-[350px] z-30 -translate-x-1/2">
							<motion.img
								onClick={() => navigate(`/earth-destroyer/${images[selectedIndex]}`)}
								className="pointer-events-auto mt-8 z-10 cursor-pointer"
								src={getImageSrc(images[selectedIndex])}
								alt=""
								initial={{ rotate: 0, opacity: 0 }}
								animate={{ rotate: [360, 0, -360], opacity: 1 }}
								transition={{
									rotate: { duration: 250, delay: 0, repeat: Infinity },
									opacity: { duration: 2 },
								}}
							/>
						</div>

						<motion.img
							className="w-[73%] mx-auto mt-6"
							initial={{ rotate: 0 }}
							animate={{ rotate: rotateDeg }}
							src={solarPanel}
							alt="Solar Panel"
						/>

						<div
							onClick={onNextClick}
							className={`flex items-center absolute -right-6 top-24  ${
								images[(selectedIndex + 1) % images.length] === "cosmic ray"
									? "w-[320px] mt-12"
									: "w-[240px] mt-16"
							}`}
						>
							<span className="text-center whitespace-nowrap text-white text-2xl font-poppins font-normal uppercase tracking-widest">
								{images[(selectedIndex + 1) % images.length]}
							</span>
							<motion.img
								className="pointer-events-auto w-[280px] z-10 cursor-pointer"
								src={getImageSrc(images[(selectedIndex + 1) % images.length])}
								alt=""
							/>
						</div>
					</div>
				</MainBackground>
			)}
		</>
	);
}
