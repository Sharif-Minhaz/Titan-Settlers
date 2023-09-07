import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";

export default function MainLayout() {
	return (
		<>
			<header className="fixed top-0 z-10 w-full">
				<Navbar />
			</header>
			<main className="overflow-y-hidden">
				<Outlet />
			</main>
			<footer className="fixed bottom-0 z-20 w-full">
				<Menu />
			</footer>
		</>
	);
}
