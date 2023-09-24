import PropTypes from "prop-types";

export default function ScoreBoard({ points}) {
	return (
		<div className="absolute z-30 bottom-6 right-6 text-yellow-900 text-3xl font-normal font-itim">
			<h3>Score</h3>
			<p className="text-4xl font-medium font-inter text-right">{points || 0}</p>
		</div>
	);
}

ScoreBoard.propTypes = {
	points: PropTypes.number,
};
