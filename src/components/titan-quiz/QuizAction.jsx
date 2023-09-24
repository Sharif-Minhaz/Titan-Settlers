import ActionButton from "../buttons/ActionButton";
import ideaImg from "../../assets/images/idea.png";
import matching from "../../assets/images/matching.svg";
import quiz from "../../assets/images/quiz.svg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function QuizAction({ currentQuestionIndex, nextQuestion, imageClicked }) {
	const navigate = useNavigate();

	const handleQuizAction = () => {
		toast.success("Titan Exploration completed!", {
			position: "top-right",
		});

		navigate("/function/home", {
			state: { missions: { titan: true, launch: true } },
			replace: true,
		});
	};

	return (
		<div className="flex items-center gap-3">
			<img className="h-[160px]" src={ideaImg} alt="idea" />
			<div>
				<img className="h-8" src={matching} alt="matching" />
				<img className="h-7 mb-2" src={quiz} alt="quiz" />
				<ActionButton
					text={currentQuestionIndex === 5 ? "DONE" : "NEXT"}
					rounded="rounded-0"
					textSize="text-[12px] font-bold"
					width="w-16"
					height="h-8"
					disabled={!imageClicked}
					onClick={() => {
						currentQuestionIndex === 5 ? handleQuizAction() : nextQuestion();
					}}
				/>
			</div>
		</div>
	);
}

QuizAction.propTypes = {
	nextQuestion: PropTypes.func,
	imageClicked: PropTypes.bool,
	currentQuestionIndex: PropTypes.number,
};
