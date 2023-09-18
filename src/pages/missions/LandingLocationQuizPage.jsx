import MainBackground from "../../components/MainBackground";

import questionBase from "../../assets/images/question-base-gold.png";
import descentStageStatus from "../../assets/images/descent-stage-status.png";
import Overlay from "../../components/Overlay";

export default function LandingLocationQuizPage() {
	return (
		<MainBackground src="bg-titan-sky-img">
			<Overlay>
				<div className="w-full h-screen">
					<img
						className="left-5 top-5 absolute"
						src={descentStageStatus}
						alt="descent-stage"
					/>
					<img
						className="h-[150px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[130%]"
						src={questionBase}
						alt="question"
					/>
					<div className="bg-[#181410] right-5 top-5 absolute w-max py-2 px-4">
						<span className="text-white text-center">11 KM</span>
					</div>
					{/* options */}
					<div>
                        
                    </div>
				</div>
			</Overlay>
		</MainBackground>
	);
}
