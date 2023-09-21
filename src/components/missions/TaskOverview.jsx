import ch4 from "../../assets/images/ch4.png";

export default function TaskOverview() {
	return (
		<div className="bg-yellow-950 shadow w-max p-2 absolute bottom-8 left-8 z-30">
			<div className="w-[120px] bg-stone-900 flex items-center gap-x-1 p-0.5">
				<img className="w-10" src={ch4} alt="ch4" />
				<p className="w-20 text-white/75 text-base font-normal leading-[1.2] font-inter tracking-tight">
					Methane Liquid
				</p>
			</div>
		</div>
	);
}
