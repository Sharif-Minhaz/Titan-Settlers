import PropTypes from "prop-types";
import msgBox from "../../assets/images/msg-board.png";
import info from "../../assets/gifs/info.gif";
import ActionButton from "./../buttons/ActionButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function MissionIntroTipModal({
	description,
	onClick,
	topGap = "top-[160px]",
	width,
	placeWidth,
	infoPos = "left-3 top-2.5",
	references,
}) {
	const navigate = useNavigate();

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
			<div className="relative">
				<img className={`absolute w-[100px] h-[100px] ${infoPos}`} src={info} alt="info" />
				<img className={width} src={msgBox} alt="message box" />
				<div
					className={`flex flex-col justify-center items-center absolute ${topGap} left-[60px] ${
						placeWidth ? placeWidth : "w-[460px]"
					} text-orange-200 text-2xl font-normal font-inter tracking-wide`}
				>
					<p className="text-center text-[19px]">
						{description
							? description
							: "Open Parachute on Titan landing, navigate the thick atmosphere, and earn 2000 coins for your precision and skill."}
					</p>
					<div className="flex">
						{references?.length &&
							references.map((ref) => (
								<a target="_blank" rel="noreferrer" key={ref} className="mr-2 underline text-base text-blue-500" href={ref}>
									Read More
								</a>
							))}
					</div>
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
		</motion.div>
	);
}

MissionIntroTipModal.propTypes = {
	infoPos: PropTypes.string,
	width: PropTypes.string,
	placeWidth: PropTypes.string,
	topGap: PropTypes.string,
	description: PropTypes.string,
	onClick: PropTypes.func,
	references: PropTypes.array,
};
