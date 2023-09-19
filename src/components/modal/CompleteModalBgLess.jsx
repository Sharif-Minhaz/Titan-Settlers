import PropTypes from "prop-types";
import ActionButton from "../buttons/ActionButton";
import congrats from "../../assets/images/congrats.svg";
import trophy from "../../assets/images/trophy.png";
import coins from "../../assets/images/coins.png";
import { motion } from "framer-motion";

export default function CompleteModalBgLess({ des, coinsAmount, onClick }) {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="flex flex-col gap-4 items-center justify-center w-[710px] h-[500px] font-poppins"
		>
			<div>
				<img src={trophy} alt="trophy" />
			</div>
			<div>
				<img src={congrats} alt="Congratulations" />
			</div>
			<div>
				<p className="flex items-center justify-center gap-1 text-center text-white font-inter text-[22px] leading-none my-2.5 font-normal tracking-wide">
					You have earned <img className="ml-1" src={coins} alt="500" /> {coinsAmount}
				</p>
				<p className="text-center text-white font-inter text-[22px] leading-none my-2.5 font-normal tracking-wide">
					{des}
				</p>
				<p className="text-center text-white font-inter text-[20px] leading-none font-normal tracking-wide">
					Let&apos;s complete the next part
				</p>
			</div>
			<ActionButton onClick={onClick} text="Return" />
		</motion.section>
	);
}

CompleteModalBgLess.propTypes = {
	des: PropTypes.string,
	coinsAmount: PropTypes.number,
	onClick: PropTypes.func,
};
