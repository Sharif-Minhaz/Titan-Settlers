import { useContext } from "react";

import NavButton from "./NavButton";
import Resource from "./Resource";
import { MissionStatusContext } from "../../contexts/MissionStatusContext";

import coinImg from "../../assets/images/coins.png";
import gemImg from "../../assets/images/gems.png";
import levelImg from "../../assets/images/level.png";
import charactersImg from "../../assets/icons/characters.svg";
import mailImg from "../../assets/icons/mail.svg";
import settingsImg from "../../assets/icons/settings.svg";

export default function LevelInfo() {
	const { coins } = useContext(MissionStatusContext);

	return (
		<div className="flex gap-7">
			<Resource img={coinImg} amount={coins} />
			<Resource img={gemImg} amount={100} />
			<div className="cursor-pointer">
				<img src={levelImg} alt="level" />
			</div>
			<NavButton img={mailImg} alt="mail" />
			<NavButton route="/about" img={charactersImg} alt="Characters" />
			<NavButton img={settingsImg} alt="settings" />
		</div>
	);
}
