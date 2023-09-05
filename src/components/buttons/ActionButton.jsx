import PropTypes from "prop-types";

export default function ActionButton({ text, height = "h-10", width = "w-28" }) {
	return (
		<button
			className={`${height} ${width} mt-2 bg-gradient-to-b text-white from-cyan-300 via-sky-500 to-sky-600 hover:from-sky-600 hover:to-cyan-300 transition-colors active:scale-95 rounded-3xl shadow-inner border border-sky-300`}
		>
			{text}
		</button>
	);
}

ActionButton.propTypes = {
	text: PropTypes.string.isRequired,
	height: PropTypes.string,
	width: PropTypes.string,
};
