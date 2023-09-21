import MainBackground from "../../../components/MainBackground";
import Progress from "../../../components/missions/Progress";
import MoleProgress from "../../../components/missions/MoleProgress";
import TaskOverview from "../../../components/missions/TaskOverview";
import Timer from "./../../../components/missions/Timer";
import UnderWaterRocks from "../../../components/missions/UnderWaterRocks";

import submarine from "../../../assets/images/game-submarine.png";
import gamepad from "../../../assets/images/gamepad.png";
import { useContext, useEffect, useState } from "react";
import Overlay from "./../../../components/Overlay";
import RetryModal from "./../../../components/modal/RetryModal";
import CompleteModalBgLess from "./../../../components/modal/CompleteModalBgLess";
import { useNavigate } from "react-router-dom";
import { MissionStatusContext } from "./../../../contexts/MissionStatusContext";
import { toast } from "react-hot-toast";
import FallingRocks from "../../../components/missions/FallingRocks";
import FloatingMoles from "../../../components/missions/FloatingMoles";

let timer = null;

export default function UnderneathWaterSurface() {
	const { addCoins } = useContext(MissionStatusContext);
	const navigate = useNavigate();
	const [points, setPoints] = useState(0);
	const [retryModal, setRetryModal] = useState(false);
	const [openSuccessModal, setOpenSuccessModal] = useState(false);
	const [time, setTime] = useState(120);
	const [position, setPosition] = useState(0);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	useEffect(() => {
		timer = setInterval(() => {
			if (time === 0) {
				clearInterval(timer);
				setRetryModal(true);
			} else {
				setTime((prevTime) => prevTime - 1);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [time]);

	const seconds = time % 60;
	const minutes = Math.floor(time / 60);

	const handleReturn = () => {
		addCoins(500);
		navigate("/function/missions", { state: ["m-2", "m-3"] });
		toast.success("Send submarine mission completed!", {
			position: "top-right",
		});
	};

	const handleKeyDown = (e) => {
		if (e.key === "ArrowLeft") {
			setPosition((prevPosition) => prevPosition - 10);
		} else if (e.key === "ArrowRight") {
			setPosition((prevPosition) => prevPosition + 10);
		}
	};

	const handlePoints = () => {
		setPoints((prevPoints) => {
			const newPoints = prevPoints + 1;
			if (newPoints === 25) {
				setOpenSuccessModal(true);
			}
			return newPoints;
		});
	};

	return (
		<MainBackground src="bg-water-surface-img" position="bg-[center_45%]">
			<UnderWaterRocks hideMole={true} />
			<FallingRocks />
			<Progress rate={time} />
			<MoleProgress points={points * 4} />
			<TaskOverview />

			<div className="flex h-screen justify-center items-center overflow-hidden">
				<img
					className="w-[400px] inline-block relative z-10"
					style={{ transform: `translateX(${position}px)` }}
					src={submarine}
				/>
			</div>

			<img
				title="Gamepad under development, please use keyboard"
				className="bottom-6 w-[110px] pointer-events-auto absolute left-1/2 -translate-x-1/2 z-20"
				src={gamepad}
				alt="gamepad"
			/>

			<FloatingMoles updatePoints={handlePoints} />

			<Timer minutes={minutes} seconds={seconds} position="right-8 bottom-8" />

			{retryModal && (
				<Overlay>
					<RetryModal route="/underneath-water" />
				</Overlay>
			)}

			{openSuccessModal && (
				<Overlay>
					<CompleteModalBgLess
						des="You have completed this Phase of the Task successfully"
						coinsAmount={500}
						onClick={handleReturn}
					/>
				</Overlay>
			)}
		</MainBackground>
	);
}
