import PropTypes from "prop-types";
import rock4 from "../../assets/images/rocks/rock-4.png";
import { motion } from "framer-motion";

const DURATION = 5

export default function FallingRocks() {
	return (
		<>
			<motion.img
				initial={{ y: -80 }}
				animate={{ y: 500 }}
				transition={{ duration: DURATION, delay: 2, repeatDelay: 8, repeat: Infinity }}
				className="absolute left-[100px]"
				src={rock4}
				alt="rock-1"
			/>
			<motion.img
				initial={{ y: -80 }}
				animate={{ y: 530 }}
				transition={{ duration: DURATION, delay: 10, repeatDelay: 9, repeat: Infinity }}
				className="absolute left-[36%]"
				src={rock4}
				alt="rock-2"
			/>
			<motion.img
				initial={{ y: -80 }}
				animate={{ y: 500 }}
				transition={{ duration: DURATION, delay: 8.5, repeatDelay: 14, repeat: Infinity }}
				className="absolute right-[35%]"
				src={rock4}
				alt="rock-3"
			/>
			<motion.img
				initial={{ y: -80 }}
				animate={{ y: 560 }}
				transition={{ duration: DURATION, delay: 15, repeatDelay: 16, repeat: Infinity }}
				className="absolute right-[40%] z-30"
				src={rock4}
				alt="rock-4"
			/>
			<motion.img
				initial={{ y: -80 }}
				animate={{ y: 569 }}
				transition={{ duration: DURATION, delay: 17, repeatDelay: 9, repeat: Infinity }}
				className="absolute right-60 z-30"
				src={rock4}
				alt="rock-4"
			/>
		</>
	);
}

FallingRocks.propTypes = {
	hideMole: PropTypes.bool,
};
