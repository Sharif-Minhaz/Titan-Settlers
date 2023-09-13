import PropTypes from "prop-types";
import MainBackground from "../../components/MainBackground";
import mainTowerImg from "../../assets/images/tower.png";
import leftTowerImg from "../../assets/images/station-tower-l.png";
import rightTowerImg from "../../assets/images/station-tower-r.png";
import rocketImg from "../../assets/images/base-rocket.png";
import startBtn from "../../assets/images/start-btn.png";
import launchBtn from "../../assets/images/launch-btn.png";
import flames from "../../assets/images/rocket-flame.png";
import lSmoke from "../../assets/images/smoke-l.png";
import mSmoke from "../../assets/images/smoke-m.png";
import rSmoke from "../../assets/images/smoke-r.png";
import { Fragment, useState } from "react";
import Tip from "../../components/earth-destruction/Tip";
import { motion, useAnimationControls } from "framer-motion";
import ActionButton from "./../../components/buttons/ActionButton";
import { Link } from "react-router-dom";

const data = [
	{
		_id: "d-1",
		heading: "Space debris",
		desc: "Residual fragments endanger space arks. NASA recommends active removal tech like nets and robotic arms to ensure safe cosmic journeys.",
		link: "http://something.com",
	},
	{
		_id: "d-2",
		heading: "Defending",
		desc: "Asteroids and comets pose collision threats to space arks. NASA's approach combines detection and deflection.",
		link: "http://something.com",
	},
	{
		_id: "d-3",
		heading: "Active Debris Removal",
		desc: "NASA strongly recommends adopting active debris removal technologies to address this threat. Active debris removal involves actively capturing and eliminating space debris from Earth's orbit.",
		link: "http://something.com",
	},
	{
		_id: "d-4",
		heading: "Preservation and Security",
		desc: "Implementation of active debris removal measures ensures the preservation of the space ark.Removing space debris reduces the risk of collisions and potential damage during the ark's voyage.",
		link: "http://something.com",
	},
];

const positions = [
	"bottom-[410px] right-10 w-[350px]",
	"bottom-[440px] right-[420px] w-[355px]",
	"bottom-[340px] right-[810px] w-[380px]",
	"bottom-20 right-[900px] w-[380px]",
];

const pointerPositions = [
	"rotate-[67deg] w-[345px] left-20 top-[348px]",
	"rotate-[34.5deg] w-[665px] left-[120px] top-[355px]",
	"rotate-[22deg] w-[800px] left-[348px] top-[340px]",
	"rotate-[4deg] w-[800px] left-[380px] top-[210px]",
];

export default function EarthSpaceshipPage() {
	const [activeIndex, setActiveIndex] = useState([]);
	const [count, setCount] = useState(0);
	const [hiddenOverlay, setHiddenOverlay] = useState(1);

	// controls system of animation
	const controlsRocket = useAnimationControls();
	const controlsFlame = useAnimationControls();
	const controlsSmoke = useAnimationControls();
	const controlsMidSmoke = useAnimationControls();
	const controlsButton = useAnimationControls();

	const startAnimation = () => {
		controlsRocket.start({ y: -360 });
		controlsFlame.start({ y: -20 });
		controlsSmoke.start({ y: [-20, 0], x: [-20, 0] });
		controlsMidSmoke.start({ y: [40, 70, 50] });
		controlsButton.start({ opacity: 1 });
	};

	const activeTooltips = () => {
		setActiveIndex([...activeIndex, count]);
		if (count === 5) {
			startAnimation();
			return setHiddenOverlay(0);
		}

		setCount(count + 1);
	};

	return (
		<MainBackground src="bg-earth-base-img" position="bg-[center_20%]">
			<LaunchGuidelineOverlay
				hiddenOverlay={hiddenOverlay}
				count={count}
				activeTooltips={activeTooltips}
				activeIndex={activeIndex}
			/>
			<img
				className="absolute bottom-0 left-0 w-[165px]"
				src={mainTowerImg}
				alt="main tower"
			/>
			<div className="h-full w-[800px] relative m-auto">
				<img
					className="absolute w-[355px] bottom-0 left-0"
					src={leftTowerImg}
					alt="left-tower"
				/>
				<img
					className="absolute w-[355px] bottom-0 right-0"
					src={rightTowerImg}
					alt="right-tower"
				/>
				<div className="absolute bottom-[10px] z-10 left-1/2 -translate-x-[47%]">
					<motion.img
						initial={{ y: 3 }}
						animate={controlsRocket}
						transition={{ duration: 3, delay: 1 }}
						src={rocketImg}
						alt="rocket"
					/>
				</div>
				<motion.img
					initial={{ y: 0 }}
					animate={controlsFlame}
					transition={{ duration: 3, delay: 1 }}
					className="absolute bottom-0"
					src={flames}
					alt="flames"
				/>
				<motion.img
					initial={{ y: 0, x: -10 }}
					animate={controlsSmoke}
					transition={{ duration: 3, delay: 1 }}
					className="absolute bottom-0 left-0"
					src={lSmoke}
					alt="left-smoke"
				/>
				<div className="absolute bottom-0 h-[200px] z-20 left-1/2 -translate-x-1/2">
					<motion.img
						initial={{ y: 0 }}
						animate={controlsMidSmoke}
						transition={{ duration: 3, delay: 1 }}
						src={mSmoke}
						className="w-full"
						alt="middle-smoke"
					/>
				</div>
				<motion.img
					initial={{ y: 0, x: 0 }}
					animate={controlsSmoke}
					transition={{ duration: 3, delay: 1 }}
					className="absolute bottom-0 right-0"
					src={rSmoke}
					alt="right-smoke"
				/>
			</div>
			<Link to="/launch-video">
				<motion.span
					initial={{ opacity: 0 }}
					animate={controlsButton}
					transition={{ duration: 1, delay: 2 }}
				>
					<ActionButton text="Continue ⨠" className="absolute bottom-6 right-6 z-40" />
				</motion.span>
			</Link>
		</MainBackground>
	);
}

function LaunchGuidelineOverlay({ hiddenOverlay, count, activeTooltips, activeIndex }) {
	return (
		<motion.div
			initial={{ opacity: 1 }}
			animate={{ opacity: hiddenOverlay }}
			transition={{ duration: 1 }}
			className="fixed bg-black/75 w-full h-full z-30"
		>
			<img
				className="w-[70px] z-[99] pointer-events-auto cursor-pointer absolute bottom-7 right-7"
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
};
