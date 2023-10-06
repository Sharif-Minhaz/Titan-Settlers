import { useEffect, useState } from "react";
import MainBackground from "../../../components/MainBackground";
import CustomModal from "../../../components/modal/CustomModal";
import radiation from "../../../assets/images/radiation.png";
import radiationGif from "../../../assets/gifs/radiation.gif";
import Overlay from "../../../components/Overlay";
import lab from "../../../assets/images/lab.png";
import click from "../../../assets/gifs/click.gif";
import { motion } from "framer-motion";
import LocationReminder from './../../../components/missions/LocationReminder';
import { useNavigate } from "react-router-dom";
import DevWarning from "../../../components/DevWarning";
import { useWindow } from "../../../hooks/useWindow";

export default function LabGroundPage() {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [opacity, setOpacity] = useState(0);
	const willBroken = useWindow(650);

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setOpen(true);
		}, 2000);

		return () => clearTimeout(timeOutId);
	}, []);

	return (
		<MainBackground src="bg-lab-ground-img" position="bg-[center_100%]">
			{willBroken && <DevWarning />}
			{opacity === 1 && (
				<>
					<LocationReminder
						position="top-6 left-6"
						color="text-stone-700"
						location="Shielded Lab is Ready"
					/>
					<LocationReminder
						position="top-12 left-6"
						color="text-stone-700"
						location="Click to set the laboratory..."
					/>
				</>
			)}
			{open && (
				<Overlay>
					<CustomModal>
						<div className="flex flex-col justify-center items-center gap-4">
							<img src={radiationGif} className="w-[150px] h-[150px]" alt="" />
							<img src={radiation} className="mb-2" alt="" />
							<div className="w-[590px] text-center text-red-300 text-[32px] font-normal leading-[1.2] font-itim">
								To save from we should build a shield lab. Lets make a shield lab
								first
							</div>
							<div className="relative bg-black bg-opacity-30 p-3 mt-4">
								<img
									onClick={() => {
										setOpen(false);
										setOpacity(1);
									}}
									className="w-[350px] pointer-events-auto cursor-pointer"
									src={lab}
									alt="lab"
								/>
								<img className="absolute top-10 left-1/2" src={click} alt="click" />
							</div>
						</div>
					</CustomModal>
				</Overlay>
			)}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity }}
				transition={{ duration: 1.5, delay: 1 }}
				className="w-max cursor-pointer pointer-events-auto"
				onClick={() => navigate("/laboratory")}
			>
				<img
					className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[600px] cursor-pointer pointer-events-auto"
					src={lab}
					alt="lab"
				/>
				<img className="absolute bottom-12 left-1/2 w-[100px]" src={click} alt="click" />
			</motion.div>
		</MainBackground>
	);
}
