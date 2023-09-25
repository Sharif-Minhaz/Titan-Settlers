import MainBackground from "../../../components/MainBackground";
import CustomModal from "../../../components/modal/CustomModal";
import radiation from "../../../assets/images/radiation.png";
import radiationGif from "../../../assets/gifs/radiation.gif";
import Overlay from "../../../components/Overlay";
import { useEffect, useState } from "react";

export default function LabGroundPage() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setOpen(true);
		}, 2000);

		return () => clearTimeout(timeOutId);
	}, []);

	return (
		<MainBackground src="bg-lab-ground-img" position="bg-[center_100%]">
			{open && (
				<Overlay>
					<CustomModal>
						<div className="flex flex-col justify-center items-center gap-4">
							<img src={radiationGif} className="w-[150px] h-[150px]" alt="" />
							<img src={radiation} className="mb-2" alt="" />
							<div className="w-[590px] h-40 text-center text-red-300 text-[32px] font-normal leading-[1.2] font-itim">
								To save from we should build a shield lab. Lets make a shield lab
								first
							</div>
						</div>
					</CustomModal>
				</Overlay>
			)}
		</MainBackground>
	);
}
