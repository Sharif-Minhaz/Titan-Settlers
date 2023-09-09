import { useNavigate } from "react-router-dom";
import prevIcon from "../../assets/icons/prev.svg";
import PropTypes from "prop-types";

export default function EarthDestroyerNavbar({ openModal }) {
	const navigate = useNavigate();

	return (
		<nav className="px-10 pt-8 fixed top-0">
			{openModal ? (
				<img
					onClick={openModal}
					className="pointer-events-auto cursor-pointer w-7"
					src={prevIcon}
					alt="previous"
				/>
			) : (
				<img
					onClick={() => navigate(-1)}
					className="pointer-events-auto cursor-pointer w-7"
					src={prevIcon}
					alt="previous"
				/>
			)}
		</nav>
	);
}

EarthDestroyerNavbar.propTypes = {
	openModal: PropTypes.func,
};
