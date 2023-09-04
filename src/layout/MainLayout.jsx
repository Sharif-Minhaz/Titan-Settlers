import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function MainLayout() {
	return (
		<main className="overflow-y-hidden">
			<header className="fixed top-0 z-10 w-full">
				<Navbar />
			</header>
			<Outlet />
		</main>
	);
}
