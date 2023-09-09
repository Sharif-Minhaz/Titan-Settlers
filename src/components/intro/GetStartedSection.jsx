import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ActionButton from './../buttons/ActionButton';

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
				<ActionButton text="Explore" />
			</Link>
		</motion.div>
	);
}
