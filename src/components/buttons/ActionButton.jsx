import PropTypes from "prop-types";

export default function ActionButton({
	text,
	onClick = () => false,
	height = "h-10",
	width = "w-28",
	textSize,
	bg = "from-cyan-300 border-sky-300 via-sky-500 to-sky-600 hover:from-sky-600 hover:to-cyan-300",
}) {
	return (
		<button
			onClick={onClick}
			className={`${height} ${width} ${bg} ${textSize} mt-2 bg-gradient-to-b text-white transition-colors active:scale-95 rounded-3xl shadow-inner border`}
		>
			{text}
		</button>
	);
}

ActionButton.propTypes = {
	text: PropTypes.string.isRequired,
	bg: PropTypes.string,
	onClick: PropTypes.func,
	height: PropTypes.string,
	width: PropTypes.string,
	textSize: PropTypes.string,
};
