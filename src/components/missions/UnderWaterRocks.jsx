import mole from "../../assets/images/mole.png";
import rock1 from "../../assets/images/rocks/rock-1.png";
import rock2 from "../../assets/images/rocks/rock-2.png";
import rock3 from "../../assets/images/rocks/rock-3.png";
import rock4 from "../../assets/images/rocks/rock-4.png";

export default function UnderWaterRocks() {
	return (
		<>
			<img className="absolute bottom-5 left-0 w-[150px]" src={rock1} alt="rock-1" />
			<img
				className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[300px]"
				src={rock2}
				alt="rock-2"
			/>
			<img className="absolute right-10 bottom-8 w-[150px]" src={rock3} alt="rock-3" />
			<img className="absolute bottom-36 left-[200px]" src={rock4} alt="rock-4" />

			<img className="absolute left-72 bottom-20 w-[80px]" src={mole} alt="mole" />
		</>
	);
}
