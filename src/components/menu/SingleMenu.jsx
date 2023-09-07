import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function SingleMenu({ menu }) {
	return (
		<NavLink to={menu.route}>
			<button id="menu" className="h-14 w-full bg-gradient-to-br from-slate-900 to-sky-900 hover:from-sky-900 hover:to-slate-900 border-r border-t transition-all border-blue-300 font-poppins border-opacity-90 backdrop-blur-3xl uppercase">
				<span className="justify-center items-center flex gap-2.5">
					<img className="w-6" src={menu.icon} alt={menu.title} />
					<span className="text-white leading-none">{menu.title}</span>
				</span>
			</button>
		</NavLink>
	);
}

SingleMenu.propTypes = {
	menu: PropTypes.object.isRequired,
};
