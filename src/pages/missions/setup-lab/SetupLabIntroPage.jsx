import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainBackground from "../../../components/MainBackground";
import descentStage from "../../../assets/images/large-view-descent-stage.png";
import roverCraft from "../../../assets/images/lab-setter.png";
import Overlay from "./../../../components/Overlay";
import MissionIntroTipModal from "./../../../components/modal/MissionIntroTipModal";
import MissionTaskModal from "../../../components/modal/MissionTaskModal";
import { useNavigate } from "react-router-dom";
import LocationReminder from "../../../components/missions/LocationReminder";
import DevWarning from "../../../components/DevWarning";
import { useWindow } from "../../../hooks/useWindow";

export default function SetupLabIntroPage() {
	const navigate = useNavigate();
	const [openTipModal, setOpenTipModal] = useState(false);
	const [openTaskModal, setOpenTaskModal] = useState(false);
	const willBroken = useWindow(580);

	const closeTipModal = () => {
		setOpenTipModal(false);
		setOpenTaskModal(true);
	};

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setOpenTipModal(true);
		}, 4000);

		return () => clearTimeout(timeOutId);
	}, []);

	return (
		<MainBackground src="bg-plain-surface-img">
			{willBroken && <DevWarning />}
			<img
				className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[450px]"
				src={descentStage}
				alt="descent stage"
			/>
			<motion.div
				className="absolute right-[30%] bottom-[10%] w-[150px]"
				initial={{ x: 0, y: 0 }}
				animate={{ x: 800, y: 100 }}
				transition={{ duration: 6, delay: 1.7, ease: "easeInOut" }}
			>
				<img src={roverCraft} alt="Rover craft" className="w-full" />
			</motion.div>
			<LocationReminder
				position="top-6 left-6"
				color="text-stone-700"
				location="Let’s Go To Build Laboratory in TITAN...."
			/>
			<LocationReminder location="Location Titan" />
			{openTipModal && (
				<Overlay>
					<MissionIntroTipModal
						onClick={closeTipModal}
						description="Be Aware of radiation, Manage temperature, Quest For Energy on the surface Of Titan."
					/>
				</Overlay>
			)}
			{openTaskModal && (
				<Overlay>
					<MissionTaskModal
						onClick={() => navigate("/lab-ground")}
						description="Establish a Shielded Energy LAB with an RTG for Quest Energy. Carefully manage temperature while setting up various lab components with a strong sense of efficiency and energy conservation to creating Womb for set ECTOLIFE for the next mission."
					/>
				</Overlay>
			)}
		</MainBackground>
	);
}
