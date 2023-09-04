import { Outlet } from "react-router-dom";

export default function BlankLayout() {
	return (
		<main className="overflow-y-hidden">
			<Outlet />
		</main>
	);
}
