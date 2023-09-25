import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import msgBox from "../../assets/images/task-modal-border.png";
import challenge from "../../assets/images/challenge.png";
import ActionButton from "./../buttons/ActionButton";

export default function MissionTaskModal({ description, onClick, children }) {
	const navigate = useNavigate();

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
			<div className="relative">
				<div className="absolute flex items-center justify-center gap-2 left-1/2 -translate-x-1/2 -top-[12px]">
					<img className="w-[29px] h-[27px]" src={challenge} alt="challenge" />
					<p className="text-orange-200 text-2xl font-semibold font-inter uppercase tracking-wider leading-none">
						Challenges
					</p>
				</div>
				<img className="w-[600px]" src={msgBox} alt="message box" />
				<div
					className={`flex h-full flex-col justify-center items-center absolute ${
						typeof children === "undefined" ? "top-0" : "top-[50px]"
					} left-[0px] w-[600px] text-orange-200 text-2xl font-normal font-inter tracking-wide`}
				>
					{children}
					<p className="p-5 bb-3 text-center text-[19px]">{description}</p>
					<div className="mt-0">
						<ActionButton
							onClick={() => {
								onClick ? onClick() : navigate("/titan-surface-landing");
							}}
							text="Enter"
							textSize="text-[14px]"
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

MissionTaskModal.propTypes = {
	description: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node,
};
