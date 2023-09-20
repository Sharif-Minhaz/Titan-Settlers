import MainBackground from "../../../components/MainBackground";
import Progress from "../../../components/missions/Progress";
import MoleProgress from "../../../components/missions/MoleProgress";
import TaskOverview from "../../../components/missions/TaskOverview";
import Timer from "./../../../components/missions/Timer";
import UnderWaterRocks from "../../../components/missions/UnderWaterRocks";

export default function UnderneathWaterSurface() {
	return (
		<MainBackground src="bg-water-surface-img" position="bg-[center_45%]">
			<UnderWaterRocks />

			<Progress />
			<MoleProgress />
			<TaskOverview />

			<Timer minutes="02" seconds={10} position="right-8 bottom-8" />
		</MainBackground>
	);
}
