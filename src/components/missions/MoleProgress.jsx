import fire from "../../assets/images/oil.png";

export default function MoleProgress() {
	return (
		<div className="w-max bg-stone-900 flex items-center gap-x-1 p-2 absolute top-8 right-8">
			<img src={fire} className="w-5 mr-1" alt="fire" />
			<p className="w-20 text-amber-300 text-base font-normal font-inter tracking-tight">
				{0}% mole
			</p>
		</div>
	);
}
