import PropTypes from "prop-types";
import msgBox from "../../assets/images/msg-board.png";
import info from "../../assets/gifs/info.gif";
import ActionButton from "./../buttons/ActionButton";
import { useNavigate } from "react-router-dom";

export default function MissionIntroTipModal({ description, onClick }) {
	const navigate = useNavigate();

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
						{description
							? description
							: "Open Parachute on Titan landing, navigate the thick atmosphere, and earn 2000 coins for your precision and skill."}
					</p>
					<div className="mt-4">
						<ActionButton
							onClick={() => {
								onClick ? onClick() : navigate("/titan-surface-landing");
							}}
							text="Challenges"
							textSize="text-[14px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

MissionIntroTipModal.propTypes = {
	description: PropTypes.string,
	onClick: PropTypes.func,
};
