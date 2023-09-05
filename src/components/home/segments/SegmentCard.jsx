import "./Segment.css";
import playIcon from "../../../assets/icons/play.svg";
import lockIcon from "../../../assets/icons/locked.svg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SegmentCard({ cardInfo }) {
	const navigate = useNavigate();

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
					<span className="text-justify font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 to-cyan-500 text-xl tracking-wide italic">
						Play Now
					</span>
					<div className="cursor-pointer">
						{cardInfo.playable ? (
							<img
								className="w-5 pointer-events-auto"
								onClick={() => navigate(cardInfo.route)}
								src={playIcon}
								alt="play"
							/>
						) : (
							<img
								className="w-7 pointer-events-auto"
								onClick={() =>
									toast.error("Complete the previous mission to unlock", {
										position: "bottom-right",
									})
								}
								src={lockIcon}
								alt="locked"
							/>
						)}
					</div>
				</div>
			</div>
		</article>
	);
}

SegmentCard.propTypes = {
	cardInfo: PropTypes.object.isRequired,
};
