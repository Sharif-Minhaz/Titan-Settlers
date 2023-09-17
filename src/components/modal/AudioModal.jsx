import PropTypes from "prop-types";
import audio from "../../assets/images/audio.png";
import silent from "../../assets/images/silent.png";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function AudioModal({ openModal = false, audioPlay, audioStop }) {
	const [play, setPlay] = useState(false);
	const [open, setOpen] = useState(openModal);

	const openDetailsModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	const playAudio = (e) => {
		e.stopPropagation();
		setOpen(false);
		setPlay(!play);
		play ? audioStop() : audioPlay();
	};

	return (
		<OutsideClickHandler onOutsideClick={closeModal}>
			<div
				className={`fixed top-3 z-50 ${
					open ? "left-0" : "-left-[187px]"
				} transition-transform bg-black/75 rounded-tr-md rounded-br-md flex items-center`}
			>
				<div className="text-white border-r border-[#233634] p-3">
					<p className="text-[15px]">Play BGM, for this page?</p>
					{open && (
						<a
							className="underline text-blue-200 text-sm"
							target="_black"
							href="https://developer.chrome.com/blog/autoplay/#web-audio"
						>
							Learn more
						</a>
					)}
				</div>
				<div className="p-2 cursor-pointer" onClick={openDetailsModal}>
					<img
						className="w-[31px] h-[31px] pointer-events-auto"
						onClick={playAudio}
						src={play ? audio : silent}
						alt="audio"
					/>
				</div>
			</div>
		</OutsideClickHandler>
	);
}

AudioModal.propTypes = {
	openModal: PropTypes.bool,
	audioPlay: PropTypes.func,
	audioStop: PropTypes.func,
};
