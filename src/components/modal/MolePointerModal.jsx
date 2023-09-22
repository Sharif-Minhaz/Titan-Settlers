import PropTypes from "prop-types";
import pointerMole from "../../assets/images/pointer-mole.png";
import pointer from "../../assets/gifs/click.gif";
import { motion } from "framer-motion";

export default function MolePointerModal({ closeModal }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="cursor-pointer w-full flex justify-center h-screen items-center"
			onClick={closeModal}
		>
			<div>
				<p className="text-center text-blue-100 text-3xl font-normal font-itim capitalize tracking-wide">
					Collect the methane liquid
				</p>
				<p className="text-center text-red-200 text-2xl mt-1 font-normal font-itim capitalize tracking-wide">
					⚠ Avoid the falling rocks
				</p>
				<img
					className="rounded-full absolute left-[280px] bottom-[72px]"
					src={pointerMole}
					alt="pointerMole"
				/>
				<img
					className="rounded-full absolute w-[80px] left-[320px] bottom-[30px]"
					src={pointer}
					alt="pointer"
				/>
			</div>
		</motion.div>
	);
}

MolePointerModal.propTypes = {
	closeModal: PropTypes.func,
};
