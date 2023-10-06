import coin from "../../assets/images/coins.png";
import PropTypes from "prop-types";
import ActionButton from "../buttons/ActionButton";
import { useNavigate } from "react-router-dom";

export default function Slide({ item }) {
	const navigate = useNavigate();
	const { title, desc, img, coins, navigationRoute, missionTitle, locked, dev } = item;

	return (
		<div>
			<div className="relative group">
				<div className="absolute bg-black/75 h-0 transition-all group-hover:h-full group-hover:py-3 border border-white/40 overflow-hidden px-3.5 z-20 text-orange-200 font-normal">
					{desc}
				</div>
				<SlideHeading className="top-0 text-orange-200 ">{title}</SlideHeading>
				<img
					className="shadow border border-blue-100 w-full h-[310px] object-cover"
					src={img}
				/>
				<SlideHeading className="bottom-0 text-orange-300">
					<img className="w-5" src={coin} alt="coin" /> {coins}
				</SlideHeading>
			</div>
			<div className="text-center mt-2.5">
				<ActionButton
					onClick={() =>
						dev ? (window.location.href = navigationRoute) : navigate(navigationRoute)
					}
					width="w-40"
					rounded="rounded-sm"
					locked={locked}
					text={missionTitle}
					disabled={locked}
				/>
			</div>
		</div>
	);
}

Slide.propTypes = {
	item: PropTypes.object,
};

function SlideHeading({ className, children }) {
	return (
		<div
			className={`w-[calc(100%-2px)] uppercase font-inter text-[14px] absolute p-2 m-px bg-black bg-opacity-60 text-center flex justify-center gap-2 items-center ${className}`}
		>
			{children}
		</div>
	);
}

SlideHeading.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};
