import PropTypes from "prop-types";
import fire from "../../assets/images/oil.png";

export default function MoleProgress({ points = 0 }) {
	return (
		<div className="w-max bg-stone-900 flex items-center gap-x-1 p-2 absolute top-8 right-8 z-40">
			<img src={fire} className="w-5 mr-1" alt="fire" />
			<p className="w-20 text-amber-300 text-base font-normal font-inter tracking-tight">
				{points}% mole
			</p>
		</div>
	);
}

MoleProgress.propTypes = {
	points: PropTypes.number,
};
