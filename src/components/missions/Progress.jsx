import PropTypes from "prop-types";
import flash from "../../assets/icons/flash.svg";

export default function Progress({ rate }) {
	const progressive = typeof rate === "undefined" ? "100%" : rate * 0.83333333333333;

	return (
		<div className="flex items-center absolute top-8 left-8 z-20">
			<div className="bg-amber-300 w-max rounded-full">
				<img className="w-9" src={flash} alt="flash" />
			</div>
			<div className="w-[130px] h-5 border border-l-0 border-amber-200 rounded-r-full -ml-1.5">
				<p
					style={{ width: `${progressive.toString()}%` }}
					className="bg-amber-300  text- text-center h-full text-[12px] rounded-r-full transition-[width] leading-[1.4]"
				>
					{parseInt(progressive) >= 30 ? parseInt(progressive) + "%" : ""}
				</p>
			</div>
		</div>
	);
}

Progress.propTypes = {
	rate: PropTypes.number,
};
