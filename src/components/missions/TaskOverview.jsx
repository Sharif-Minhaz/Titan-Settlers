import PropTypes from "prop-types";

export default function TaskOverview({ img, text, width = "w-10" }) {
	return (
		<div className="bg-yellow-950 shadow w-max p-2 absolute bottom-8 left-8 z-30">
			<div className="min-w-[120px] bg-stone-900 flex items-center gap-x-1 p-0.5">
				<img className={width} src={img} alt="task-image" />
				<p className="w-[92px] text-white/75 text-base font-normal leading-[1.2] font-inter tracking-tight">
					{text}
				</p>
			</div>
		</div>
	);
}

TaskOverview.propTypes = {
	img: PropTypes.any,
	text: PropTypes.string,
	width: PropTypes.string,
};
