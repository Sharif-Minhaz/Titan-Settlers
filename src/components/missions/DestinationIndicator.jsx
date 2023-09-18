import PropTypes from "prop-types";

export default function DestinationIndicator({ km }) {
	return (
		<div className="absolute left-6 bottom-6 z-20">
			<div className="text-[#543022] text-xl font-medium font-inter tracking-wide flex flex-col gap-1">
				<span>{km} km</span>
				<span>25.7 km/h</span>
				<span>160.83 UT</span>
			</div>
		</div>
	);
}

DestinationIndicator.propTypes = {
	km: PropTypes.number,
};
