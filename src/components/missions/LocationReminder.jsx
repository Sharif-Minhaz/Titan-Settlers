import PropTypes from "prop-types";

export default function LocationReminder({ location, position = "bottom-6 left-8", color = "text-white" }) {
	return (
		<p className={`absolute text-center text-xl font-normal font-itim ${position} ${color}`}>
			{location}
		</p>
	);
}

LocationReminder.propTypes = {
	location: PropTypes.string,
	position: PropTypes.string,
	color: PropTypes.string,
};
