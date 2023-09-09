import MainBackground from "../../components/MainBackground";
import Attributes from "../../components/earth-destroyers/Attributes";
import EarthDestroyerNavbar from "../../components/earth-destroyers/EarthDestroyerNavbar";
import StatusInfo from "../../components/earth-destroyers/StatusInfo";
import asteroid from "../../assets/images/des-asteroid.png";
import littleAsteroid from "../../assets/images/little-asteroid.png";
import roundingEarth from "../../assets/images/rounded-earth.png";
import earthDestroying from "../../assets/images/earth-destroying.jpeg";
import earthDestroyingGif from "../../assets/gifs/earth-destroying.gif";
import { motion } from "framer-motion";
import Prediction from "../../components/earth-destroyers/Prediction";
import { useState } from "react";
import Tip from "./Tip";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";

const data = [
	{ _id: "attr-01", heading: "age", value: "4.6B years" },
	{ _id: "attr-02", heading: "formation", value: "Nebula leftovers" },
	{ _id: "attr-03", heading: "size", value: "9m - 329mi" },
	{ _id: "attr-04", heading: "KNOWN COUNT", value: "1,301,083" },
	{ _id: "attr-05", heading: "TYPE", value: "C-type, S-type, M-type" },
];

const tips = [
	{
		_id: "tip-01",
		heading: "Size & Shape",
		desc: "Small rocky fragments to massive bodies several kilometers in diameter.",
	},
	{
		_id: "tip-02",
		heading: "Weight",
		desc: "The two main groups are the 'Main Belt' asteroids, and 'Near-Earth Asteroids' (NEAs).",
		link: "https://en.wikipedia.org/wiki/Asteroid",
	},
	{
		_id: "tip-03",
		heading: "Temperature",
		desc: "Temperatures vary drastically, with shadowed areas experiencing extreme cold while directly sunlit regions become scorchingly hot.",
		link: "https://solarsystem.nasa.gov/news/456/neowise-thermal-data-reveal-surface-properties-of-over-100-asteroids/",
	},
	{
		_id: "tip-04",
		heading: "Length",
		desc: "Exhibiting diverse forms, including irregularly shaped, elongated, and often spherical structures",
	},
	{
		_id: "tip-05",
		heading: "Speed",
		desc: "Spanning a speed range from a few kilometers per hour to velocities reaching tens of kilometers per second.",
		link: "https://www.youtube.com/watch?v=m4D2CjmoIIU",
	},
];

const deg = [-10, +10];

export default function AsteroidPage() {
	const [asteroidRotate, setAsteroidRotate] = useState(0);
	const [completed, setCompleted] = useState(false);
	const [tipCount, setTipCount] = useState(-1);
	const navigate = useNavigate();

	const handleAsteroidPos = () => {
		setAsteroidRotate(asteroidRotate + deg[Math.floor(Math.random() * 2)]);
		setTipCount((prev) => {
			if (tips.length - 1 === prev) {
				setCompleted(true);
				return 0;
			}
			return prev + 1;
		});
	};

	const closeTip = () => setTipCount(-1);

	if (completed) {
		return navigate("/earth-destroyer");
	}

	return (
		<MainBackground src="bg-dark-sky-img">
			<EarthDestroyerNavbar />
			<div className="mt-3.5 px-10">
				<Attributes data={data} title="asteroid" />
			</div>
			<div className="w-[330px] absolute left-48 top-[56%] -translate-y-1/2 z-30">
				<OutsideClickHandler onOutsideClick={closeTip}>
					<motion.img
						onClick={handleAsteroidPos}
						initial={{ y: 0, rotate: 0 }}
						animate={{ y: ["-6px", "2px", "-6px"], rotate: asteroidRotate }}
						transition={{
							y: { duration: 8, repeat: Infinity },
							rotate: { duration: 1.5, delay: 0.5 },
						}}
						className="w-full pointer-events-auto cursor-pointer"
						src={asteroid}
					/>
					{tipCount !== -1 && (
						<Tip
							key={tipCount}
							count={tipCount + 1}
							total={tips.length}
							tipInfo={tips[tipCount]}
						/>
					)}
				</OutsideClickHandler>
			</div>
			<Prediction
				titleImg={littleAsteroid}
				question="How Asteroid destroy Earth?"
				gif={earthDestroyingGif}
				stableImg={earthDestroying}
			/>
			<motion.img
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 100, delay: 0 }}
				className="w-[900px] absolute -right-[390px] -bottom-[470px]"
				src={roundingEarth}
			/>
			<StatusInfo position={asteroidRotate} />
		</MainBackground>
	);
}
