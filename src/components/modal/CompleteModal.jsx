import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ActionButton from "../buttons/ActionButton";
import congrats from "../../assets/images/congrats.svg";
import trophy from "../../assets/images/trophy.png";

export default function CompleteModal() {
	return (
		<section className="flex flex-col gap-4 items-center justify-center w-[710px] h-[500px] bg-cover bg-complete-task-img rounded-sm border border-slate-400 font-poppins">
			<div>
				<img src={trophy} alt="trophy" />
			</div>
			<div>
				<img src={congrats} alt="Congratulations" />
			</div>
			<div>
				<p className="text-center text-white font-inter text-[22px] leading-none my-2.5 font-normal tracking-wide">
					You have completed the EARTH part successfully
				</p>
				<p className="text-center text-white font-inter text-[20px] leading-none font-normal tracking-wide">
					Let&apos;s complete the next part
				</p>
			</div>
			<Link to="/explore-titan-intro">
				<ActionButton text="Enter" />
			</Link>
		</section>
	);
}

CompleteModal.propTypes = {
	closeModal: PropTypes.func,
};
