import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes } from "react-router-dom";

import BlankLayout from "../layout/BlankLayout";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import IntroPage from "../pages/IntroPage";
import EarthIntroPage from "../pages/EarthIntroPage";
import NotFoundPage from "../pages/NotFoundPage";
import AsteroidPage from "../pages/earthDestroyers/AsteroidPage";
import EarthDestroyerPage from "../pages/earthDestroyers/EarthDestroyerPage";
import SunPage from "../pages/earthDestroyers/SunPage";
import TitanQuizPage from "../pages/exploreTitanIntro/ExploreTitanQuizPage";
import CosmicRayPage from "../pages/earthDestroyers/CosmicRayPage";
import ExploreTitanIntro from "../pages/exploreTitanIntro/ExploreTitanIntro";
import MissionsPage from "../pages/missions/MissionsPage";
import EarthMissionPage from "./../pages/missions/rover-expedition/EarthMissionPage";
import EarthSpaceshipPage from "../pages/missions/rover-expedition/EarthSpaceshipPage";
import LaunchVideoPage from "../pages/missions/rover-expedition/LaunchVideoPage";
import TitanSurfacePage from "../pages/missions/rover-expedition/TitanSurfacePage";
import TitanSurfaceLandingPage from "../pages/missions/rover-expedition/TitanSurfaceLandingPage";
import StageShowDownPage from "../pages/missions/rover-expedition/StageShowDownPage";
import LandingGamePage from "../pages/missions/rover-expedition/LandingGamePage";
import LandingLocationQuizPage from "../pages/missions/rover-expedition/LandingLocationQuizPage";
import FinalLandingPage from "../pages/missions/rover-expedition/FinalLandingPage";
import SendSubmarinePage from "../pages/missions/send-submarine/SendSubmarinePage";
import UnderneathWaterSurface from "../pages/missions/send-submarine/UnderneathWaterSurface";
import WaterPlaygroundPage from "../pages/missions/send-submarine/WaterPlaygroundPage";
import TitanSignalIntroPage from "../pages/missions/titan-signal/TitanSignalIntroPage";
import SignalStarterPage from "./../pages/missions/titan-signal/SignalStarterPage";
import SignalPassGamePage from "../pages/missions/titan-signal/SignalPassGamePage";
import SignalSuccessPage from "../pages/missions/titan-signal/SignalSuccessPage";
import SetupLabIntroPage from "../pages/missions/setup-lab/SetupLabIntroPage";
import LabGroundPage from "../pages/missions/setup-lab/LabGroundPage";

export default function Routers() {
	return (
		<AnimatePresence mode="wait">
			<Routes>
				<Route path="/" element={<BlankLayout />}>
					<Route index element={<IntroPage />} />
					<Route path="earth-intro" element={<EarthIntroPage />} />

					{/*-------------------- earth mission routes ----------------*/}
					<Route path="earth-destroyer">
						<Route index element={<EarthDestroyerPage />} />
						<Route path="asteroid" element={<AsteroidPage />} />
						<Route path="sun" element={<SunPage />} />
						<Route path="cosmic ray" element={<CosmicRayPage />} />
					</Route>
					<Route path="/explore-titan-intro" element={<ExploreTitanIntro />} />

					{/* ------------------ titan quiz routes ---------------- */}
					<Route path="/titan-quiz" element={<TitanQuizPage />} />

					{/* ------------------ rover landing routes ---------------- */}
					<Route path="/launch-mission-earth" element={<EarthMissionPage />} />
					<Route path="/earth-spaceship-base" element={<EarthSpaceshipPage />} />
					<Route path="/launch-video" element={<LaunchVideoPage />} />
					<Route path="/titan-surface" element={<TitanSurfacePage />} />
					<Route path="/titan-surface-landing" element={<TitanSurfaceLandingPage />} />
					<Route path="/showdown-stage" element={<StageShowDownPage />} />
					<Route path="/landing-game" element={<LandingGamePage />} />
					<Route path="/landing-location-quiz" element={<LandingLocationQuizPage />} />
					<Route path="/final-landing" element={<FinalLandingPage />} />

					{/*----------------- send submarine routes ------------------*/}
					<Route path="/send-submarine-intro" element={<SendSubmarinePage />} />
					<Route path="/underneath-water" element={<UnderneathWaterSurface />} />
					<Route path="/water-playground" element={<WaterPlaygroundPage />} />

					{/* ----------------- titan signal routes --------------------  */}
					<Route path="/titan-signal" element={<TitanSignalIntroPage />} />
					<Route path="/signal-start" element={<SignalStarterPage />} />
					<Route path="/signal-game" element={<SignalPassGamePage />} />
					<Route path="/signal-success" element={<SignalSuccessPage />} />

					{/*----------------------- setup lab ----------------------- */}
					<Route path="/setup-lab" element={<SetupLabIntroPage />} />
					<Route path="/lab-ground" element={<LabGroundPage />} />
				</Route>

				<Route path="/function" element={<MainLayout />}>
					<Route index element={<Navigate to="/function/home" />} />
					<Route path="home" element={<HomePage />} />
					<Route path="missions" element={<MissionsPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</AnimatePresence>
	);
}
