import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

import roverExp from "../../assets/images/rover-exp.png";
import sendSubmarine from "../../assets/gifs/send-submarine.gif";
import atmStudy from "../../assets/images/atm-study.jpeg";
import geologyStudy from "../../assets/images/arch-study.jpg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const missionsInfo = [
	{
		_id: "m-1",
		title: "Rover Expedition ",
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, dignissimos illum reprehenderit molestiae exercitationem velit quidem sapiente similique nobis dicta praesentium officia",
		img: roverExp,
		coins: 3000,
		navigationRoute: "/launch-mission-earth",
		missionTitle: "MISSION 1",
		locked: false,
	},
	{
		_id: "m-2",
		title: "Send submarine",
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, dignissimos illum reprehenderit molestiae exercitationem velit quidem sapiente similique nobis dicta praesentium officia",
		img: sendSubmarine,
		coins: 7000,
		navigationRoute: "/send-submarine-intro",
		missionTitle: "MISSION 2",
		locked: true,
	},
	{
		_id: "m-3",
		title: "atmosphere study",
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, dignissimos illum reprehenderit molestiae exercitationem velit quidem sapiente similique nobis dicta praesentium officia",
		img: atmStudy,
		coins: 10000,
		navigationRoute: "/titan-3",
		missionTitle: "MISSION 3",
		locked: true,
	},
	{
		_id: "m-4",
		title: "Study geology",
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, dignissimos illum reprehenderit molestiae exercitationem velit quidem sapiente similique nobis dicta praesentium officia",
		img: geologyStudy,
		coins: 14000,
		navigationRoute: "/titan-4",
		missionTitle: "MISSION 4",
		locked: true,
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
