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
import EarthMissionPage from "../pages/missions/EarthMissionPage";
import EarthSpaceshipPage from "../pages/missions/EarthSpaceshipPage";
import LaunchVideoPage from "../pages/missions/LaunchVideoPage";
import TitanSurfacePage from "../pages/missions/TitanSurfacePage";
import TitanSurfaceLandingPage from "../pages/missions/TitanSurfaceLandingPage";
import StageShowDownPage from "../pages/missions/StageShowDownPage";
import LandingGamePage from "../pages/missions/LandingGamePage";
import LandingLocationQuizPage from "../pages/missions/LandingLocationQuizPage";
import FinalLandingPage from "../pages/missions/FinalLandingPage";

export default function Routers() {
	return (
		<AnimatePresence mode="wait">
			<Routes>
				<Route path="/" element={<BlankLayout />}>
					<Route index element={<IntroPage />} />
					<Route path="earth-intro" element={<EarthIntroPage />} />
					<Route path="earth-destroyer">
						<Route index element={<EarthDestroyerPage />} />
						<Route path="asteroid" element={<AsteroidPage />} />
						<Route path="sun" element={<SunPage />} />
						<Route path="cosmic ray" element={<CosmicRayPage />} />
					</Route>
					<Route path="/explore-titan-intro" element={<ExploreTitanIntro />} />
					<Route path="/titan-quiz" element={<TitanQuizPage />} />
					<Route path="/launch-mission-earth" element={<EarthMissionPage />} />
					<Route path="/earth-spaceship-base" element={<EarthSpaceshipPage />} />
					<Route path="/launch-video" element={<LaunchVideoPage />} />
					<Route path="/titan-surface" element={<TitanSurfacePage />} />
					<Route path="/titan-surface-landing" element={<TitanSurfaceLandingPage />} />
					<Route path="/showdown-stage" element={<StageShowDownPage />} />
					<Route path="/landing-game" element={<LandingGamePage />} />
					<Route path="/landing-location-quiz" element={<LandingLocationQuizPage />} />
					<Route path="/final-landing" element={<FinalLandingPage />} />
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
