import MainBackground from "../../../components/MainBackground";
import { motion } from "framer-motion";
import cloud1 from "../../../assets/images/clouds/cloud1.png";
import cloud2 from "../../../assets/images/clouds/cloud2.png";
import cloud3 from "../../../assets/images/clouds/cloud3.png";
import cloud4 from "../../../assets/images/clouds/cloud4.png";
import cloud5 from "../../../assets/images/clouds/cloud5.png";
import cloud6 from "../../../assets/images/clouds/cloud6.png";
import cloud7 from "../../../assets/images/clouds/cloud7.png";
import cloud8 from "../../../assets/images/clouds/cloud8.png";
import cloud9 from "../../../assets/images/clouds/cloud9.png";
import cloud10 from "../../../assets/images/clouds/cloud10.png";
import cloud11 from "../../../assets/images/clouds/cloud11.png";
import cloud12 from "../../../assets/images/clouds/cloud12.png";
import stage from "../../../assets/images/little-descent-stage.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DURATION = 4;

export default function StageShowDownPage() {
	const navigate = useNavigate();

	useEffect(()=> {
		const navigationTimeout = setTimeout(() => {
			navigate("/landing-game")
		}, 5000)

		return () => clearTimeout(navigationTimeout);
	}, [navigate])

	return (
		<MainBackground src="bg-titan-sky-img">
			<div className="relative h-screen">
				<div className="absolute z-10">
					<motion.img
						initial={{ x: 0, y: 0 }}
						animate={{ x: [12, -7, 12], y: [12, -7, 12] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud1}
						alt="cloud"
					/>
				</div>
				<div className="absolute right-0">
					<motion.img
						initial={{ y: 0 }}
						animate={{ y: [20, -5, 20] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud2}
						alt="cloud"
					/>
				</div>
				<div className="absolute right-0 top-1/2">
					<motion.img
						initial={{ y: 0 }}
						animate={{ y: [10, -5, 10] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud3}
						alt="cloud"
					/>
				</div>
				<div className="absolute top-16 right-[380px]">
					<motion.img
						initial={{ x: 0 }}
						animate={{ x: [20, -5, 20] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud4}
						alt="cloud"
					/>
				</div>
				<div className="absolute -top-10 left-[1%]">
					<motion.img
						initial={{ x: 0, y: 0 }}
						animate={{ x: [14, -7, 14], y: [4, -2, 4] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud5}
						alt="cloud"
					/>
				</div>
				<div className="absolute left-1/2 top-1/2">
					<motion.img
						initial={{ y: 0 }}
						animate={{ y: [10, -3, 10] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud6}
						alt="cloud"
					/>
				</div>
				<div className="absolute left-[40%] bottom-[6%]">
					<motion.img
						initial={{ y: 0 }}
						animate={{ y: [10, -3, 10] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud7}
						alt="cloud"
					/>
				</div>
				<div className="absolute right-0 bottom-0 z-10">
					<motion.img
						initial={{ y: 0 }}
						animate={{ y: [10, -3, 10] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud8}
						alt="cloud"
					/>
				</div>
				<div className="absolute bottom-0 right-[30%] z-10">
					<motion.img
						initial={{ x: 0 }}
						animate={{ x: [8, -4, 8] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud9}
						alt="cloud"
					/>
				</div>
				<div className="absolute left-0 top-1/2 z-10">
					<motion.img
						initial={{ y: 0 }}
						animate={{ y: [20, -3, 10] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud10}
						alt="cloud"
					/>
				</div>
				<div className="absolute left-0 top-1/2 z-10">
					<motion.img
						initial={{ y: 0 }}
						animate={{ y: [8, -3, 8] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud11}
						alt="cloud"
					/>
				</div>
				<div className="absolute top-1/3 right-1/4 z-10">
					<motion.img
						initial={{ x: 0, y: 0 }}
						animate={{ x: [10, -4, 8], y: [10, -3, 10] }}
						transition={{ duration: DURATION, repeat: Infinity }}
						src={cloud12}
						alt="cloud"
					/>
				</div>
				<div className="absolute">
					<motion.img
						initial={{ x: -360, y: -190 }}
						animate={{ x: 2000, y: 690 }}
						transition={{ ease: "easeOut", duration: 4, delay: 1 }}
						src={stage}
						alt="stage"
					/>
				</div>
			</div>
		</MainBackground>
	);
}
