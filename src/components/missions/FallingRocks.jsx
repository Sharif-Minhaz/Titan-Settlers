import PropTypes from "prop-types";
import rock4 from "../../assets/images/rocks/rock-4.png";
import { motion } from "framer-motion";
import { useState } from "react";

const DURATION = 10;

const data = [
	{
		id: 1,
		className: "absolute left-[100px]",
		y: 500,
		delay: 2,
		repeatDelay: 8,
	},
	{
		id: 200,
		className: "absolute left-[36%]",
		y: 530,
		delay: 10,
		repeatDelay: 9,
	},
	{
		id: 3000,
		className: "absolute right-[35%]",
		y: 500,
		delay: 8.5,
		repeatDelay: 14,
	},
	{
		id: 4000,
		className: "absolute right-[40%] z-30",
		y: 560,
		delay: 15,
		repeatDelay: 16,
	},
	{
		id: 5000,
		className: "absolute right-60 z-30",
		y: 570,
		delay: 17,
		repeatDelay: 9,
	},
];

export default function FallingRocks() {
	const [rocks] = useState(data);

	return (
		<>
			{rocks.map((rock) => (
				<motion.img
					key={rock.id}
					initial={{ y: -80 }}
					animate={{ y: rock.y }}
					transition={{
						duration: DURATION,
						delay: rock.delay,
						repeatDelay: rock.repeatDelay,
						repeat: Infinity,
					}}
					className={rock.className}
					src={rock4}
					alt="rock"
				/>
			))}
		</>
	);
}

FallingRocks.propTypes = {
	hideMole: PropTypes.bool,
};
