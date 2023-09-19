import MainBackground from "../../../components/MainBackground";
import descentStage from "../../../assets/images/descent-stage.png";
import challenge from "../../../assets/images/challenge.png";
import frameT from "../../../assets/images/frame-top.png";
import frameB from "../../../assets/images/frame-bottom.png";
import { motion } from "framer-motion";
import ActionButton from "../../../components/buttons/ActionButton";
import { Link } from "react-router-dom";

export default function TitanSurfaceLandingPage() {
	return (
		<MainBackground src="bg-titan-sky-img">
			<div className="grid grid-cols-2 place-items-center h-screen">
				<div className="relative w-[470px] h-[320px] bg-black bg-opacity-60 p-4 flex flex-col justify-center items-center gap-3">
					<h1 className="text-orange-200 flex items-center gap-2 justify-center text-2xl font-semibold font-inter uppercase tracking-wider">
						<img src={challenge} alt="challenge" />
						<span>Challenges</span>
					</h1>
					<ul className="list-inside list-disc flex flex-col gap-4 px-4 mt-2 pb-2">
						<li className="text-red-100 text-[18px] font-normal font-poppins text-center">
							Phase 1: &quot;Open Parachute on Titan landing, navigate the thick
							atmosphere, and earn 2000 coins for your precision and skill by typing JUMPMASTER using your keyboard or input device.&quot;
						</li>
					</ul>
					<div className="text-center">
						<Link to="/showdown-stage">
							<ActionButton text="Start" />
						</Link>
					</div>
					<img className="absolute -left-2 -top-2" src={frameT} alt="" />
					<img className="absolute -right-2 -bottom-2" src={frameB} alt="" />
				</div>

				<div className="relative flex flex-col items-center justify-center">
					<motion.img
						initial={{ y: 0 }}
						animate={{ y: [10, -10, 10] }}
						transition={{ duration: 4, repeat: Infinity }}
						src={descentStage}
						className="w-[400px] relative top-14"
						alt="descent stage"
					/>
					<div className="w-[490px] h-28 bg-yellow-900 rounded-[100%]"></div>
				</div>
			</div>
		</MainBackground>
	);
}
