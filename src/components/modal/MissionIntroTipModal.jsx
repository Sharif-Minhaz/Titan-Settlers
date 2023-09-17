import msgBox from "../../assets/images/msg-board.png";
import info from "../../assets/gifs/info.gif";
import ActionButton from "./../buttons/ActionButton";
import { Link } from "react-router-dom";

export default function MissionIntroTipModal() {
	return (
		<div>
			<div className="relative">
				<img
					className="absolute w-[100px] h-[100px] left-3 top-2.5"
					src={info}
					alt="info"
				/>
				<img src={msgBox} alt="message box" />
				<div className="flex flex-col justify-center items-center absolute top-[160px] left-[60px] w-[460px] text-orange-200 text-2xl font-normal font-inter tracking-wide">
					<p className="text-center text-[19px]">
						Open Parachute on Titan landing, navigate the thick atmosphere, and earn
						2000 coins for your precision and skill.
					</p>
					<div className="mt-4">
						<Link to="/titan-surface-landing">
							<ActionButton text="Challenges" textSize="text-[14px]" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
