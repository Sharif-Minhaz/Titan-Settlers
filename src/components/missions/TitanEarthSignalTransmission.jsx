import roundingEarth from "../../assets/gifs/rounding-earth-cr.gif";
import roundingTitan from "../../assets/gifs/rounding-titan.gif";
import signal from "../../assets/gifs/signal.gif";

export default function TitanEarthSignalTransmission() {
	return (
		<div className="flex items-center gap-1 -mt-20">
			<img className="w-[65px] h-[65px]" src={roundingTitan} alt="titan" />
			<span className="mb-2.5">......</span>
			<img className="w-[60px] h-[40px]" src={signal} alt="signal" />
			<span className="mb-2.5">......</span>
			<img className="w-[65px] h-[65px]" src={roundingEarth} alt="earth" />
		</div>
	);
}
