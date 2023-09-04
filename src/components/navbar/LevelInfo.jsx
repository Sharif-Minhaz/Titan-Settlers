import coinImg from "../../assets/images/coins.png";
import gemImg from "../../assets/images/gems.png";
import levelImg from "../../assets/images/level.png";
import charactersImg from "../../assets/icons/characters.svg";
import mailImg from "../../assets/icons/mail.svg";
import settingsImg from "../../assets/icons/settings.svg";
import NavButton from "./NavButton";
import Resource from "./Resource";

export default function LevelInfo() {
	return (
		<div className="flex gap-7">
			<Resource img={coinImg} amount="2000" />
			<Resource img={gemImg} amount="100" />
			<div className="cursor-pointer">
				<img src={levelImg} alt="level" />
			</div>
			<NavButton img={mailImg} alt="mail" />
			<NavButton img={charactersImg} alt="Characters" />
			<NavButton img={settingsImg} alt="settings" />
		</div>
	);
}
