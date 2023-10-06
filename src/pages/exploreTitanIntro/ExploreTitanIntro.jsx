import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import MainBackground from "./../../components/MainBackground";
import ActionButton from "../../components/buttons/ActionButton";

import partialEarth from "../../assets/images/half-earth.png";
import partialTitan from "../../assets/images/half-titan.png";
import radarBase from "../../assets/images/radar-component.png";
import radarArea from "../../assets/images/radar-env.png";
import radarSignal from "../../assets/images/radar-signal.png";
import rocket from "../../assets/images/rocket.png";

export default function ExploreTitanIntro() {
	const navigate = useNavigate();

	return (
		<MainBackground src="bg-intro-dark-img">
			<section className="relative z-10 flex h-screen items-center">
				<img className="absolute left-0" src={partialEarth} alt="earth" />
				<img className="absolute z-10 right-0" src={partialTitan} alt="titan" />
			</section>
			<section>
				<img
					className="absolute w-[635px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
					src={radarBase}
					alt="radar-base"
				/>
				<img
					className="absolute mt-1 w-[603px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
					src={radarArea}
					alt=""
				/>
				
				<motion.img
					className="absolute w-[300px] m-auto top-1/2 left-0 -translate-y-1/2 -translate-x-1/2"
					src={radarSignal}
					alt=""
				/>

				<motion.div
					initial={{ y: 600 }}
					animate={{ y: 0 }}
					transition={{ duration: 1.5, delay: 0.6 }}
				>
					<img
						className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
						src={rocket}
						alt="rocket"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: 1.8 }}
					className="absolute z-40 inset-0 bg-black/50 flex items-center"
				>
					<div className="flex flex-col gap-3 w-[700px] m-auto">
						<h1 className="text-center text-white font-inter text-5xl font-semibold uppercase tracking-widest">
							Explore TITAN
						</h1>
						<p className="text-center font-poppins text-white text-xl font-normal tracking-wide">
							Here The Task begin for activating Mission On TITAN.
						</p>
						<ActionButton
							onClick={() =>
								navigate("/function", {
									state: { missions: { titan: true } },
								})
							}
							text="Start"
							height="h-9"
							width="w-24 mx-auto"
						/>
					</div>
				</motion.div>
			</section>
		</MainBackground>
	);
}
