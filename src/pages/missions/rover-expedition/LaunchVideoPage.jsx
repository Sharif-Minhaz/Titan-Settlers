import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import MainBackground from "../../../components/MainBackground";
import ActionButton from "../../../components/buttons/ActionButton";
import { useAudio } from "../../../hooks/useAudio";
import AudioModal from "../../../components/modal/AudioModal";

import rocketLaunchVideo from "../../../assets/videos/sep-video.mkv";
import spaceAudio from "../../../assets/audios/space-120280.mp3";

export default function LaunchVideoPage() {
	const { play, stop } = useAudio(spaceAudio, { loop: true, volume: 0.3 });

	useEffect(() => {
		play();
	}, [play]);

	return (
		<MainBackground src="bg-leaving-earth-img" position="bg-top">
			<div className="absolute w-[485px] z-40 border-[4px] outline outline-slate-500 border-slate-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<video autoPlay muted src={rocketLaunchVideo}></video>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 20 }}
				className="absolute bottom-6 right-6"
			>
				<Link to="/titan-surface">
					<ActionButton text="Continue ≫" />
				</Link>
			</motion.div>
			<AudioModal audioPlay={play} audioStop={stop} initialPlay={true} />
		</MainBackground>
	);
}
