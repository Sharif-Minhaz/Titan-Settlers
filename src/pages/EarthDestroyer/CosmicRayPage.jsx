import MainBackground from "../../components/MainBackground";
import Attributes from "../../components/earth-destroyers/Attributes";
import EarthDestroyerNavbar from "../../components/earth-destroyers/EarthDestroyerNavbar";
import StatusInfo from "../../components/earth-destroyers/StatusInfo";
import littleCosmic from "../../assets/images/little-cosmic.png";
import cosmicRay from "../../assets/images/cosmic-ray-lightning.png";
import roundingEarth from "../../assets/images/rounded-earth.png";
import cosmicRayStable from "../../assets/images/cosmic-ray-stable.png";
import cosmicRayDestroyingGif from "../../assets/gifs/cosmic-ray-destroying.gif";
import { motion } from "framer-motion";
import Prediction from "../../components/earth-destroyers/Prediction";
import { useState } from "react";
import Tip from "./Tip";

const data = [
	{ _id: "attr-01", heading: "NATURE", value: "Protons & nuclei" },
	{ _id: "attr-02", heading: "ORIGIN", value: "Supernovae,  GRBs" },
	{ _id: "attr-03", heading: "Composition", value: "Protons, electrons" },
	{ _id: "attr-04", heading: "Energy", value: "≤3x10^20 eV " },
	{ _id: "attr-05", heading: "TYPE", value: "GCR, ECR, SEP" },
];

const tips = [
	{
		_id: "tip-01",
		heading: "Cosmic Ray Impact",
		desc: "Uninvited cosmic rays from distant realms can disrupt Earth's climate by influencing cloud formation.",
		link: "https://lunar.gsfc.nasa.gov/lessonkit/CRaTER-How%20Cosmic%20Rays%20Affect%20Humans.pdf",
	},
	{
		_id: "tip-02",
		heading: "Challenges of Cosmic Ray Influx",
		desc: "The two main groups are the 'Main Belt' asteroids, and 'Near-Earth Asteroids' (NEAs).",
		link: "https://www.nasa.gov/analogs/nsrl/why-space-radiation-matters/",
	},
	{
		_id: "tip-03",
		heading: "Threat of High-Energy",
		desc: "Earth's vulnerability is exposed to the diverse spectrum of high-energy cosmic particles, capable of wreaking havoc as they course through space.",
	},
	{
		_id: "tip-04",
		heading: "Unwanted Reach",
		desc: "Across unfathomable spans of space, cosmic rays impact our planet with uninvited consequences.",
	},
	{
		_id: "tip-05",
		heading: "Cosmic Ray Intrusion",
		desc: "The arrival of cosmic rays, despite their potential to reveal cosmic secrets, can pose threats to Earth's systems, necessitating our understanding and preparation.",
	},
];

export default function CosmicRayPage() {
	const [tipCount, setTipCount] = useState(-1);

	const handleAsteroidPos = () => {
		setTipCount((prev) => {
			if (tips.length - 1 === prev) {
				return 0;
			}
			return prev + 1;
		});
	};

	return (
		<MainBackground src="bg-dark-sky-img">
			<EarthDestroyerNavbar />
			<div className="mt-3.5 px-10">
				<Attributes data={data} title="cosmic ray" />
			</div>
			<div className="w-[520px] absolute left-9 top-[56%] -translate-y-1/2 z-30">
				<div className="relative">
					<motion.img
						onClick={handleAsteroidPos}
						className="w-full pointer-events-auto cursor-pointer"
						src={cosmicRay}
					/>
					{tipCount !== -1 && <Tip key={tipCount} tipInfo={tips[tipCount]} />}
				</div>
			</div>
			<Prediction
				titleImg={littleCosmic}
				gif={cosmicRayDestroyingGif}
				question="How Cosmic ray damage Earth?"
				stableImg={cosmicRayStable}
			/>
			<motion.img
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 100, delay: 0 }}
				className="w-[900px] absolute -right-[390px] -bottom-[470px]"
				src={roundingEarth}
			/>
			<StatusInfo distance={true} />
		</MainBackground>
	);
}
