import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

import MainBackground from "../../../components/MainBackground";
import mainTowerImg from "../../../assets/images/tower.png";
import leftTowerImg from "../../../assets/images/station-tower-l.png";
import rightTowerImg from "../../../assets/images/station-tower-r.png";
import rocketImg from "../../../assets/images/base-rocket.png";

import flames from "../../../assets/images/rocket-flame.png";
import lSmoke from "../../../assets/images/smoke-l.png";
import mSmoke from "../../../assets/images/smoke-m.png";
import rSmoke from "../../../assets/images/smoke-r.png";
import ActionButton from "../../../components/buttons/ActionButton";

import commentary from "../../../assets/audios/initial-commentary.mp3";
import launch from "../../../assets/audios/launch.mp3";
import joinUs from "../../../assets/audios/join-us.wav";
import spaceDebris from "../../../assets/audios/residual-fragment.wav";
import defending from "../../../assets/audios/asteroids.wav";
import preservation from "../../../assets/audios/implementation.wav";
import activeDebris from "../../../assets/audios/nasa.wav";
import { useAudio } from "../../../hooks/useAudio";
import LaunchGuidelineOverlay from "./LaunchGuidelineOverlay";
import GSuitQuiz from "./GSuitQuiz";
import MissionIntroTipModal from "../../../components/modal/MissionIntroTipModal";

const voiceOvers = [joinUs, spaceDebris, defending, activeDebris, preservation, commentary, launch];

export default function EarthSpaceshipPage() {
	const [activeIndex, setActiveIndex] = useState([]);
	const [count, setCount] = useState(0);
	const [voice, setVoice] = useState(0);
	const [hiddenOverlay, setHiddenOverlay] = useState(1);
	// choose suit
	const [openTipModal, setOpenTipModal] = useState(true);
	const [openGame, setOpenGame] = useState(false);
	const [isCompleteGame, setIsCompleteGame] = useState(false);

	// voice overs
	const { play } = useAudio(voiceOvers[voice], { interrupt: true });

	useEffect(() => {
		if (isCompleteGame) {
			play();
		}
	}, [voice, play, isCompleteGame]);

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
		setVoice(voice + 1);
		if (count === 5) {
			startAnimation();
			return setHiddenOverlay(0);
		}

		setCount(count + 1);
	};

	const openSuitQuiz = () => {
		setOpenTipModal(false);
		setOpenGame(true);
	};

	const closeGame = () => {
		setOpenGame(false);
		setIsCompleteGame(true);
	};

	return (
		<MainBackground src="bg-earth-base-img" position="bg-[center_20%]">
			<LaunchGuidelineOverlay
				hiddenBtn={!isCompleteGame}
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
			<motion.span
				initial={{ opacity: 0 }}
				animate={controlsButton}
				transition={{ duration: 1, delay: 2 }}
			>
				<Link to="/launch-video">
					<ActionButton text="Continue ⨠" className="absolute bottom-6 right-6 z-40" />
				</Link>
			</motion.span>
			{openTipModal && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
					<MissionIntroTipModal
						topGap="top-[140px]"
						onClick={openSuitQuiz}
						description="Prior to launch, your responsibility is to don a specialized suit designed to shield you from the formidable forces of gravity and intense pressure experienced during liftoff."
					/>
				</div>
			)}
			{openGame && <GSuitQuiz closeGame={closeGame} />}
		</MainBackground>
	);
}
