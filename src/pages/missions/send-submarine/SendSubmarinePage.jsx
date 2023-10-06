import { useEffect, useState } from "react";
import MainBackground from "../../../components/MainBackground";
import Overlay from "../../../components/Overlay";
import MissionIntroTipModal from "../../../components/modal/MissionIntroTipModal";
import { useNavigate } from "react-router-dom";
import DevWarning from "../../../components/DevWarning";
import { useWindow } from "../../../hooks/useWindow";

const references = [
	"https://www.engadget.com/2015-02-13-nasa-saturn-titan-submarine.html?_fsig=KLmAbJGr2cx2LvOxqZqQAQ--%7EA",
	"https://www.space.com/28589-titan-submarine-robotic-saturn-ship.html",

];

export default function SendSubmarinePage() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const willBroken = useWindow(775);

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
						topGap="top-[180px]"
						infoPos="left-8 top-8"
						references={references}
						width="w-[750px]"
						placeWidth="w-[660px]"
						onClick={sendToWaterPage}
						description="NASA discovered methane lakes and waters on Saturn's moon Titan. In the future, these methane sources could be used as a source of combustion energy. The possibility of collecting methane from these lakes and seas by submerging equipment on Titan is being investigated. Using the unique characteristics of Titan's methane-rich lakes and oceans, scientists areexploring innovative methods for meeting our energy demands beyond Earth."
					/>
				</Overlay>
			)}
		</MainBackground>
	);
}
