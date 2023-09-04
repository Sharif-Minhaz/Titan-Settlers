import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import BlankLayout from "../layout/BlankLayout";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import IntroPage from "../pages/IntroPage";

export default function Routers() {
	return (
		<AnimatePresence mode="wait">
			<Routes>
				<Route path="/" element={<BlankLayout />}>
					<Route index element={<IntroPage />} />
				</Route>
				<Route path="/function" element={<MainLayout />}>
					<Route index element={<HomePage />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
}
