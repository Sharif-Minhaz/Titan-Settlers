import styles from "./segment.module.css";
import { useContext } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import playIcon from "../../../assets/icons/play.svg";
import lockIcon from "../../../assets/icons/locked.svg";
import { MissionStatusContext } from "../../../contexts/MissionStatusContext";

export default function SegmentCardH({ cardInfo }) {
	const navigate = useNavigate();
	const { missions } = useContext(MissionStatusContext);

	return (
		<article
			className={`h-full bg-sky-950 bg-opacity-50 group backdrop-blur-2xl flex gap-1 ${styles.conic}`}
		>
			<div className="w-[500px] overflow-hidden p-0.5">
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
					<span className="text-justify font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 to-cyan-500 text-xl tracking-wide italic">
						Play Now
					</span>
					<div className="cursor-pointer">
						{missions[cardInfo.mission] ? (
							<img
								className="w-5 pointer-events-auto"
								onClick={() => navigate(cardInfo.route)}
								src={playIcon}
								alt="play"
							/>
						) : (
							<img
								onClick={() =>
									toast.error("Complete the previous mission to unlock", {
										position: "bottom-right",
									})
								}
								className="w-7 pointer-events-auto"
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

SegmentCardH.propTypes = {
	cardInfo: PropTypes.object.isRequired,
};
