import { useState } from "react";
import MainBackground from "../../../components/MainBackground";

import Overlay from "../../../components/Overlay";
import questionBase from "../../../assets/images/question-base-gold.png";
import descentStageStatus from "../../../assets/images/descent-stage-status.png";
import rockyLocation from "../../../assets/images/rocky-location.png";
import waterLocation from "../../../assets/images/water-location.jpg";
import hotLocation from "../../../assets/images/hot-location.png";
import volcanicLocation from "../../../assets/images/volcanic-location.png";
import plainLocation from "../../../assets/images/plain-location.png";
import right from "../../../assets/images/correct.svg";
import wrong from "../../../assets/images/wrong.svg";
import LandingQuizModal from "../../../components/modal/LandingQuizModal";
import { isEmptyObject } from "../../../utils/isEmptyObj";
import { shuffleArray } from "../../../utils/shuffleArray";
import DevWarning from "../../../components/DevWarning";
import { useWindow } from "../../../hooks/useWindow";

const options = [
	{ _id: "op-1", title: "Rocky Location", src: rockyLocation },
	{ _id: "op-2", title: "Water Location", src: waterLocation },
	{ _id: "op-3", title: "Hot Location", src: hotLocation },
	{ _id: "op-4", title: "Plain Location", src: plainLocation },
	{ _id: "op-5", title: "Volcanic Location", src: volcanicLocation },
];

export default function LandingLocationQuizPage() {
	const [allOptions, setAllOptions] = useState(options);
	const [optionData, setOptionData] = useState({});
	const willBroken = useWindow(925);

	const handleCloseModal = () => {
		setOptionData({});
		setAllOptions(shuffleArray(allOptions));
	};

	return (
		<MainBackground src="bg-titan-sky-img">
			{willBroken && <DevWarning />}
			<Overlay>
				<div className="w-full h-screen">
					<img
						className="left-8 top-5 absolute"
						src={descentStageStatus}
						alt="descent-stage"
					/>
					<img
						className="h-[150px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[130%]"
						src={questionBase}
						alt="question"
					/>
					<div className="bg-[#181410] right-8 top-5 absolute w-max py-2 px-4">
						<span className="text-white text-center">11 KM</span>
					</div>
					{/* options */}
					<div className="grid grid-cols-5 absolute bottom-0 w-full gap-8 px-8 pb-8">
						{allOptions.map((option) => (
							<div
								key={option._id}
								className="relative object-cover cursor-pointer"
								onClick={() => setOptionData(option)}
							>
								{!isEmptyObject(optionData) && optionData._id === option._id && (
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
							</div>
						))}
					</div>
				</div>
				{!isEmptyObject(optionData) && (
					<Overlay>
						<LandingQuizModal data={optionData} closeModal={handleCloseModal} />
					</Overlay>
				)}
			</Overlay>
		</MainBackground>
	);
}
