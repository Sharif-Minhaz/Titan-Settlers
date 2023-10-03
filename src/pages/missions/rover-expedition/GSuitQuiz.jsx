import PropTypes from "prop-types";
import Overlay from "../../../components/Overlay";
import { motion } from "framer-motion";
import Question from "../../../components/question/Question";
import { isEmptyObject } from "../../../utils/isEmptyObj";
import { useState } from "react";
import { shuffleArray } from "../../../utils/shuffleArray";

import right from "../../../assets/images/correct.svg";
import wrong from "../../../assets/images/wrong.svg";
import suit1 from "../../../assets/images/g-suits/1.png";
import suit2 from "../../../assets/images/g-suits/2.png";
import suit3 from "../../../assets/images/g-suits/3.png";
import suit4 from "../../../assets/images/g-suits/4.png";
import suit6 from "../../../assets/images/g-suits/6.png";
import QuizModal from "../../../components/modal/QuizModal";

const options = [
	{
		_id: "op-1",
		title: "G-Suit",
		src: suit1,
		details:
			"G-Suit is designed to prevent a black-out and g-LOC (g-induced loss of consciousness) caused by the blood pooling in the lower part of the body when under acceleration, thus depriving the brain of blood.",
	},
	{
		_id: "op-2",
		title: "Space Apron",
		src: suit2,
		details:
			"Cleaning up in a microgravity environment can be challenging. Wearing a Space Apron makes it easier to contain and manage any spills or messes, ensuring that they don't spread and cause additional problems.",
	},
	{
		_id: "op-3",
		title: "SCBA",
		src: suit3,
		details:
			"An SCBA consists of a face mask or respirator, a high-pressure air tank, a regulator, and associated hoses. People wear the SCBA to protect themselves from smoke, toxic gases, and lack of oxygen in a fire.",
	},
	{
		_id: "op-4",
		title: "Winter Coat",
		src: suit4,
		details:
			"A winter coat or jacket is designed to provide insulation and protection from the cold. It is often insulated with materials like down or synthetic fill and may have features like a hood, adjustable cuffs, and multiple pockets.",
	},
	{
		_id: "op-5",
		title: "Body Armor",
		src: suit6,
		details:
			"Body Armor are made from specialized materials, such as Kevlar, that are designed to absorb and disperse the energy from bullets, reducing the risk of injury. They are effective at stopping or reducing the impact of bullets and other ballistic projectiles.",
	},
];

export default function GSuitQuiz({closeGame}) {
	const [allOptions, setAllOptions] = useState(options);
	const [optionData, setOptionData] = useState({});

	const handleCloseModal = () => {
		setOptionData({});
		setAllOptions(shuffleArray(allOptions));
	};

	return (
		<Overlay>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="flex justify-center items-center"
			>
				<div className="absolute top-32">
					<Question question="Select the appropriate spacesuit designed to safeguard astronauts from liftoff hazards." />
				</div>
				<div>
					<p className="font-itim text-teal-100 text-[22px]">
						▣ Hover over the image to view the details about the suits
					</p>
				</div>
				<div className="absolute bottom-0 left-0 flex gap-2 p-2">
					{allOptions.map((option) => (
						<div
							key={option._id}
							className="relative group object-cover cursor-pointer flex justify-center items-center bg-neutral-700 bg-opacity-60 shadow border-2 border-white p-5"
							onClick={() => setOptionData(option)}
						>
							{!isEmptyObject(optionData) && optionData._id === option._id && (
								<img
									className="absolute top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2"
									src={option._id === "op-1" ? right : wrong}
								/>
							)}
							<img
								className="w-full inline-block text-center m-auto"
								src={option.src}
								alt=""
							/>
							<div className="absolute top-0 text-teal-100 transition-all bg-black/90 h-0 group-hover:h-full px-2.5 group-hover:py-2 overflow-hidden">
								{option.details}
							</div>
						</div>
					))}
				</div>
			</motion.div>
			{!isEmptyObject(optionData) && (
				<Overlay>
					<QuizModal
						ansId="op-1"
						message="Excellent! you choose the correct suit, "
						ans="G-Suit"
						explanation="anti gravity type suit, after wearing you can continue your takeoff journey."
						failureMsg="is not an anti gravity type suit."
						data={optionData}
						closeModal={handleCloseModal}
						cancelModal={closeGame}
					/>
				</Overlay>
			)}
		</Overlay>
	);
}

GSuitQuiz.propTypes = {
	closeGame: PropTypes.func
};