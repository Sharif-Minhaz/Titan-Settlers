import PropTypes from "prop-types";

export default function LocationReminder({ location }) {
	return (
		<p className="absolute bottom-6 left-8 text-center text-white text-xl font-normal font-itim">
			{location}
		</p>
	);
}

LocationReminder.propTypes = {
	location: PropTypes.string,
};
