import PropTypes from "prop-types";
import addImg from "../../assets/icons/add.svg";

export default function Resource({ img, amount }) {
	return (
		<div className="flex items-center gap-1">
			<img src={img} alt={amount} />
			<div className="text-justify text-stone-300 text-base font-normal tracking-wide">
				{amount}
			</div>
			<div className="cursor-pointer">
				<img src={addImg} alt="add" />
			</div>
		</div>
	);
}

Resource.propTypes = {
	img: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
};
