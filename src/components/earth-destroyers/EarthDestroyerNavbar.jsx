import { useNavigate } from "react-router-dom";
import prevIcon from "../../assets/icons/prev.svg";

export default function EarthDestroyerNavbar() {
	const navigate = useNavigate();

	return (
		<nav className="px-10 pt-8 fixed top-0">
			<img
				onClick={() => navigate(-1)}
				className="pointer-events-auto cursor-pointer w-7"
				src={prevIcon}
				alt="previous"
			/>
		</nav>
	);
}
