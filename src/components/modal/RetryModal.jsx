import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import sorry from "../../assets/images/sorry!!!.png";
import ActionButton from "../buttons/ActionButton";

export default function RetryModal({ route }) {
	const navigate = useNavigate();

	return (
		<div className="text-center">
			<img className="inline-block" src={sorry} alt="sorry" />
			<div className="text-center my-4 text-orange-200 text-xl font-normal font-inter tracking-wide">
				Mission failed, You can try again
			</div>
			<div>
				<ActionButton text="Retry" onClick={() => navigate(route)} />
			</div>
		</div>
	);
}

RetryModal.propTypes = {
	route: PropTypes.string,
};
