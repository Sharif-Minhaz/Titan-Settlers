import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";

import videoPlayer from "../../assets/icons/video-player.svg";

export default function GifModal({ closeModal, stableImg, gif }) {
	const [content, setContent] = useState(stableImg);

	const play = (e) => {
		e.stopPropagation();
		setContent(gif);
	};

	const pause = () => {
		setContent(stableImg);
	};

	const handleCloseModal = () => {
		closeModal();
		setContent(stableImg);
	};

	return (
		<OutsideClickHandler onOutsideClick={handleCloseModal}>
			<motion.div
				onClick={pause}
				initial={{ scale: 0.8 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.4, ease: "easeInOut" }}
				className="w-[682px] relative h-96 bg-black bg-opacity-10 shadow border border-slate-400"
			>
				<img className="w-full object-cover h-full" src={content} alt="content" />
				{!content.includes(".gif") && (
					<img
						onClick={play}
						className="cursor-pointer pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						src={videoPlayer}
						alt="video-play"
					/>
				)}
			</motion.div>
		</OutsideClickHandler>
	);
}

GifModal.propTypes = {
	closeModal: PropTypes.func,
	stableImg: PropTypes.string,
	gif: PropTypes.string,
};
