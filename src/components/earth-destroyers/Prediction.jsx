import PropTypes from "prop-types";
import littleAsteroid from "../../assets/images/little-asteroid.png";
import playVid from "../../assets/icons/play-vid.svg";
import { motion } from "framer-motion";
import Overlay from "../Overlay";
import { useState } from "react";
import GifModal from "../modal/GifModal";

export default function Prediction({ gif, stableImg }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<article className="flex flex-col items-center absolute right-7 mt-8 w-max z-40">
				<motion.img
					className="text-center"
					initial={{ y: 0, rotate: 0 }}
					animate={{ y: ["-2px", "4px", "-2px"], rotate: [5, -2, 5] }}
					transition={{ duration: 8, repeat: Infinity }}
					src={littleAsteroid}
					width={50}
				/>
				<div className="w-32 my-2 text-center text-white text-[15px] leading-snug font-normal font-poppins">
					How Asteroid destroy Earth
				</div>
				<button
					onClick={openModal}
					className="w-24 h-8 flex cursor-pointer active:scale-95 font-roboto items-center gap-2 pl-2.5 bg-slate-400 bg-opacity-20 rounded border border-slate-200"
				>
					<img src={playVid} className="w-3" alt="play" />
					<span className="text-sky-100 text-[13px] font-normal">Explore</span>
				</button>
			</article>
			{isModalOpen && (
				<Overlay>
					<GifModal gif={gif} stableImg={stableImg} closeModal={closeModal} />
				</Overlay>
			)}
		</>
	);
}

Prediction.propTypes = {
	gif: PropTypes.string,
	stableImg: PropTypes.string,
};
