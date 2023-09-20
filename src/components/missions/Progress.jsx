import flash from "../../assets/icons/flash.svg";

export default function Progress() {
	return (
		<div className="flex items-center absolute top-8 left-8">
			<div className="bg-amber-300 w-max rounded-full">
				<img className="w-9" src={flash} alt="flash" />
			</div>
			<div className="w-[130px] h-5 border border-l-0 border-amber-200 rounded-r-full -ml-1.5">
				<p
					style={{ width: "100%" }}
					className="bg-amber-300 text-center h-full text-sm rounded-r-full leading-[1.2]"
				>
					{100}%
				</p>
			</div>
		</div>
	);
}
