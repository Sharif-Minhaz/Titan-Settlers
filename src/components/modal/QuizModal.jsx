import PropTypes from "prop-types";
import sorry from "../../assets/images/sorry.png";
import correct from "../../assets/images/correct.png";
import ActionButton from "../buttons/ActionButton";

export default function QuizModal({ ans, ansId, message, explanation, failureMsg, data, closeModal, cancelModal }) {
	const isCorrectAns = data._id === ansId;

	const handleAns = () => {
		if (isCorrectAns) {
			cancelModal();
			closeModal();
		} else {
			closeModal();
		}
	};

	return (
		<div>
			<div className="text-center">
				<img
					className="inline-block w-[150px] object-cover"
					src={data.src}
					alt={data.title}
				/>
			</div>
			<div className="text-center mb-3 mt-6">
				<img className="inline-block" src={isCorrectAns ? correct : sorry} alt="result" />
			</div>
			<p className="w-[430px] text-center text-orange-200 text-xl font-normal font-inter tracking-wide mb-3">
				{isCorrectAns ? (
					<span>
						{message}
						<span className="text-teal-400 font-semibold">{ans}</span>, {explanation}
					</span>
				) : (
					<span>
						<span className="font-semibold">{data.title}</span> {failureMsg}
					</span>
				)}
			</p>
			<div className="text-center">
				<ActionButton onClick={handleAns} text={isCorrectAns ? "Next" : "Retry"} />
			</div>
		</div>
	);
}

QuizModal.propTypes = {
	data: PropTypes.object,
	closeModal: PropTypes.func,
	cancelModal: PropTypes.func,
	ans: PropTypes.string,
	message: PropTypes.string,
	explanation: PropTypes.string,
	failureMsg: PropTypes.string,
	ansId: PropTypes.string,
};
