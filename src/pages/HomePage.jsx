import MainBackground from "../components/MainBackground";
import Astronaut from "../components/home/Astronaut";
import Segments from "../components/home/segments/Segments";
import SideMenu from "../components/home/sidemenu/SideMenu";
import homeSong from "../assets/audios/rings-of-saturn-162784.mp3";
import AudioModal from "../components/modal/AudioModal";
import { useAudio } from "../hooks/useAudio";
import { useEffect } from "react";

export default function HomePage() {
	const { play, stop } = useAudio(homeSong, { loop: true });

	useEffect(() => {
		play();
	}, [play]);

	return (
		<MainBackground src="bg-home-img">
			<div className="flex h-full justify-between items-center px-[70px] py-2">
				<div className="flex gap-5 items-center">
					<SideMenu />
					<Astronaut />
				</div>
				<div className="h-full w-[630px] flex pt-2 items-center">
					<Segments />
				</div>
			</div>
			<AudioModal audioPlay={play} audioStop={stop} initialPlay={true} />
		</MainBackground>
	);
}
