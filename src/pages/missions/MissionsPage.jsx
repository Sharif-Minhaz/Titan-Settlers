import MissionsCarousel from "../../components/missions/MissionsCarousel";
import AudioModal from "../../components/modal/AudioModal";
import { useAudio } from "../../hooks/useAudio";
import MainBackground from "./../../components/MainBackground";
import missions from "../../assets/audios/drone-space-main-9706.mp3";

export default function MissionsPage() {
	const { play, stop } = useAudio(missions, { loop: true });

	return (
		<MainBackground src="bg-home-img">
			<MissionsCarousel />
			<AudioModal audioPlay={play} audioStop={stop} />
		</MainBackground>
	);
}
