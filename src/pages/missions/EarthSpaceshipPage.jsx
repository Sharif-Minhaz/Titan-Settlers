import MainBackground from "../../components/MainBackground";
import mainTowerImg from "../../assets/images/tower.png";
import leftTowerImg from "../../assets/images/station-tower-l.png";
import rightTowerImg from "../../assets/images/station-tower-r.png";
import rocketImg from "../../assets/images/base-rocket.png";
import startBtn from "../../assets/images/start-btn.png";
// import launchBtn from "../../assets/images/launch-btn.png";
import flames from "../../assets/images/rocket-flame.png";
import lSmoke from "../../assets/images/smoke-l.png";
import mSmoke from "../../assets/images/smoke-m.png";
import rSmoke from "../../assets/images/smoke-r.png";

export default function EarthSpaceshipPage() {
	return (
		<MainBackground src="bg-earth-base-img" position="bg-[center_20%]">
            <div className="fixed bg-black/75 w-full h-full z-30">
                <img className="w-[70px] pointer-events-auto cursor-pointer absolute bottom-7 right-7" src={startBtn} alt="start" />
            </div>
			<img
				className="absolute bottom-0 left-0 w-[165px]"
				src={mainTowerImg}
				alt="main tower"
			/>
			<div className="h-full w-[800px] relative m-auto">
				<img
					className="absolute w-[355px] bottom-0 left-0"
					src={leftTowerImg}
					alt="left-tower"
				/>
				<img
					className="absolute w-[355px] bottom-0 right-0"
					src={rightTowerImg}
					alt="right-tower"
				/>
				<img
					className="absolute bottom-[88px] z-10 left-1/2 -translate-x-[43%]"
					src={rocketImg}
					alt="rocket"
				/>
				<img className="absolute bottom-0" src={flames} alt="flames" />
				<img className="absolute bottom-0 left-0" src={lSmoke} alt="left-smoke" />
				<img
					className="absolute bottom-0 h-[200px] z-20 left-1/2 -translate-x-1/2"
					src={mSmoke}
					alt="middle-smoke"
				/>
				<img className="absolute bottom-0 right-0" src={rSmoke} alt="right-smoke" />
			</div>
		</MainBackground>
	);
}
