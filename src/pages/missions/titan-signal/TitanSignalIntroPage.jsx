import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainBackground from "../../../components/MainBackground";
import descentStage from "../../../assets/images/large-view-descent-stage.png";
import roverCraft from "../../../assets/images/rover-craft.png";
import Overlay from "./../../../components/Overlay";
import MissionIntroTipModal from "./../../../components/modal/MissionIntroTipModal";
import MissionTaskModal from "../../../components/modal/MissionTaskModal";
import TitanEarthSignalTransmission from "../../../components/missions/TitanEarthSignalTransmission";
import { useNavigate } from "react-router-dom";
import LocationReminder from "../../../components/missions/LocationReminder";

export default function TitanSignalIntroPage() {
	const navigate = useNavigate();
	const [openTipModal, setOpenTipModal] = useState(false);
	const [openTaskModal, setOpenTaskModal] = useState(false);

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
			<img
				className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[450px]"
				src={descentStage}
				alt="descent stage"
			/>
			<motion.div
				className="absolute right-[30%] bottom-[10%] w-[130px]"
				initial={{ x: 0 }}
				animate={{ x: 800 }}
				transition={{ duration: 6, delay: 1.7, ease: "easeInOut" }}
			>
				<img src={roverCraft} alt="Rover craft" className="w-full" />
			</motion.div>
			<LocationReminder location="Location Titan" />
			{openTipModal && (
				<Overlay>
					<MissionIntroTipModal
						onClick={closeTipModal}
						description="You will learn about the signal interference in Titan and a techniques preferred by NASA to overcome that situation"
					/>
				</Overlay>
			)}
			{openTaskModal && (
				<Overlay>
					<MissionTaskModal
						onClick={() => navigate("/inject-medicine")}
						description="Task is collect the Methane liquid from the ocean water using Titan submarine. 100 % fuel is given and for changing submarine position, the will be reduced Task is collect the Methane liquid from the ocean water using Titan submarine. 100 % fuel is given and for changing submarine position, the will be reduced"
					>
						<TitanEarthSignalTransmission />
					</MissionTaskModal>
				</Overlay>
			)}
		</MainBackground>
	);
}
