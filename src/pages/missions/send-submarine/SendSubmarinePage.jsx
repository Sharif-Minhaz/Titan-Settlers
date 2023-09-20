import { useEffect, useState } from "react";
import MainBackground from "../../../components/MainBackground";
import Overlay from "../../../components/Overlay";
import MissionIntroTipModal from "../../../components/modal/MissionIntroTipModal";
import { useNavigate } from "react-router-dom";

export default function SendSubmarinePage() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

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
