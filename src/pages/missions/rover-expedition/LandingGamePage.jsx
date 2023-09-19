import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import Mousetrap from "mousetrap";

import littleDescentStage from "../../../assets/images/little-descent-stage.png";
import cloud1 from "../../../assets/images/green-clouds/1.png";
import cloud2 from "../../../assets/images/green-clouds/2.png";
import cloud3 from "../../../assets/images/green-clouds/3.png";
import cloud4 from "../../../assets/images/green-clouds/4.png";
import cloud5 from "../../../assets/images/green-clouds/5.png";
import cloud6 from "../../../assets/images/green-clouds/6.png";
import cloud7 from "../../../assets/images/green-clouds/7.png";
import cloud8 from "../../../assets/images/green-clouds/8.png";
import cloud9 from "../../../assets/images/green-clouds/9.png";
import cloud10 from "../../../assets/images/green-clouds/10.png";
import titanTip from "../../../assets/icons/titan-tip.svg";
import infoBrown from "../../../assets/icons/info-brown.svg";
import para from "../../../assets/images/para.png";

import MainBackground from "../../../components/MainBackground";
import DestinationIndicator from "../../../components/missions/DestinationIndicator";
import Timer from "../../../components/missions/Timer";
import MissionIntroTipModal from "../../../components/modal/MissionIntroTipModal";
import Overlay from "../../../components/Overlay";
import RetryModal from "../../../components/modal/RetryModal";

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
				<div>
					<div className="absolute left-0 bottom-0">
						<motion.img
							initial={{ x: 0, y: 0 }}
							animate={{ x: [-15, 0, -15], y: [-5, 0, -5] }}
							transition={{ duration: 2, repeat: Infinity }}
							src={cloud1}
							alt="cloud"
						/>
					</div>
					<div className="absolute z-10 right-10 -bottom-6">
						<motion.img
							initial={{ x: 0, y: 0 }}
							animate={{ x: [-150, 0, -150], y: [-5, 0, -5] }}
							transition={{ duration: 10, repeat: Infinity }}
							src={cloud2}
							alt="cloud"
						/>
					</div>
					<div className="absolute z-10 right-0 bottom-0">
						<motion.img
							initial={{ y: 0 }}
							animate={{ y: [-0, -10, 0] }}
							transition={{ duration: 4, repeat: Infinity }}
							src={cloud3}
							alt="cloud"
						/>
					</div>
					<div className="absolute bottom-0">
						<motion.img
							initial={{ x: 0, y: 0 }}
							animate={{ x: 0, y: 0 }}
							transition={{ duration: 2, repeat: Infinity }}
							src={cloud4}
							alt="cloud"
						/>
					</div>
					<div className="absolute bottom-0">
						<motion.img
							initial={{ x: 0, y: 0 }}
							animate={{ x: 0, y: 0 }}
							transition={{ duration: 2, repeat: Infinity }}
							src={cloud5}
							alt="cloud"
						/>
					</div>
					<div className="absolute z-10 bottom-10">
						<motion.img
							initial={{ x: 0, y: 0 }}
							animate={{ x: 0, y: 0 }}
							transition={{ duration: 2, repeat: Infinity }}
							src={cloud6}
							alt="cloud"
						/>
					</div>
					<div className="absolute z-20 left-[20%] bottom-0">
						<motion.img
							initial={{ x: 0, y: 0 }}
							animate={{ x: 0, y: 0 }}
							transition={{ duration: 2, repeat: Infinity }}
							src={cloud7}
							alt="cloud"
						/>
					</div>
					<div className="absolute right-0 bottom-0">
						<motion.img
							initial={{ x: 0, y: 0 }}
							animate={{ x: 0, y: 0 }}
							transition={{ duration: 2, repeat: Infinity }}
							src={cloud8}
							alt="cloud"
						/>
					</div>
					<div className="absolute bottom-3 right-0">
						<motion.img
							initial={{ x: 0, y: 0 }}
							animate={{ x: 0, y: 0 }}
							transition={{ duration: 2, repeat: Infinity }}
							src={cloud9}
							alt="cloud"
						/>
					</div>
					<div className="absolute left-0 bottom-0">
						<motion.img
							initial={{ x: 0, y: 0 }}
							animate={{ x: 0, y: 0 }}
							transition={{ duration: 2, repeat: Infinity }}
							src={cloud10}
							alt="cloud"
						/>
					</div>
				</div>
				<p className="absolute right-4 top-7 flex items-center gap-2 font-poppins font-medium text-[#543022]">
					<img src={infoBrown} className="w-6" alt="" />
					<span>Type &quot;JUMPMASTER&quot; to pass the level</span>
				</p>
				<div className="w-64 h-40 absolute right-10 bottom-[380px] bg-black bg-opacity-50 rounded-tl-3xl rounded-br-3xl border-2 border-red-200">
					<div className="relative">
						<div className="text-red-200 text-xl font-semibold font-inter tracking-wide flex items-center justify-center gap-2 mt-3">
							<img src={titanTip} alt="" />
							<span>Thick Atmosphere</span>
						</div>
						<p className="text-orange-50 text-base font-poppins p-4">
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
