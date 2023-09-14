import MainBackground from "../../components/MainBackground";
import descentStage from "../../assets/images/descent-stage.png";
import { motion } from "framer-motion";

export default function TitanSurfaceLandingPage() {
	return (
		<MainBackground src="bg-titan-sky-img">
			<div className="grid grid-cols-2 place-items-center h-screen">
				<div className="w-[470px] bg-black bg-opacity-60 p-4">
					<h1 className="text-red-100 text-3xl font-semibold font-inter uppercase tracking-wider mt-3 mb-7 text-center">
						TASK
					</h1>
					<ul className="list-inside list-disc flex flex-col gap-6 px-4 pb-4">
						<li className="text-red-100 text-[18px] font-normal font-poppins">
							Phase 1: &quot;Open Parachute on Titan landing, navigate the thick
							atmosphere, and earn 500 coins for your precision and skill.&quot;
						</li>
						<li className="text-red-100 text-[18px] font-normal font-poppins">
							Phase 2: &quot;Establish a laboratory and RTG on Titan, generating
							electricity, and earn 500 coins as you pioneer scientific
							discovery.&quot;
						</li>
					</ul>
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
