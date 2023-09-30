import PropTypes from "prop-types";
import questionBaseImg from "../../assets/images/question-base.png";

export default function Question({ question }) {
	return (
		<div className="flex gap-3 items-center">
			<div className="relative">
				<img className="h-[120px] w-[600px]" src={questionBaseImg} alt="question" />
				<p className="text-blue-100 text-2xl leading-snug font-normal absolute font-itim top-1/2 left-[88px] -translate-y-[75%]">
					{question}
				</p>
			</div>
		</div>
	);
}

Question.propTypes = {
	question: PropTypes.string,
};
