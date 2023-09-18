import PropTypes from "prop-types";

export default function Timer({ seconds }) {
	return (
		<div className="absolute right-6 bottom-6 z-20">
			<div className="w-32 h-14 bg-black bg-opacity-40 rounded p-2">
				<div className="bg-stone-800 bg-opacity-25 h-full rounded flex items-center justify-center">
					<span className="text-white/75 font-poppins text-[22px]">
						00 : {String(seconds).padStart(2, "0")}
					</span>
				</div>
			</div>
		</div>
	);
}

Timer.propTypes = {
	seconds: PropTypes.number,
};
