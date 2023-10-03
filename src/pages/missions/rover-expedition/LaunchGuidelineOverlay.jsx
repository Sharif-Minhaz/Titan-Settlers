import { motion } from 'framer-motion';
import startBtn from "../../../assets/images/start-btn.png";
import launchBtn from "../../../assets/images/launch-btn.png";
import PropTypes from "prop-types";
import { Fragment } from "react";
import Tip from "../../../components/earth-destruction/Tip";

const data = [
	{
		_id: "d-1",
		heading: "Space debris",
		desc: "Residual fragments endanger space arks. NASA recommends active removal tech like nets and robotic arms to ensure safe cosmic journeys.",
		link: "https://www.nasa.gov/pdf/503466main_space_tech_grand_challenges_12_02_10.pdf",
	},
	{
		_id: "d-2",
		heading: "Defending",
		desc: "Asteroids and comets pose collision threats to space arks. NASA's approach combines detection and deflection.",
		link: "https://www.nasa.gov/mission_pages/station/news/orbital_debris.html",
	},
	{
		_id: "d-3",
		heading: "Active Debris Removal",
		desc: "NASA strongly recommends adopting active debris removal technologies to address this threat. Active debris removal involves actively capturing and eliminating space debris from Earth's orbit.",
	},
	{
		_id: "d-4",
		heading: "Preservation and Security",
		desc: "Implementation of active debris removal measures ensures the preservation of the space ark. Removing space debris reduces the risk of collisions and potential damage during the ark's voyage.",
	},
];

const positions = [
	"bottom-[410px] right-10 w-[350px]",
	"bottom-[440px] right-[420px] w-[355px]",
	"bottom-[330px] right-[810px] w-[380px]",
	"bottom-20 right-[900px] w-[380px]",
];

const pointerPositions = [
	"rotate-[67deg] w-[345px] left-20 top-[348px]",
	"rotate-[34.5deg] w-[665px] left-[120px] top-[355px]",
	"rotate-[18deg] w-[879px] left-[290px] top-[314px]",
	"rotate-[3deg] w-[865px] left-[377px] top-[180px]",
];

export default function LaunchGuidelineOverlay({ hiddenBtn, hiddenOverlay, count, activeTooltips, activeIndex }) {
	return (
		<motion.div
			initial={{ opacity: 1 }}
			animate={{ opacity: hiddenOverlay }}
			transition={{ duration: 1 }}
			className="fixed bg-black/75 w-full h-full z-30"
		>
			<img
				className={`w-[70px] z-[99] cursor-pointer ${
					hiddenBtn
						? "pointer-events-none filter grayscale hue-rotate-15"
						: "pointer-events-auto"
				}  absolute bottom-7 right-7`}
				src={count === 5 ? launchBtn : startBtn}
				alt="start"
				onClick={activeTooltips}
			/>

			{count !== 5 && (
				<>
					{data.map((tipInfo, index) => (
						<Fragment key={tipInfo._id}>
							{activeIndex.includes(index) && (
								<Tip className={positions[index]} tipInfo={tipInfo}>
									<div
										className={`absolute ${pointerPositions[index]} border-t-2 border-dashed border-slate-400`}
									></div>
								</Tip>
							)}
						</Fragment>
					))}
				</>
			)}
		</motion.div>
	);
}

LaunchGuidelineOverlay.propTypes = {
	hiddenOverlay: PropTypes.number,
	count: PropTypes.number,
	activeTooltips: PropTypes.func,
	activeIndex: PropTypes.array,
	hiddenBtn: PropTypes.bool,
};
