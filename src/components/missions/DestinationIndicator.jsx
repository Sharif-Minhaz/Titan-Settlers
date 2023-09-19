import PropTypes from "prop-types";

export default function DestinationIndicator({ textColor = "text-[#543022]", km, speed = 25.7 }) {
	return (
		<div className="absolute left-6 bottom-6 z-20">
			<div
				className={`${textColor} text-xl font-medium font-inter tracking-wide flex flex-col gap-1`}
			>
				<span>{km} km</span>
				<span>{speed} km/h</span>
				<span>160.83 UT</span>
			</div>
		</div>
	);
}

DestinationIndicator.propTypes = {
	textColor: PropTypes.string,
	km: PropTypes.number,
	speed: PropTypes.number,
};
