import MainBackground from "./../../../components/MainBackground";
import startBtn from "../../../assets/images/start-btn.png";
import astronaut from "../../../assets/images/astronaut-signal.png";
import ballon from "../../../assets/images/signal-ballon.png";
import LocationReminder from "../../../components/missions/LocationReminder";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignalStarterPage() {
	const navigate = useNavigate();
	const ballonControls = useAnimationControls();
	const [gotoNextPage, setGotoNextPage] = useState(false);

	const floatSignalBallon = () => {
		setGotoNextPage(true);
		ballonControls.start({ y: -950 });
	};

	useEffect(() => {
		if (gotoNextPage) {
			const timeoutId = setTimeout(() => {
				navigate("/signal-game");
			}, 3500);

			return () => clearTimeout(timeoutId);
		}
	}, [navigate, gotoNextPage]);

	return (
		<MainBackground src="bg-plain-surface-2-img" position="bg-[center_90%]">
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2">
				<img className="w-[190px]" src={astronaut} alt="astro" />
				<motion.div
					initial={{ y: -300 }}
					animate={ballonControls}
					transition={{ duration: 2, ease: "easeIn" }}
				>
					<img className="w-[90px] absolute -top-28 right-8" src={ballon} alt="ballon" />
				</motion.div>
			</div>

			<img
				className="w-[70px] z-[99] pointer-events-auto cursor-pointer absolute bottom-7 right-7"
				src={startBtn}
				alt="start"
				onClick={floatSignalBallon}
			/>

			<LocationReminder location="Location Titan" />
		</MainBackground>
	);
}
