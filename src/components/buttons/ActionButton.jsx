import PropTypes from "prop-types";
import lockedBtn from "../../assets/icons/locked-white.svg";
import playBtn from "../../assets/icons/play-btn.svg";

const disabledStyle =
	"disabled:from-neutral-300 disabled:border-slate-400 disabled:via-neutral-600 disabled:to-slate-600 disabled:hover:neutral-300 disabled:hover:to-slate-600 disabled:cursor-not-allowed disabled:active:scale-100";

export default function ActionButton({
	text,
	onClick = () => false,
	height = "h-10",
	width = "w-28",
	disabled = false,
	locked,
	textSize,
	rounded = "rounded-3xl",
	className,
	bg = "from-cyan-300 border-sky-300 via-sky-500 to-sky-600 hover:from-sky-600 hover:to-cyan-300",
}) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`${height} ${width} ${bg} ${textSize} ${rounded} ${className} inline-flex items-center justify-center mt-2 bg-gradient-to-b text-white transition-colors active:scale-95 shadow-inner border ${disabledStyle}`}
		>
			{typeof locked !== "undefined" &&
				(locked ? (
					<img className="w-9" src={lockedBtn} />
				) : (
					<img className="w-5 mr-1" src={playBtn} />
				))}
			{text}
		</button>
	);
}

ActionButton.propTypes = {
	text: PropTypes.string.isRequired,
	bg: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string,
	rounded: PropTypes.string,
	textSize: PropTypes.string,
	disabled: PropTypes.bool,
	locked: PropTypes.bool,
};
