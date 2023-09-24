import PropTypes from "prop-types";
import play from "../../assets/images/gamepad-arrows/play-signal.png";
import playT from "../../assets/images/gamepad-arrows/top.png";
import playL from "../../assets/images/gamepad-arrows/left.png";
import playR from "../../assets/images/gamepad-arrows/right.png";
import playB from "../../assets/images/gamepad-arrows/bottom.png";

export default function SignalGamepad({ start }) {
	return (
		<div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
			<div className="relative w-[135px] h-[135px]">
				<img
					className="absolute top-1/2 -translate-y-1/2 left-0 w-[59px]"
					src={playL}
					alt="l"
				/>
				<img
					className="absolute right-0 top-1/2 w-[59px] -translate-y-1/2"
					src={playR}
					alt="r"
				/>
				<img
					onClick={start}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[59px] pointer-events-auto cursor-pointer z-10"
					src={play}
					alt="play"
				/>
				<img
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[59px]"
					src={playT}
					alt="t"
				/>
				<img
					className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[59px]"
					src={playB}
					alt="b"
				/>
			</div>
		</div>
	);
}

SignalGamepad.propTypes = {
	start: PropTypes.func,
};
