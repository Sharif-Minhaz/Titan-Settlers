import newsIcon from "../../../assets/icons/newspaper.svg";
import earnIcon from "../../../assets/icons/monetize.svg";
import calenderIcon from "../../../assets/icons/calendar.svg";

import SideMenuButton from "./SideMenuButton";

const sideMenu = [
	{ id: "sm-1", route: "/function/daily-login", title: "DAILY LOGIN", icon: calenderIcon },
	{ id: "sm-2", route: "/function/news", title: "NEWS", icon: newsIcon },
	{ id: "sm-3", route: "/function/earn", title: "EARN GEMS", icon: earnIcon },
];

export default function SideMenu() {
	return (
		<div className="flex flex-col gap-4">
			{sideMenu.map((menu) => (
				<SideMenuButton key={menu.id} menu={menu} />
			))}
		</div>
	);
}
