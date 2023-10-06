import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

import roverExp from "../../assets/images/rover-exp.png";
import sendSubmarine from "../../assets/gifs/send-submarine.gif";
import atmStudy from "../../assets/images/atm-study.jpeg";
import buildLab from "../../assets/images/build-lab.jpeg";
import artificial from "../../assets/images/artificial.png";
import titanCity from "../../assets/images/titan-city.jpeg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const missionsInfo = [
	{
		_id: "m-1",
		title: "Dragonfly- Land The Spaceship",
		desc: "Microgravity during flight offers unique challenges. Titan's thick atmosphere requires special spacecraft design. Hypergravity during launch and landing puts strain on astronauts. NASA's data guides safety measures.",
		img: roverExp,
		coins: 2000,
		navigationRoute: "/launch-mission-earth",
		missionTitle: "MISSION 1",
		locked: false,
		dev: false,
	},
	{
		_id: "m-2",
		title: "Send submarine",
		desc: "Send a submarine to explore the lakes and seas of Titan. A submarine would be able to explore the liquid methane lakes and seas of Titan, which are too deep for a rover to reach. It could collect samples of the liquid and study its properties.",
		img: sendSubmarine,
		coins: 4000,
		navigationRoute: "/send-submarine-intro",
		missionTitle: "MISSION 2",
		locked: true,
		dev: false,
	},
	{
		_id: "m-3",
		title: "Celestial echo",
		desc: "Send a submarine to explore the lakes and seas of Titan. A submarine would be able to explore the liquid methane lakes and seas of Titan, which are too deep for a rover to reach. It could collect samples of the liquid and study its properties.",
		img: atmStudy,
		coins: 6000,
		navigationRoute: "/titan-signal",
		missionTitle: "MISSION 3",
		locked: true,
		dev: false,
	},
	{
		_id: "m-4",
		title: "Radiant Cosmos",
		desc: "In Titan, increased radiation poses risks. Temperature management is crucial. The quest for energy is met with Radioisotope Thermoelectric Generators (RTG) on the lab, powering vital systems sustainably.",
		img: buildLab,
		coins: 7000,
		navigationRoute: "/setup-lab",
		missionTitle: "MISSION 4",
		locked: true,
		dev: false,
	},
	{
		_id: "m-5",
		title: "Build ECTOLIFE (Artificial Womb)",
		desc: "Establishing ectolife on Titan, with its unique conditions, paves the way for future exploration and potential colonization, expanding our understanding of extraterrestrial habitats and their possibilities.",
		img: artificial,
		coins: 9000,
		navigationRoute:
			"https://www.figma.com/file/VhpWsbDKZl0iWAmuVwREPm/The_Titans?node-id=78%3A2691&mode=dev",
		missionTitle: "COMING SOON",
		locked: false,
		dev: true,
	},
	{
		_id: "m-6",
		title: "Build City for TITAN",
		desc: "Scientists are very interested in the possibility of life on Titan. A mission could be sent to search for organic molecules, which are the building blocks of life.",
		img: titanCity,
		coins: 10000,
		navigationRoute:
			"https://www.figma.com/file/VhpWsbDKZl0iWAmuVwREPm/The_Titans?node-id=78%3A17213&mode=dev",
		missionTitle: "COMING SOON",
		locked: false,
		dev: true,
	},
];

export default function MissionsCarousel() {
	const { state } = useLocation();
	const [missionData, setMissionData] = useState(missionsInfo);

	useEffect(() => {
		setMissionData((prevMissionData) => {
			const updatedMissionData = prevMissionData.map((item) => {
				return {
					...item,
					locked: state?.includes(item._id) ? false : item.locked,
				};
			});

			if (JSON.stringify(updatedMissionData) !== JSON.stringify(prevMissionData)) {
				return updatedMissionData;
			}

			return prevMissionData;
		});
	}, [state]);

	return (
		<div className="flex h-screen justify-center items-center">
			<div className="w-[800px] h-[430px] bg-sky-950 bg-opacity-90 border-transparent backdrop-blur-3xl p-2.5">
				<div className="w-full h-full p-5 bg-slate-950 border border-blue-950 backdrop-blur-3xl">
					<Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={3} navigation>
						{missionData.map((item) => (
							<SwiperSlide key={item._id} className="text-white">
								<Slide item={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}
