import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import Mousetrap from "mousetrap";

import littleDescentStage from "../../../assets/images/little-descent-stage.png";
import titanTip from "../../../assets/icons/titan-tip.svg";
import infoBrown from "../../../assets/icons/info-brown.svg";
import para from "../../../assets/images/para.png";

import MainBackground from "../../../components/MainBackground";
import DestinationIndicator from "../../../components/missions/DestinationIndicator";
import Timer from "../../../components/missions/Timer";
import MissionIntroTipModal from "../../../components/modal/MissionIntroTipModal";
import Overlay from "../../../components/Overlay";
import RetryModal from "../../../components/modal/RetryModal";
import ThickAtmosphere from "../../../components/missions/ThickAtmosphere";

let timer;

export default function LandingGamePage() {
	const navigate = useNavigate();
	const controlsStage = useAnimationControls();
	const controlsPara = useAnimationControls();
	const [openModal, setOpenModal] = useState(true);
	const [retryModal, setRetryModal] = useState(false);
	const [running, setRunning] = useState(false);
	const [time, setTime] = useState(5);
	const [km, setKm] = useState(20);

	useEffect(() => {
		const handleJumpmaster = () => {
			clearInterval(timer);
			controlsStage.stop();
			controlsStage.start({ rotate: 18, y: 900 });
			controlsPara.start({ y: -200, x: -63, scale: 1 });

			const timeoutId = setTimeout(() => {
				navigate("/landing-location-quiz");
			}, 6100);

			return () => clearTimeout(timeoutId);
		};

		Mousetrap.bind("j u m p m a s t e r", handleJumpmaster);

		return () => {
			Mousetrap.unbind("j u m p m a s t e r");
		};
	}, [controlsStage, controlsPara, navigate]);

	useEffect(() => {
		if (running) {
			timer = setInterval(() => {
				if (time === 0) {
					clearInterval(timer);
					setRetryModal(true);
				} else {
					setTime((prevTime) => prevTime - 1);
				}
			}, 1000);
		}

		return () => clearInterval(timer);
	}, [running, time]);

	const seconds = time % 60;

	const handleStartStop = () => {
		setRunning(!running);
	};

	const startChallenge = () => {
		controlsStage.start({ x: 2000, y: 690 });
		handleStartStop();
		setOpenModal(false);

		// decreasing the distances
		const intervalId = setInterval(() => {
			setKm((prev) => {
				if (prev === 0) {
					clearInterval(intervalId);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(intervalId);
	};

	return (
		<MainBackground src="bg-titan-sky-img">
			<div className="relative h-screen">
				<ThickAtmosphere />
				<p className="absolute right-4 top-7 flex items-center gap-2 font-poppins font-medium text-[#543022]">
					<img src={infoBrown} className="w-6" alt="" />
					<span>Type &quot;JUMPMASTER&quot; to pass the level</span>
				</p>
				<div className="w-64 h-40 absolute right-10 bottom-[380px] bg-black bg-opacity-50 rounded-tl-3xl rounded-br-3xl border-2 border-orange-200">
					<div className="relative">
						<div className="text-orange-200 text-xl font-semibold font-inter tracking-wide flex items-center justify-center gap-2 mt-3">
							<img src={titanTip} alt="" />
							<span>Thick Atmosphere</span>
						</div>
						<p className="text-orange-200 text-base font-poppins p-4">
							In Titan&apos;s thick atmosphere, activate Parachute for a safe
							spaceship landing.
						</p>
						<div className="absolute left-[30px] top-[242px] w-[200px] rotate-90 border h-[2px] border-black/75 border-dashed"></div>
					</div>
				</div>
				{/* descent stage */}
				<div className="absolute">
					<motion.div
						initial={{ x: -360, y: -190 }}
						animate={controlsStage}
						transition={{ ease: "easeIn", duration: 6, delay: 0.1 }}
						className="relative w-max"
					>
						<motion.img
							className="relative z-[8]"
							src={littleDescentStage}
							alt="stage"
						/>
						<div className="absolute top-0 left-0 z-[4]">
							<motion.img
								initial={{ scale: 0.1 }}
								animate={controlsPara}
								transition={{ duration: 2.5, delay: 0.1 }}
								src={para}
							/>
						</div>
					</motion.div>
				</div>
				{/* destination indicator and timer */}
				<DestinationIndicator km={km} />
				<Timer seconds={seconds} />
			</div>
			{openModal && (
				<Overlay>
					<MissionIntroTipModal
						onClick={startChallenge}
						description='Open Parachute by typing "JUMPMASTER" before the time (5s) runs out.'
					/>
				</Overlay>
			)}
			{retryModal && (
				<Overlay>
					<RetryModal route="/showdown-stage" />
				</Overlay>
			)}
		</MainBackground>
	);
}
