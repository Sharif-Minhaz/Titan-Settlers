import MainBackground from "../components/MainBackground";
import Astronaut from "../components/home/Astronaut";
import Segments from "../components/home/segments/Segments";
import SideMenu from "../components/home/sidemenu/SideMenu";

export default function HomePage() {
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
		</MainBackground>
	);
}
