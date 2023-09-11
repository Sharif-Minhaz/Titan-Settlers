import PropTypes from "prop-types";
import ActionButton from "../buttons/ActionButton";
import { useContext } from "react";
import { MissionStatusContext } from "../../contexts/MissionStatusContext";
import { motion } from "framer-motion";
import congrats from "../../assets/images/congrats.svg";

export default function QuizAnswerModal({ correctImgInfo, handleCloseAnsModal }) {
	const { addCoins } = useContext(MissionStatusContext);
	return (
		<motion.div
			initial={{ scale: 0.3 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.7, ease: "easeInOut" }}
			className="w-[700px] flex flex-col gap-2 items-center justify-center h-[530px] bg-black bg-opacity-10"
		>
			<p className="text-white">{correctImgInfo?.title}</p>
			<a target="_blank" rel="noreferrer" href={correctImgInfo?.imageUrl}>
				<img
					className="w-[450px] h-[300px] object-cover border-2 pointer-events-auto cursor-zoom-in border-cyan-400"
					src={correctImgInfo?.imageUrl}
				/>
			</a>
			<p className="leading-none mt-5 mb-2">
				<img className="h-[35px]" src={congrats} alt="Congratulations" />
			</p>
			<p className="text-center text-amber-300 font-inter text-xl font-medium tracking-widest">
				You&apos;ve earned 200 coins!
			</p>
			<p className="text-center text-white text-xl font-inter font-normal tracking-wide -mt-1">
				You have successfully selected the right image
			</p>
			<ActionButton
				text="OK"
				onClick={() => {
					handleCloseAnsModal();
					addCoins(200);
				}}
			/>
		</motion.div>
	);
}

QuizAnswerModal.propTypes = {
	handleCloseAnsModal: PropTypes.func,
	correctImgInfo: PropTypes.object,
};
