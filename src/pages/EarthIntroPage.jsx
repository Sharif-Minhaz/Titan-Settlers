import MainBackground from "../components/MainBackground";
import earthImg from "../assets/images/rounding-earth.png";
import roundingPlanets from "../assets/images/rounding-planets.png";
import roundingLittlePlanets from "../assets/images/roundinglittle-planets.png";
import planetRing from "../assets/images/ring.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ActionButton from './../components/buttons/ActionButton';

export default function EarthIntroPage() {
	return (
		<MainBackground src="bg-earth-into-img">
			<div className="relative w-full h-full flex justify-center items-center">
				<motion.div
					initial={{ rotate: 0, scale: 1 }}
					animate={{ rotate: 150, scale: 1.25 }}
					transition={{ duration: 3 }}
					className="absolute w-[450px]"
				>
					<img src={earthImg} alt="earth" />
				</motion.div>
				<motion.div
					initial={{ scale: 1 }}
					animate={{ scale: 1.2 }}
					transition={{ duration: 3 }}
					className="absolute w-1/4"
				>
					<img className="w-full" src={planetRing} alt="planet-ring" />
				</motion.div>
				<motion.div
					initial={{ rotate: 0, scale: 1 }}
					animate={{ rotate: -380, scale: 1.2 }}
					transition={{ duration: 3 }}
					className="absolute w-[45%]"
				>
					<img className="w-full" src={roundingLittlePlanets} alt="planets" />
				</motion.div>
				<motion.div
					initial={{ rotate: 0 }}
					animate={{ rotate: 360 }}
					transition={{ duration: 3 }}
					className="absolute w-[60%]"
				>
					<img className="w-full" src={roundingPlanets} alt="planets" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: 2 }}
					className="absolute inset-0 bg-black/50 flex items-center"
				>
					<div className="flex flex-col gap-3 w-[700px] m-auto">
						<h1 className="text-center text-white font-inter text-5xl font-semibold uppercase tracking-widest">
							Explore Earth
						</h1>
						<p className="text-center font-poppins text-white text-xl font-normal tracking-wide">
							Here The Task Started to know Why earth will destroy & gain coins for
							Unlocking Titan Exploration.
						</p>
						<Link to="/earth-destroyer" className="m-auto">
							<ActionButton text="Start" height="h-9" width="w-24" />
						</Link>
					</div>
				</motion.div>
			</div>
		</MainBackground>
	);
}
