import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

import MainBackground from "../../components/MainBackground";
import Attributes from "../../components/earth-destruction/Attributes";
import EarthDestroyerNavbar from "../../components/earth-destruction/EarthDestroyerNavbar";
import StatusInfo from "../../components/earth-destruction/StatusInfo";
import Prediction from "../../components/earth-destruction/Prediction";
import Tip from "../../components/earth-destruction/Tip";
import EarthTip from "../../components/earth-destruction/EarthTip";

import sunImg from "../../assets/images/sun.png";
import roundingEarth from "../../assets/images/rounded-earth.png";
import earthDestroyingStable from "../../assets/images/earth-destroying-sun.jpeg";
import earthDestroySunGif from "../../assets/gifs/earth-destroying-sun.gif";


const data = [
	{ _id: "attr-01", heading: "AGE", value: "4.6B years" },
	{ _id: "attr-02", heading: "Diameter", value: "1392684km" },
	{ _id: "attr-03", heading: "temperature", value: "13599726°C" },
	{ _id: "attr-04", heading: "Surface Temperature", value: "5500°C" },
	{ _id: "attr-05", heading: "elements", value: "H: 75%, He: 25%" },
];

const tips = [
	{
		_id: "tip-01",
		heading: "Solar Flares: Radiant Fury",
		desc: "The Sun's explosive flares release potent radiation, imperiling technology and astronauts alike. Delving into their nature is pivotal for enhancing safety and advancing space exploration.",
		link: "https://www.nasa.gov/feature/goddard/2020nasa-data-aids-ozone-hole-s-journey-to-recovery",
	},
	{
		_id: "tip-02",
		heading: "Solar Duality",
		desc: "The sun's intense rays hold paradoxical power, nurturing and endangering our delicate planet.",
		link: "https://www.nasa.gov/feature/goddard/2020nasa-data-aids-ozone-hole-s-journey-to-recovery",
	},
	{
		_id: "tip-03",
		heading: "Sun's Shift",
		desc: "Once benevolent, now adversarial, the sun's might amplifies due to ozone depletion. Devastation unfolds as it pierces weakened defenses, causing chaos. Rising skin cancer, ecosystem damage.",
	},
	{
		_id: "tip-04",
		heading: "Sun's Diverse Risks",
		desc: "Solar flares and mass ejections impact power, communication, and navigation systems. Astronauts face radiation risks.",
	},
	{
		_id: "tip-05",
		heading: "Solar Hazards",
		desc: "Sun's varying activity can influence Earth's climate, necessitating vigilant monitoring and preparedness to mitigate these multifaceted solar threats.",
	},
];

const earthTips = [
	{
		_id: "er-01",
		heading: "Ozone layer",
		desc: "Solar radiation harms ozone, cancerous UV urges action.",
		link: "https://www.nasa.gov/audience/foreducators/postsecondary/features/F_Ozone.html",
	},
	{
		_id: "er-02",
		heading: "Ozone layer' work",
		desc: "Ozone blocks UV, prevents cancer, ecosystem damage, preserves well-being.",
		link: "https://www.nasa.gov/feature/goddard/2020nasa-data-aids-ozone-hole-s-journey-to-recovery/",
	},
	{
		_id: "er-03",
		heading: "Oz Depletion Impact",
		desc: "Consequences of Intense Solar Radiation, Ozone Layer Depletion, and Impacts on Health, Ecosystems, and Agriculture.",
		link: "https://www.nasa.gov/feature/goddard/2020nasa-data-aids-ozone-hole-s-journey-to-recovery",
	},
	{
		_id: "er-04",
		heading: "Urgent Action",
		desc: "Anthropogenic activities, like CFC emissions, thin the ozone layer, amplifying harmful UV rays. Swift global measures are crucial to curb these impacts.",
		link: "https://www.nasa.gov/feature/goddard/2020nasa-data-aids-ozone-hole-s-journey-to-recovery",
	},
	{
		_id: "er-05",
		heading: "Oz's Destiny Unveiled",
		desc: "Ozone's fate hangs in balance, swayed by human choices. Emissions, like CFCs, weaken its protective embrace, allowing harmful UV rays to surge.",
		link: "https://www.nasa.gov/audience/foreducators/postsecondary/features/F_Ozone.html",
	},
	{
		_id: "er-06",
		heading: "Climate Crisis",
		desc: "Melting polar ice caps foretell their eventual loss, while erratic weather patterns wreak havoc on land and sea.",
		link: "https://www.nasa.gov/audience/foreducators/postsecondary/features/F_Ozone.html",
	},
];

export default function SunPage() {
	const [tipCount, setTipCount] = useState(-1);
	const [earthTipCount, setEarthTipCount] = useState(-1);
	const [completed, setCompleted] = useState({ sun: false, earth: false });
	const navigate = useNavigate();

	const handleTips = () => {
		setTipCount((prev) => {
			if (tips.length - 1 === prev) {
				setCompleted((prev) => ({ ...prev, sun: true }));
				return 0;
			}
			return prev + 1;
		});
	};

	const handleEarthTips = () => {
		setEarthTipCount((prev) => {
			if (earthTips.length - 1 === prev) {
				setCompleted((prev) => ({ ...prev, earth: true }));
				return 0;
			}
			return prev + 1;
		});
	};

	if (completed.earth && completed.sun) {
		return navigate("/earth-destroyer");
	}

	const closeEarthTips = () => {
		setEarthTipCount(-1);
	};

	const closeTips = () => {
		setTipCount(-1);
	};

	return (
		<MainBackground src="bg-dark-sky-img">
			<EarthDestroyerNavbar />
			<div className="mt-3.5 px-10">
				<Attributes data={data} title="sun" />
			</div>
			<div className="w-[320px] absolute left-[100px] top-[56%] -translate-y-1/2 z-30">
				<OutsideClickHandler onOutsideClick={closeTips} className="relative">
					<motion.img
						initial={{ rotate: 0 }}
						animate={{ rotate: 360 }}
						transition={{ repeat: Infinity, duration: 100 }}
						onClick={handleTips}
						className="w-full pointer-events-auto cursor-pointer"
						src={sunImg}
					/>
					{tipCount !== -1 && (
						<Tip
							key={tipCount}
							total={tips.length}
							count={tipCount + 1}
							tipInfo={tips[tipCount]}
						/>
					)}
				</OutsideClickHandler>
			</div>

			<div className="w-40 absolute right-10 top-1/2 -translate-y-1/2">
				<OutsideClickHandler onOutsideClick={closeEarthTips} className="relative">
					<motion.img
						initial={{ rotate: 0 }}
						animate={{ rotate: 360 }}
						transition={{ repeat: Infinity, duration: 80 }}
						className="w-full pointer-events-auto cursor-pointer"
						src={roundingEarth}
						onClick={handleEarthTips}
					/>
					{earthTipCount !== -1 && (
						<EarthTip
							key={earthTipCount}
							count={earthTipCount + 1}
							total={earthTips.length}
							tipInfo={earthTips[earthTipCount]}
						/>
					)}
				</OutsideClickHandler>
			</div>

			<StatusInfo distance={true} />

			<Prediction
				gif={earthDestroySunGif}
				question="How Sun damage Earth's ozone layer?"
				stableImg={earthDestroyingStable}
				className="bottom-10"
			/>
		</MainBackground>
	);
}
