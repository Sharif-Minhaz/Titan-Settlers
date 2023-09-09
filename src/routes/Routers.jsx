import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";

import BlankLayout from "../layout/BlankLayout";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import IntroPage from "../pages/IntroPage";
import EarthIntroPage from "../pages/EarthIntroPage";
import NotFoundPage from "../pages/NotFoundPage";
import AsteroidPage from "../pages/earthDestroyers/AsteroidPage";
import EarthDestroyerPage from "../pages/earthDestroyers/EarthDestroyerPage";
import SunPage from "../pages/earthDestroyers/SunPage";
import CosmicRayPage from "../pages/earthDestroyers/CosmicRayPage";
import ExploreTitanIntro from "../pages/exploreTitanIntro/ExploreTitanIntro";

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
				</Route>
				<Route path="/function" element={<MainLayout />}>
					<Route index element={<HomePage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</AnimatePresence>
	);
}
