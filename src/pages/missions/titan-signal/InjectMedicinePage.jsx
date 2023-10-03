import MainBackground from "../../../components/MainBackground";
import roverCraft from "../../../assets/images/rover-craft.png";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Overlay from "../../../components/Overlay";
import MissionIntroTipModal from "../../../components/modal/MissionIntroTipModal";
import inj1 from "../../../assets/images/injections/1.png";
import inj2 from "../../../assets/images/injections/2.png";
import inj3 from "../../../assets/images/injections/3.png";
import inj4 from "../../../assets/images/injections/4.png";
import inj5 from "../../../assets/images/injections/5.png";
import { isEmptyObject } from "../../../utils/isEmptyObj";
import right from "../../../assets/images/correct.svg";
import wrong from "../../../assets/images/wrong.svg";
import { shuffleArray } from "../../../utils/shuffleArray";
import Question from "../../../components/question/Question";
import QuizModal from "../../../components/modal/QuizModal";
import astronaut from "../../../assets/images/astronaut-signal.png";
import { useNavigate } from "react-router-dom";

const options = [
	{
		_id: "op-1",
		title: "Amoxicillin",
		src: inj1,
		details:
			"Space missions often involve close quarters and the potential for exposure to microorganisms. Antibiotics like Amoxicillin may be carried to treat infections that astronauts could encounter while in space.",
	},
	{
		_id: "op-2",
		title: "Ibuprofen ",
		src: inj2,
		details:
			"Astronauts can experience various types of pain during space missions, including headaches, muscle aches, and joint pain. Pain relievers like Ibuprofen may be included in the medical kit for astronauts.",
	},
	{
		_id: "op-3",
		title: "Melatonin",
		src: inj3,
		details:
			"Astronauts face sleep problems in space due to the microgravity environment and absence of a day-night cycle. Sleep aids like melatonin may be included in the medical kit to help them get the necessary rest.",
	},
	{
		_id: "op-4",
		title: "Amifostine",
		src: inj4,
		details:
			"Amifostine is the medication that protects healthy cells from the harmful effects of chemotherapy and radiation therapy. It is classified as a cytoprotective agent, which protects cells from damage.",
	},
	{
		_id: "op-5",
		title: "Ondansetron",
		src: inj5,
		details:
			"Nausea and vomiting can be common side effects of space travel. Medications such as Ondansetron can be used to help astronauts combat motion sickness and nausea during spaceflight",
	},
];

export default function InjectMedicinePage() {
	const navigate = useNavigate();
	const [openTipModal, setOpenTipModal] = useState(false);
	const [openQuiz, setOpenQuiz] = useState(false);
	const [allOptions, setAllOptions] = useState(options);
	const [optionData, setOptionData] = useState({});
	const roverControls = useAnimationControls();
	const [land, setLand] = useState(0);

	useEffect(() => {
		roverControls.start({ x: 1300 });
	}, [roverControls]);

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setOpenTipModal(true);
			roverControls.stop();
		}, 4000);

		return () => clearTimeout(timeOutId);
	}, [roverControls]);

	const closeTipModal = () => {
		setOpenTipModal(false);
		setOpenQuiz(true);
	};

	const handleCloseModal = () => {
		setOptionData({});
		setAllOptions(shuffleArray(allOptions));
	};

	const cancelModal = () => {
		setLand(1);
		setOpenQuiz(false);
		roverControls.start({ x: 1500 }).then(() => {
			navigate("/signal-start");
		});
	};

	return (
		<MainBackground src="bg-plain-surface-2-img" position="bg-[center_85%]">
			<motion.div
				className="absolute bottom-[10%] w-[200px]"
				initial={{ x: -300 }}
				animate={roverControls}
				transition={{ duration: 6, delay: 0.5, ease: "easeInOut" }}
			>
				<img src={roverCraft} alt="Rover craft" className="w-full" />
			</motion.div>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: land }}
				transition={{ duration: 1 }}
				className="absolute w-[40px] bottom-[8%] right-1/2"
				src={astronaut}
			/>

			{openTipModal && (
				<Overlay>
					<MissionIntroTipModal
						onClick={closeTipModal}
						description="The primary challenge is safely administering anti-radiation medication for personal protection in outer space. This requires precise injections to ensure safety."
					/>
				</Overlay>
			)}

			{openQuiz && (
				<Overlay>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="flex justify-center items-center"
					>
						<div className="absolute top-32">
							<Question question="Choose the correct medicine to inject" />
						</div>
						<div>
							<p className="font-itim text-teal-100 text-[22px]">
								▣ Hover over the image to view the details of the syringe
							</p>
						</div>
						<div className="absolute bottom-0 left-0 flex gap-2 p-2">
							{allOptions.map((option) => (
								<div
									key={option._id}
									className="relative group object-cover cursor-pointer flex justify-center items-center bg-neutral-700 bg-opacity-60 shadow border-2 border-white p-5"
									onClick={() => setOptionData(option)}
								>
									{!isEmptyObject(optionData) &&
										optionData._id === option._id && (
											<img
												className="absolute top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2"
												src={option._id === "op-4" ? right : wrong}
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
				</Overlay>
			)}

			{!isEmptyObject(optionData) && (
				<Overlay>
					<QuizModal
						ansId="op-4"
						message="Excellent! you choose the correct syringe of "
						ans="Amifostine"
						explanation="anti radiation medicine, after injecting you can go outside for signal related	work."
						failureMsg="is not an anti radiation type medicine."
						data={optionData}
						closeModal={handleCloseModal}
						cancelModal={cancelModal}
					/>
				</Overlay>
			)}
		</MainBackground>
	);
}
