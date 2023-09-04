import "./Segment.css";
import playIcon from "../../../assets/icons/play.svg";
import lockIcon from "../../../assets/icons/locked.svg";
import PropTypes from "prop-types";

export default function SegmentCard({cardInfo}) {
	return (
		<article className="w-[307px] bg-sky-950 bg-opacity-50 backdrop-blur-2xl conic group">
			<div className="h-[135px] w-full overflow-hidden p-0.5">
				<img
					className="h-full w-full object-cover pointer-events-auto transition-all group-hover:scale-110"
					src={cardInfo.img}
					alt={cardInfo.title}
				/>
			</div>
			<div className="flex flex-col p-3.5 gap-2">
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

SegmentCard.propTypes = {
    cardInfo: PropTypes.object.isRequired
}