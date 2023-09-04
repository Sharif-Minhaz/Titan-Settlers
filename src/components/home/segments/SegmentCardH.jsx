import playIcon from "../../../assets/icons/play.svg";
import lockIcon from "../../../assets/icons/locked.svg";
import PropTypes from "prop-types";

export default function SegmentCardH({ cardInfo }) {
	return (
		<article className="h-full bg-sky-950 bg-opacity-50 group conic backdrop-blur-2xl flex gap-1">
			<div className=" w-[500px] overflow-hidden p-0.5">
				<img
					className="h-full w-full object-cover pointer-events-auto transition-all group-hover:scale-110"
					src={cardInfo.img}
					alt={cardInfo.title}
				/>
			</div>
			<div className="flex flex-col p-3.5 gap-2 pb-5">
				<h2 className="text-white text-2xl font-semibold font-inter tracking-wide">
					{cardInfo.title}
				</h2>
				<p className="text-stone-50 text-base leading-[1.2] font-normal tracking-wide">
					{cardInfo.description}
				</p>
				<div className="flex justify-between items-center">
					<span className="text-justify text-cyan-300 text-xl font-semibold tracking-wide italic">
						Play Now
					</span>
					<div className="cursor-pointer">
						{cardInfo.playable ? (
							<img className="w-5" src={playIcon} alt="play" />
						) : (
							<img className="w-7" src={lockIcon} alt="locked" />
						)}
					</div>
				</div>
			</div>
		</article>
	);
}

SegmentCardH.propTypes = {
	cardInfo: PropTypes.object.isRequired,
};
