import PropTypes from "prop-types";
import ResultIndicatorImg from "./ResultIndicatorImg";
import correct from "../../assets/images/correct.svg";
import wrong from "../../assets/images/wrong.svg";

export default function Option({
	imageClicked,
	answer,
	index,
	handleAnswerClick,
	showResult,
	selectedAnswer,
	questions,
	currentQuestionIndex,
}) {
	return (
		<div
			className={`${
				imageClicked ? "cursor-not-allowed" : null
			} relative bg-neutral-950 border overflow-hidden group border-cyan-300`}
		>
			<img
				src={answer.imageUrl}
				alt={answer.title}
				onClick={() => handleAnswerClick(index)}
				className={`${
					imageClicked
						? "pointer-events-none"
						: "pointer-events-auto group-hover:scale-110"
				} transition-all h-60 w-full cursor-pointer object-cover`}
			/>
			{showResult &&
				(index === selectedAnswer ? (
					selectedAnswer === questions[currentQuestionIndex].correctIndex ? (
						<ResultIndicatorImg src={correct} />
					) : (
						<>
							<ResultIndicatorImg src={wrong} />
						</>
					)
				) : index === questions[currentQuestionIndex].correctIndex ? (
					<ResultIndicatorImg src={correct} />
				) : null)}
		</div>
	);
}

Option.propTypes = {
	imageClicked: PropTypes.bool,
	answer: PropTypes.object,
	index: PropTypes.number,
	handleAnswerClick: PropTypes.func,
	showResult: PropTypes.bool,
	selectedAnswer: PropTypes.func,
	questions: PropTypes.array,
	currentQuestionIndex: PropTypes.number,
};
