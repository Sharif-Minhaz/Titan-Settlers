import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GetStartedSection() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: "easeOut", duration: 1, delay: 2 }}
			className="absolute flex flex-col left-20 bottom-20"
		>
			<p className="text-white text-lg font-bold uppercase font-poppins tracking-widest">
				the savior of humanity
			</p>
			<div className="text-white text-6xl font-normal uppercase font-goldman tracking-widest">
				Titan Settlers
			</div>
			<Link to="/function/">
				<button className="w-28 h-10 mt-2 bg-gradient-to-b text-white from-cyan-300 via-sky-500 to-sky-600 rounded-3xl shadow-inner border border-sky-300">
					Explore
				</button>
			</Link>
		</motion.div>
	);
}
