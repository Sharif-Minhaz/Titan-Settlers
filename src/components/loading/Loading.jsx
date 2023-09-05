import styles from "./loading.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
	return (
		<AnimatePresence>
			<motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				<div className={styles.parent}>
					<div className={styles.hourglass}></div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
