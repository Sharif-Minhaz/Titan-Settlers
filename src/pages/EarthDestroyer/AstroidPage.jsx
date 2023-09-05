import { motion } from "framer-motion";
import MainBackground from "../../components/MainBackground";
import astroid from "../../assets/images/asteroid.png";
import prevIcon from "../../assets/icons/prev.svg";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { useState } from "react";

export default function AstroidPage() {
	const navigate = useNavigate();
	const [loading] = useState(false);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<MainBackground src="bg-astroid-destroyer-img">
					<nav className="px-[70px] pt-8 fixed top-0">
						<img
							onClick={() => navigate(-1)}
							className="pointer-events-auto cursor-pointer w-7"
							src={prevIcon}
							alt="previous"
						/>
					</nav>
					<motion.img
						className="pointer-events-auto cursor-pointer"
						src={astroid}
						alt="Astroid"
					/>
				</MainBackground>
			)}
		</>
	);
}
