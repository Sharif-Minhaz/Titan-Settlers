import PropTypes from "prop-types";

const disabledStyle =
	"disabled:from-neutral-300 disabled:border-slate-400 disabled:via-neutral-600 disabled:to-slate-600 disabled:hover:neutral-300 disabled:hover:to-slate-600 disabled:cursor-not-allowed disabled:active:scale-100";

export default function ActionButton({
	text,
	onClick = () => false,
	height = "h-10",
	width = "w-28",
	disabled = false,
	textSize,
	rounded = "rounded-3xl",
	bg = "from-cyan-300 border-sky-300 via-sky-500 to-sky-600 hover:from-sky-600 hover:to-cyan-300",
}) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`${height} ${width} ${bg} ${textSize} ${rounded} mt-2 bg-gradient-to-b text-white transition-colors active:scale-95 shadow-inner border ${disabledStyle}`}
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
	rounded: PropTypes.string,
	textSize: PropTypes.string,
	disabled: PropTypes.bool,
};
