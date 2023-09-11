import PropTypes from "prop-types";
import { motion } from 'framer-motion';

export default function ResultIndicatorImg({ src }) {
	return (
		<motion.img
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.7 }}
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			src={src}
		/>
	);
}

ResultIndicatorImg.propTypes = {
	src: PropTypes.string,
};