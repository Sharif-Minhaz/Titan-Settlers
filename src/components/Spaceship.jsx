import { motion } from "framer-motion";
import spaceship from "../assets/images/spaceship.png";

export default function Spaceship() {
	return (
		<motion.span
			initial={{ x: -360, y: 120 }}
			animate={{ x: 0, y: -90 }}
			transition={{ ease: "easeOut", duration: 1, delay: 1 }}
			className="inline-block w-[400px]"
		>
			<img className="w-full" src={spaceship} alt="spaceship" />
		</motion.span>
	);
}
