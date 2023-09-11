import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ActionButton from "../buttons/ActionButton";
import coin from "../../assets/images/coins.png";
import ideaImg from "../../assets/images/idea.png";
import matching from "../../assets/images/matching.svg";
import quiz from "../../assets/images/quiz.svg";

export default function QuizHintModal({ closeModal }) {
	return (
		<motion.div
			initial={{ scale: 0.8 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
			className="w-[682px] p-5 relative flex flex-col justify-center h-[450px] bg-dark-space-img shadow border border-slate-400"
		>
			<div className="flex items-center justify-center gap-3">
				<img className="h-[110px]" src={ideaImg} alt="idea" />
				<div>
					<h3 className="font-itim text-[30px] mb-4 w-max border-sky-500 border-dashed border-b text-sky-400 leading-none">
						Rules & Conditions:
					</h3>
					<div className="flex gap-2">
						<img className="h-8" src={matching} alt="matching" />
						<img className="h-7" src={quiz} alt="quiz" />
					</div>
					<p className="text-teal-300 font-itim text-[20px] mt-1">
						Validate Your Expertise on Saturn&apos;s Moon
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-center text-center mt-10">
				<h3 className="text-white font-inter text-[23px] flex items-center justify-center gap-2.5">
					You have a total of{" "}
					<span className="w-[22px] h-[22px] font-bold bg-black border border-cyan-400 text-cyan-500 inline-flex justify-center text-[12px] items-center">
						6
					</span>{" "}
					questions, and there&apos;s no time limit.
				</h3>
				<p className="text-white font-itim text-[20px] mt-1">
					⊳ Among 8 options for each question, only one image is correct.
				</p>
				<p className="text-white font-itim text-[20px] flex items-center gap-1.5 justify-center">
					⊳ Please note that each question is worth{" "}
					<img className="inline-block h-[22px] w-[18px]" src={coin} alt="coins" /> 200.
				</p>
				<p className="font-poppins text-[18px] text-teal-300 mt-8 mb-4">
					⊛ Prove your knowledge about Titan, Saturn&apos;s intriguing moon!
				</p>
				<ActionButton
					onClick={closeModal}
					text="START NOW"
					textSize="text-[12px] mx-auto"
				/>
			</div>
		</motion.div>
	);
}

QuizHintModal.propTypes = {
	closeModal: PropTypes.func,
};
