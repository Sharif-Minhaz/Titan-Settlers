import ch4 from "../../assets/images/ch4.png";

export default function TaskOverview() {
	return (
		<div className="bg-yellow-950 shadow w-max p-2 absolute bottom-8 left-8">
			<div className="w-40 h-16 bg-stone-900 flex items-center gap-x-1">
				<img src={ch4} alt="ch4" />
				<p className="w-20 text-white/75 text-base font-normal font-inter tracking-tight">
					Methane Liquid
				</p>
			</div>
		</div>
	);
}
