import PropTypes from "prop-types";

export default function Timer({ minutes = 0, seconds, position = "right-6 bottom-6" }) {
	return (
		<div className={`absolute ${position} z-20`}>
			<div className="w-32 h-14 bg-black bg-opacity-40 rounded p-2">
				<div className="bg-stone-800 bg-opacity-25 h-full rounded flex items-center justify-center">
					<span className="text-white/75 font-poppins text-[22px]">
						{String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}
					</span>
				</div>
			</div>
		</div>
	);
}

Timer.propTypes = {
	seconds: PropTypes.number,
	position: PropTypes.string,
	minutes: PropTypes.number,
};
