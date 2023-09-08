import { format } from "date-fns";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function StatusInfo({ position = 0 }) {
	const [currentTime, setCurrentTime] = useState(Date.now());

	useEffect(() => {
		const time = setInterval(() => {
			setCurrentTime(Date.now());
		}, 1000);

		return () => {
			clearInterval(time);
		};
	}, []);

	return (
		<footer className="absolute bottom-0 px-10 pb-10 font-poppins">
			<div className="flex flex-col mb-2">
				<span className="text-white text-[18px] font-medium">Rotation</span>
				<span className="text-stone-200 text-opacity-60 text-[14px] font-normal">
					Left side {position}°
				</span>
			</div>
			<div className="flex flex-col">
				<span className="text-white text-[18px] font-medium">Real Time</span>
				<span className="text-stone-200 text-opacity-60 text-[14px] font-normal">
					{format(currentTime, "pp")}
				</span>
				<span className="text-stone-200 text-opacity-60 text-[14px] font-normal">
					{format(Date.now(), "EEEE, MMMM d, yyyy (zzzzz)")}
				</span>
			</div>
		</footer>
	);
}

StatusInfo.propTypes = {
	position: PropTypes.number,
};
