import MainBackground from "../../components/MainBackground";
import { motion } from "framer-motion";

export default function TitanSurfacePage() {
	return (
		<MainBackground src="bg-titan-surface-img" position="bg-[center_30%]">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}
				className="flex justify-center items-center h-screen"
			>
				<h2 className="text-center text-4xl font-medium font-inter tracking-wide text-white">
					Location Titan
				</h2>
			</motion.div>
		</MainBackground>
	);
}
