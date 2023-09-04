import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function SideMenuButton({ menu }) {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate(menu.route)}
			className="w-24 h-24 flex flex-col gap-1.5 items-center justify-center transition-colors hover:bg-slate-600 bg-slate-400 bg-opacity-20 border cursor-pointer"
		>
			<img src={menu.icon} alt={menu.title} />
			<div className="text-justify text-stone-200 text-xs font-poppins font-medium tracking-tight">
				{menu.title}
			</div>
		</div>
	);
}

SideMenuButton.propTypes = {
	menu: PropTypes.object.isRequired,
};
