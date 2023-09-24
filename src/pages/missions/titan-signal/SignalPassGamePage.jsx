import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import MainBackground from "../../../components/MainBackground";
import TaskOverview from "../../../components/missions/TaskOverview";
import atmParticle from "../../../assets/images/atmos-particle.png";
import collider from "../../../assets/images/collider.png";
import ballon from "../../../assets/images/signal-ballon.png";
import AtmParticles from "../../../components/missions/AtmParticles";
import SignalGamepad from "../../../components/missions/SignalGamepad";
import { checkCollision } from "../../../utils/checkCollision";
import { useParticlesRef } from "../../../hooks/useParticlesRef";
import Overlay from "../../../components/Overlay";
import RetryModal from "../../../components/modal/RetryModal";
import { useNavigate } from "react-router-dom";
import ScoreBoard from "../../../components/missions/ScoreBoard";

const particleData = [
	{ _id: 0, className: "top-[30px] left-[16%] w-[21px]" },
	{ _id: 1, className: "top-[70px] left-[20%] w-[28px]" },
	{ _id: 2, className: "top-[90px] left-[42%] w-[39px]" },
	{ _id: 3, className: "top-2 right-[9%] w-[25px]" },
	{ _id: 4, className: "top-2 left-1/4 w-[28px]" },
	{ _id: 5, className: "top-[140px] left-1/2 w-[45px]" },
	{ _id: 6, className: "top-[120px] left-[59%] w-[28px]" },
	{ _id: 7, className: "top-[80px] left-[30%] w-[33px]" },
	{ _id: 8, className: "top-2 left-1/2 w-[23px]" },
	{ _id: 9, className: "top-5 left-1/3 w-[37px]" },
	{ _id: 10, className: "top-12 left-[40%] w-[30px]" },
	{ _id: 11, className: "top-2 right-3 w-[28px]" },
	{ _id: 12, className: "top-10 right-1/3 w-[48px]" },
	{ _id: 13, className: "top-2 left-3 w-[28px]" },
	{ _id: 14, className: "top-10 left-[10%] w-[50px]" },
	{ _id: 15, className: "top-[60px] right-[10%] w-[35px]" },
	{ _id: 16, className: "top-[80px] left-[53%] w-[28px]" },
	{ _id: 17, className: "top-2 right-1/4 w-[22px]" },
	{ _id: 18, className: "top-2 left-[100px] w-[24px]" },
	{ _id: 19, className: "top-16 left-1/3 w-[28px]" },
	{ _id: 20, className: "top-[70px] right-[18%] w-[28px]" },
	{ _id: 21, className: "top-[110px] right-[25%] w-[50px]" },
	{ _id: 22, className: "top-[10px] left-[45%] w-[39px]" },
	{ _id: 23, className: "top-[90px] left-[48%] w-[29px]" },
	{ _id: 24, className: "top-[30px] left-[53%] w-[35px]" },
];

let timerId = null;

export default function SignalPassGamePage() {
	const navigate = useNavigate();
	const [retryModal, setRetryModal] = useState(false);
	const [particles, setParticles] = useState(particleData);
	const [points, setPoints] = useState(0);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [timer, setTimer] = useState(false);
	const ballonControls = useAnimationControls();
	const particleRefs = useParticlesRef();
	const destroyerRef = useRef();
	const ballonRef = useRef();

	const handleKeyDown = useCallback((e) => {
		if (e.key === "ArrowLeft") {
			setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 10 }));
		} else if (e.key === "ArrowRight") {
			setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 10 }));
		} else if (e.key === "ArrowUp") {
			setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y - 10 }));
		} else if (e.key === "ArrowDown") {
			setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y + 10 }));
		}
	}, []);

	useEffect(() => {
		particleRefs.forEach((particleRef, index) => {
			if (checkCollision(destroyerRef.current, particleRef.current, 0)) {
				setParticles((particles) => particles.filter((particle) => particle._id !== index));
				setPoints((prev) => prev + 1);
			}
		});
	}, [destroyerRef, particleRefs]);

	useEffect(() => {
		if (timer) {
			window.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown, timer]);

	useEffect(() => {
		if (timer) {
			timerId = setTimeout(() => {
				navigate("/signal-success", {state: points});
			}, 5000);
		}

		return () => clearTimeout(timerId);
	}, [timer, navigate, points]);

	useEffect(() => {
		let checkId = null;

		if (timer) {
			checkId = setInterval(() => {
				particleRefs.forEach((particle) => {
					if (checkCollision(ballonRef.current, particle.current, 0)) {
						setRetryModal(true);
						ballonControls.set({ opacity: 0 });
						clearTimeout(timerId);
						window.removeEventListener("keydown", handleKeyDown);
					}
				});
			}, 200);
		}

		return () => clearInterval(checkId);
	}, [ballonRef, ballonControls, particleRefs, timer, handleKeyDown]);

	const startGame = () => {
		setTimer(true);
		ballonControls.start({ y: -800 });
	};

	return (
		<MainBackground src="bg-cloudy-titan-sky-img">
			<AtmParticles particles={particles} particleRefs={particleRefs} />
			{/* ------ points ---------- */}
			<ScoreBoard points={points} />

			<TaskOverview img={atmParticle} text="Thick Atmosphere" width="w-[25px] ml-1" />
			<motion.div className="absolute top-[40%] left-1/2 -translate-x-1/2">
				<img
					ref={destroyerRef}
					style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
					className="w-[35px]"
					src={collider}
					alt="collider"
				/>
			</motion.div>

			<SignalGamepad start={startGame} />

			<div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 w-[100px]">
				<motion.img
					ref={ballonRef}
					initial={{ y: 0 }}
					animate={ballonControls}
					transition={{ duration: 7, delay: 0.5, ease: "easeIn" }}
					className="w-full"
					src={ballon}
					alt="ballon"
				/>
			</div>
			{retryModal && (
				<Overlay>
					<RetryModal route="/signal-start" />
				</Overlay>
			)}
		</MainBackground>
	);
}
