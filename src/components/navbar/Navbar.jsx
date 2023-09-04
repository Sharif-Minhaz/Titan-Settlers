import LevelInfo from "./LevelInfo";
import Profile from "./Profile";

export default function Navbar() {
	return (
		<nav className="bg-black bg-opacity-40 shadow px-[70px] flex justify-between items-center">
			<Profile />
			<LevelInfo />
		</nav>
	);
}
