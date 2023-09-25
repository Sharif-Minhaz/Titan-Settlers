import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function CustomModal({ children }) {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
			{children}
		</motion.div>
	);
}

CustomModal.propTypes = {
	children: PropTypes.node,
};
