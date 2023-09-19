import PropTypes from "prop-types";
import sorry from "../../assets/images/sorry.png";
import correct from "../../assets/images/correct.png";
import ActionButton from "./../buttons/ActionButton";
import { useNavigate } from "react-router-dom";

export default function LandingQuizModal({ data, closeModal }) {
	const navigate = useNavigate();
	const isCorrectAns = data._id === "op-4";

	const handleAns = () => {
		isCorrectAns ? navigate("/final-landing") : closeModal();
	};

	return (
		<div>
			<div className="text-center">
				<img className="inline-block w-[350px] h-[220px] object-cover" src={data.src} alt={data.title} />
			</div>
			<div className="text-center mb-3 mt-6">
				<img className="inline-block" src={isCorrectAns ? correct : sorry} alt="result" />
			</div>
			<p className="w-[430px] text-center text-orange-200 text-xl font-normal font-inter tracking-wide mb-3">
				{isCorrectAns
					? "Descent stage can land in this place, cause it has the plain surface."
					: "Descent stage can not land in this place because of the surface obstacles."}
			</p>
			<div className="text-center">
				<ActionButton onClick={handleAns} text={isCorrectAns ? "Next" : "Retry"} />
			</div>
		</div>
	);
}

LandingQuizModal.propTypes = {
	data: PropTypes.object,
	closeModal: PropTypes.func,
};
