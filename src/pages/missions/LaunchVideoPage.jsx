import MainBackground from "../../components/MainBackground";
import rocketLaunchVideo from "../../assets/videos/sep-video.mkv";
import { motion } from "framer-motion";
import ActionButton from "../../components/buttons/ActionButton";
import { Link } from "react-router-dom";

export default function LaunchVideoPage() {
	return (
		<MainBackground src="bg-leaving-earth-img" position="bg-top">
			<div className="absolute w-[485px] z-40 border-[4px] outline outline-slate-500 border-slate-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<video autoPlay loop src={rocketLaunchVideo}></video>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 68 }}
				className="absolute bottom-6 right-6"
			>
				<Link to="/titan-surface">
					<ActionButton text="Continue ≫" />
				</Link>
			</motion.div>
		</MainBackground>
	);
}
