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
import DevWarning from "../../../components/DevWarning";
import { useWindow } from "../../../hooks/useWindow";

const references = ["https://www.nasa.gov/scientificballoons/faqs/"];

export default function TitanSignalIntroPage() {
	const navigate = useNavigate();
	const [openTipModal, setOpenTipModal] = useState(false);
	const [openTaskModal, setOpenTaskModal] = useState(false);
	const willBroken = useWindow(777);

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
						topGap="top-[180px]"
						infoPos="left-8 top-8"
						references={references}
						width="w-[750px]"
						placeWidth="w-[660px]"
						onClick={closeTipModal}
						description="NASA is contemplating the use of scientific balloons for Titan-to-Earth long-distance communication. This is because Titan's dense atmosphere and lack of radio signals present obstacles. Through the use of scientific balloons that can navigate Titan's atmosphere, scientists intend to establish a reliable communication link. This innovative strategy would facilitate the transmission of vital data and information from Titan to Earth, thereby advancing our understanding of this intriguing moon."
					/>
				</Overlay>
			)}
			{openTaskModal && (
				<Overlay>
					<MissionTaskModal
						onClick={() => navigate("/inject-medicine")}
						description="Navigating beyond the protective thick atmosphere bubble is challenging. Safely transmitting data to Earth is the goal, earning valuable coins as a reward for this daring feat."
					>
						<TitanEarthSignalTransmission />
					</MissionTaskModal>
				</Overlay>
			)}
		</MainBackground>
	);
}
