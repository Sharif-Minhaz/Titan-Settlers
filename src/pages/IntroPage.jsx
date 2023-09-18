import titanSatelliteImg from "../assets/icons/Icon.svg";
import brandImg from "../assets/icons/nasa-spaceship-challenge-Icon.svg";
import earthImg from "../assets/images/earth.png";
import astronaut from "../assets/images/astronaut.png";
import stars from "../assets/icons/stars.svg";
import introSong from "../assets/audios/universe-space-161447.mp3";
import AudioModal from "../components/modal/AudioModal";
import introVoice from "../../src/assets/audios/The savior of hu 3.wav";
import MainBackground from "../components/MainBackground";
import Spaceship from "../components/Spaceship";
import GetStartedSection from "../components/intro/GetStartedSection";
import { useAudio } from "../hooks/useAudio";

export default function IntroPage() {
	const { play: playIntroSong, stop: stopIntroSong } = useAudio(introSong, { loop: true });
	const { play: playIntroVoice, stop: stopIntroVoice } = useAudio(introVoice);

	const handleAudioPlay = () => {
		playIntroSong();
		playIntroVoice();
	};

	const handleAudioStop = () => {
		stopIntroSong();
		stopIntroVoice();
	};

	return (
		<MainBackground src="bg-intro-img" enableScaling={true}>
			<nav className="flex justify-between items-center px-[70px] py-2">
				<img src={titanSatelliteImg} alt="titan satellite" />
				<img src={brandImg} alt="space-logo" />
			</nav>
			<Spaceship />
			<img className="w-2/6 absolute top-2 right-24" src={stars} alt="" />
			<img className="right-20 top-24 absolute" src={earthImg} alt="earth" />
			<img src={astronaut} className="absolute right-0 bottom-0 w-[22%]" alt="astronaut" />
			<GetStartedSection />
			<AudioModal audioPlay={handleAudioPlay} audioStop={handleAudioStop} openModal={true} />
		</MainBackground>
	);
}
