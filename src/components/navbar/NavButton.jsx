import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function NavButton({ img, alt, route }) {
	const navigate = useNavigate();

	return (
		<div onClick={()=> navigate(route)} className="flex items-center cursor-pointer">
			<img src={img} alt={alt} />
		</div>
	);
}

NavButton.propTypes = {
	img: PropTypes.string.isRequired,
	alt: PropTypes.string,
	route: PropTypes.string,
};
