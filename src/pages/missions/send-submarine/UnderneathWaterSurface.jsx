import { motion } from "framer-motion";

import MainBackground from "../../../components/MainBackground";
import submarine from "../../../assets/images/submarine.png";
import ch4 from "../../../assets/images/ch4.png";
import { useEffect, useState } from "react";
import Overlay from "../../../components/Overlay";
import MolePointerModal from "../../../components/modal/MolePointerModal";
import { useNavigate } from "react-router-dom";
import Progress from "../../../components/missions/Progress";
import MoleProgress from "../../../components/missions/MoleProgress";
import TaskOverview from "../../../components/missions/TaskOverview";
import UnderWaterRocks from "../../../components/missions/UnderWaterRocks";

export default function UnderneathWaterSurface() {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);

	const closeModal = () => {
		navigate("/water-playground");
		setOpen(false);
	};

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setOpen(true);
		}, 2500);

		return () => clearTimeout(timeOutId);
	}, []);

	return (
		<MainBackground src="bg-water-surface-img" position="bg-[center_45%]">
			<UnderWaterRocks />

			<div className="flex justify-center items-center h-screen">
				<motion.div
					initial={{ x: 1000, y: -300 }}
					animate={{ x: 0, y: -80 }}
					transition={{ duration: 1.3, delay: 1 }}
					className="w-max"
				>
					<img className="w-[440px]" src={submarine} />
				</motion.div>
			</div>

			<Progress />
			<MoleProgress />
			<TaskOverview img={ch4} text="Methane Liquid" />

			{open && (
				<Overlay>
					<MolePointerModal closeModal={closeModal} />
				</Overlay>
			)}
		</MainBackground>
	);
}
