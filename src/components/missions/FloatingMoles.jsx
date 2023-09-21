import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import mole1 from "../../assets/images/moles/mole-1.png";
import mole2 from "../../assets/images/moles/mole-2.png";
import mole3 from "../../assets/images/moles/mole-3.png";
import mole4 from "../../assets/images/moles/mole-4.png";

const DURATION = 40;

const data = [
	{
		id: 1,
		src: mole1,
		alt: "mole-1",
		animationKey: 1,
		className: "absolute bottom-1/3",
		x: 2100,
		delay: 6,
		repeatDelay: 4,
	},
	{
		id: 200,
		src: mole2,
		alt: "mole-2",
		animationKey: 200,
		className: "absolute bottom-1/4",
		x: 1950,
		delay: 10,
		repeatDelay: 5,
	},
	{
		id: 3000,
		src: mole3,
		alt: "mole-3",
		animationKey: 3000,
		className: "absolute bottom-1/2",
		x: 1900,
		delay: 4.5,
		repeatDelay: 10,
	},
	{
		id: 40000,
		src: mole4,
		alt: "mole-4",
		animationKey: 40000,
		className: "absolute bottom-20",
		x: 2160,
		delay: 7,
		repeatDelay: 16,
	},
];

export default function FloatingMoles({updatePoints}) {
    const [moles, setMoles] = useState(data);

    const updatePointAndRerunAnimation = (id) => {
		updatePoints();
		setMoles((prevMoles) =>
			prevMoles.map((mole) =>
				mole.id === id ? { ...mole, animationKey: mole.animationKey + 1 } : mole
			)
		);
	};

	return (
		<>
			{moles.map((mole) => (
				<motion.img
					key={mole.animationKey} // unique key for each mole
					initial={{ x: -200 }}
					animate={{ x: mole.x, rotate: 360 }}
					transition={{
						duration: DURATION,
						delay: mole.delay,
						repeatDelay: mole.repeatDelay,
						repeat: Infinity,
					}}
					className={`pointer-events-auto cursor-pointer ${mole.className}`}
					src={mole.src}
					alt={mole.alt}
					onClick={() => updatePointAndRerunAnimation(mole.id)}
				/>
			))}
		</>
	);
}

FloatingMoles.propTypes = {
    updatePoints: PropTypes.func,
}