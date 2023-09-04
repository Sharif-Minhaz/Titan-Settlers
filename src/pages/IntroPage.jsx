import titanSatelliteImg from "../assets/icons/Icon.svg";
import brandImg from "../assets/icons/nasa-spaceship-challenge-Icon.svg";
import earthImg from "../assets/images/earth.png";
import astronaut from "../assets/images/astronaut.png";
import stars from "../assets/icons/stars.svg";
import MainBackground from "../components/MainBackground";
import Spaceship from "../components/Spaceship";
import GetStartedSection from "../components/intro/GetStartedSection";

export default function IntroPage() {
	return (
		<MainBackground src="bg-intro-img">
			<nav className="flex justify-between items-center px-[70px] py-2">
				<img src={titanSatelliteImg} alt="titan satellite" />
				<img src={brandImg} alt="space-logo" />
			</nav>
			<Spaceship />
			<img className="w-2/6 absolute top-2 right-24" src={stars} alt="" />
			<img className="right-20 top-24 absolute" src={earthImg} alt="earth" />
			<img src={astronaut} className="absolute right-0 bottom-0 w-[22%]" alt="astronaut" />
			<GetStartedSection />
		</MainBackground>
	);
}
