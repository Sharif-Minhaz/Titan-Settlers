import { useEffect, useState } from "react";
import MainBackground from "../../../components/MainBackground";
import ActionButton from "../../../components/buttons/ActionButton";
import LocationReminder from "../../../components/missions/LocationReminder";
import Overlay from "../../../components/Overlay";
import CustomModal from "../../../components/modal/CustomModal";
import Timer from "../../../components/missions/Timer";
import find from "../../../assets/gifs/find.gif";
import power from "../../../assets/images/lab/power.png";
import ref from "../../../assets/images/lab/ref.png";
import burner from "../../../assets/images/lab/burner.png";
import becker from "../../../assets/images/lab/beacker.png";
import chemicals from "../../../assets/images/lab/chemicals.png";
import stopWatch from "../../../assets/images/lab/stopwatch.png";
import indicator from "../../../assets/images/lab/indicator.png";
import microscope from "../../../assets/images/lab/microscope.png";
import nitrogen from "../../../assets/images/lab/ni.png";
import conical from "../../../assets/images/lab/conical-tubes.png";
import centrifuge from "../../../assets/images/lab/centrifuge.png";
// import rtg from "../../../assets/images/lab/rtg.png";
import grpRtg from "../../../assets/images/lab/group-rtg.png";
import { motion } from "framer-motion";
import DevWarning from "../../../components/DevWarning";
import { useWindow } from "../../../hooks/useWindow";

const labItems = [
	{ id: "l-1", src: centrifuge },
	{ id: "l-2", src: microscope },
	{ id: "l-3", src: becker },
	{ id: "l-4", src: chemicals },
	{ id: "l-5", src: stopWatch },
	{ id: "l-6", src: conical },
	{ id: "l-7", src: nitrogen },
	{ id: "l-8", src: burner },
];

export default function LaboratoryPage() {
	const [open, setOpen] = useState(false);
	const [start, setStart] = useState(false);
	const willBroken = useWindow(990);

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setOpen(true);
		}, 2000);

		return () => clearTimeout(timeOutId);
	}, []);

	return (
		<MainBackground src="bg-lab-img">
			{willBroken && <DevWarning />}
			{open && (
				<Overlay>
					<CustomModal>
						<div className="flex flex-col justify-center items-center gap-4">
							<img src={find} className="w-[200px]" alt="" />
							<div className="w-full sm:w-[700px] text-center text-white text-xl font-normal font-inter tracking-wide">
								Identify the correct laboratory equipment and position it
								appropriately to successfully complete the task.
							</div>
							<div>
								<ActionButton
									text="Enter"
									onClick={() => {
										setOpen(false);
										setStart(true);
									}}
								/>
							</div>
						</div>
					</CustomModal>
				</Overlay>
			)}

			{start ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="w-full h-screen relative"
				>
					<Timer position="right-6 top-6" minutes={1} seconds={30} />

					<img
						src={ref}
						alt="refrigerator"
						className="bottom-10 right-28 absolute w-[180px]"
					/>

					<div className="bg-black bg-opacity-70 w-max rounded-tl-sm shadow">
						<img src={grpRtg} className="absolute right-6 top-28" alt="rtg" />
					</div>

					<div className="w-[80px] top-6 left-6 absolute">
						<img src={power} alt="power" />
					</div>

					<div className="w-max shadow top-24 left-6 absolute">
						<img src={indicator} alt="indicator" className="w-[60px]" />
					</div>

					<div className="grid grid-cols-8 gap-1 absolute bottom-3 w-full place-items-center">
						{labItems.map((item) => (
							<div
								key={item.id}
								className="cursor-grab active:cursor-grabbing w-36 h-24 flex justify-center items-center bg-black bg-opacity-60 shadow border-2 border-white"
							>
								<img className="w-[70px]" src={item.src} alt="" />
							</div>
						))}
					</div>
				</motion.div>
			) : (
				<LocationReminder position="bottom-6 left-6" location="Location Laboratory" />
			)}
		</MainBackground>
	);
}
