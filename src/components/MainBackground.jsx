import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function MainBackground({
	src,
	position = "bg-[center_70%]",
	enableScaling = false,
	children,
}) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: enableScaling ? 1.2 : 1 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className={`${src} ${position} bg-no-repeat bg-cover w-full max-h-screen min-h-screen relative`}
		>
			<div className="inset-0 absolute bg-black/10">{children}</div>
		</motion.div>
	);
}

MainBackground.propTypes = {
	src: PropTypes.string,
	position: PropTypes.string,
	enableScaling: PropTypes.bool,
	children: PropTypes.node,
};
