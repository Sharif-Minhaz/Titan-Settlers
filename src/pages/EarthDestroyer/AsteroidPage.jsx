import MainBackground from "../../components/MainBackground";
import Attributes from "../../components/earth-destroyers/Attributes";
import EarthDestroyerNavbar from "../../components/earth-destroyers/EarthDestroyerNavbar";
import StatusInfo from "../../components/earth-destroyers/StatusInfo";
import asteroid from "../../assets/images/des-asteroid.png";
import roundingEarth from "../../assets/images/rounded-earth.png";
import { motion } from "framer-motion";
import PredictionAsteroid from "../../components/earth-destroyers/PredictionAsteroid";

const data = [
	{ _id: "attr-01", heading: "age", value: "4.6B years" },
	{ _id: "attr-02", heading: "formation", value: "Nebula leftovers" },
	{ _id: "attr-03", heading: "size", value: "9m - 329mi" },
	{ _id: "attr-04", heading: "KNOWN COUNT", value: "1,301,083" },
	{ _id: "attr-05", heading: "TYPE", value: "C-type, S-type, M-type" },
];

export default function AsteroidPage() {
	return (
		<MainBackground src="bg-dark-sky-img">
			<EarthDestroyerNavbar />
			<div className="mt-3.5 px-10">
				<Attributes data={data} title="asteroid" />
			</div>
			<motion.img
				initial={{ y: 0, rotate: 0 }}
				animate={{ y: ["-5px", "2px", "-5px"] }}
				transition={{ duration: 8, repeat: Infinity }}
				className="w-[330px] absolute left-48 top-1/3 -translate-y-1/2 pointer-events-auto cursor-pointer"
				src={asteroid}
			/>
			<PredictionAsteroid />
			<motion.img
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 100, delay: 0 }}
				className="w-[900px] absolute -right-[390px] -bottom-[470px]"
				src={roundingEarth}
			/>
			<StatusInfo />
		</MainBackground>
	);
}
