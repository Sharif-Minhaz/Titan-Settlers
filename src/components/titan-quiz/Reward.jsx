import coin from "../../assets/images/coins.png";

export default function Reward() {
	return (
		<p className="text-center flex justify-center pt-5 pb-4 gap-1.5">
			<span className="text-white text-xl font-normal uppercase font-itim">
				Choose the Correct Image and get
			</span>
			<span className="text-amber-200 items-center text-xl font-normal uppercase flex gap-1">
				<img src={coin} className="w-5 h-6" alt="" /> 200
			</span>
		</p>
	);
}
