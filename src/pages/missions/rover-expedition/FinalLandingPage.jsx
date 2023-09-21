import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import MainBackground from "../../../components/MainBackground";
import descentStage from "../../../assets/images/descent-stage.png";
import para from "../../../assets/images/para.png";
import DestinationIndicator from "../../../components/missions/DestinationIndicator";
import CompleteModalBgLess from "../../../components/modal/CompleteModalBgLess";
import Overlay from "../../../components/Overlay";
import { MissionStatusContext } from "../../../contexts/MissionStatusContext";
import toast from "react-hot-toast";

export default function FinalLandingPage() {
	const navigate = useNavigate();
	const [km, setKm] = useState(11);
	const [openSuccessModal, setOpenSuccessModal] = useState(false);
	const { addCoins } = useContext(MissionStatusContext);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (km === 0) {
				clearInterval(intervalId);
			} else {
				setKm((prev) => prev - 1);
			}
		}, 500);

		return () => clearInterval(intervalId);
	}, [km]);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setOpenSuccessModal(true);
		}, 8500);

		return () => clearTimeout(timeoutId);
	}, []);

	const handleReturn = () => {
		addCoins(2000);
		navigate("/function/missions", { state: ["m-2"] });
		toast.success("Rover expedition mission completed!", {
			position: "top-right",
		});
	};

	return (
		<MainBackground src="bg-plain-surface-img">
			<div className="flex h-full justify-center">
				<motion.div
					className="w-max"
					initial={{ y: -200 }}
					animate={{ y: 380 }}
					transition={{ ease: easeOut, duration: 6 }}
				>
					<div className="relative">
						<img
							className="relative w-[240px] z-10"
							src={descentStage}
							alt="descent-stage"
						/>
						<motion.img
							initial={{ rotate: 16 }}
							animate={{ rotate: -80, y: 170, x: -110, opacity: 0 }}
							transition={{ delay: 6, duration: 2 }}
							className="absolute -top-[200px] -left-1 w-[350px] rotate-[16deg]"
							src={para}
							alt="para"
						/>
					</div>
				</motion.div>
			</div>
			<DestinationIndicator textColor="text-white/75" km={km} speed={10} />
			{openSuccessModal && (
				<Overlay>
					<CompleteModalBgLess
						des="You have completed First Phase of the Task successfully"
						coinsAmount={2000}
						onClick={handleReturn}
					/>
				</Overlay>
			)}
		</MainBackground>
	);
}
