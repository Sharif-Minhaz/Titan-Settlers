import { motion } from "framer-motion";
import astronautImg from "../../assets/images/home-astro.png";

export default function Astronaut() {
	return (
		<motion.div
			initial={{ y: 0, rotate: 0 }}
			animate={{ y: ["-10px", "10px", "-10px"], rotate: [5, -2, 5] }}
			transition={{ duration: 8, repeat: Infinity }}
		>
			<img className="w-[350px]" src={astronautImg} alt="astronaut" />
		</motion.div>
	);
}
