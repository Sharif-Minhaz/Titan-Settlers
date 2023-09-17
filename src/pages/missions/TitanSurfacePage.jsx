import MainBackground from "../../components/MainBackground";
import { motion } from "framer-motion";
import { useState } from "react";
import Overlay from './../../components/Overlay';
import MissionIntroTipModal from "../../components/modal/MissionIntroTipModal";

export default function TitanSurfacePage() {
	const [showTipModal, setShowTipModal] = useState(false);

	return (
		<MainBackground src="bg-titan-surface-img" position="bg-[center_30%]">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}
				onClick={() => setShowTipModal(true)}
				className="flex justify-center items-center h-screen"
			>
				{showTipModal ? (
					<Overlay>
						<MissionIntroTipModal />
					</Overlay>
				) : (
					<div>
						<h2 className="text-center text-4xl font-medium font-inter tracking-wide text-white">
							Location Titan
						</h2>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 2 }}
							className="text-neutral-100"
						>
							Click any where to continue...
						</motion.p>
					</div>
				)}
			</motion.div>
		</MainBackground>
	);
}
