import { useEffect, useState } from "react";
import MainBackground from "../../../components/MainBackground";
import Overlay from "../../../components/Overlay";
import MissionIntroTipModal from "../../../components/modal/MissionIntroTipModal";
import { useNavigate } from "react-router-dom";
import DevWarning from "../../../components/DevWarning";
import { useWindow } from "../../../hooks/useWindow";

export default function SendSubmarinePage() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const willBroken = useWindow(575);

	const sendToWaterPage = () => {
		navigate("/underneath-water");
	};

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setOpen(true);
		}, 1500);

		return () => clearTimeout(timeOutId);
	}, []);

	return (
		<MainBackground src="bg-titan-lake-img">
			{willBroken && <DevWarning />}
			{open && (
				<Overlay>
					<MissionIntroTipModal
						onClick={sendToWaterPage}
						description="Task is collect the Methane liquid from the ocean water using Titan submarine. 100 % fuel is given and for changing submarine position, the will be reduced"
					/>
				</Overlay>
			)}
		</MainBackground>
	);
}
