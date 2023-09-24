import MainBackground from "../../../components/MainBackground";
import atmParticle from "../../../assets/images/atmos-particle.png";
import TaskOverview from "../../../components/missions/TaskOverview";
import CompleteModalBgLess from "./../../../components/modal/CompleteModalBgLess";
import { useEffect, useState } from "react";
import Overlay from "../../../components/Overlay";
import ScoreBoard from "../../../components/missions/ScoreBoard";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ballon from "../../../assets/images/signal-ballon.png";
import signal from "../../../assets/images/signal.png";
import ThickAtmosphere from "./../../../components/missions/ThickAtmosphere";

export default function SignalSuccessPage() {
    const navigate = useNavigate();
	const data = useLocation();
	const [successModal, setSuccessModal] = useState(false);
	useEffect(() => {
		const timerId = setTimeout(() => {
			setSuccessModal(true);
		}, 5000);

		return () => clearTimeout(timerId);
	}, [setSuccessModal]);

	return (
		<MainBackground src="bg-cloudy-titan-sky-img">
			<TaskOverview img={atmParticle} text="Thick Atmosphere" width="w-[25px] ml-1" />
			<ScoreBoard points={data.state} />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1.8 }}
				className="w-[330px] text-stone-700 text-[22px] font-normal font-itim absolute top-[100px] left-8"
			>
				Now Data Can be send to the Earth. Cause On thick Atmosphere there is no radio
				signal.
			</motion.div>
			<motion.div
				initial={{ y: 800 }}
				animate={{ y: 200 }}
				transition={{ duration: 2, ease: "easeOut" }}
			>
				<img
					className="w-[90px] absolute left-1/2 -translate-x-1/2 z-10"
					src={ballon}
					alt="ballon"
				/>
				<motion.img className="absolute right-0 -top-12" src={signal} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4, delay: 2.5}} />
			</motion.div>
			<ThickAtmosphere />
			{successModal && (
				<Overlay>
					<CompleteModalBgLess
						onClick={()=> navigate("/function/missions")}
						coinsAmount={data.state * 100 + 100 || 100}
						des="You have completed First Phase of the Task successfully"
					/>
				</Overlay>
			)}
		</MainBackground>
	);
}
