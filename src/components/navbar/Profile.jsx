import profile from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";

export default function Profile() {
	const navigate = useNavigate();

	return (
		<div className="flex gap-3 items-center py-2">
			<div>
				<img
					className="pointer-events-auto cursor-pointer"
					onClick={() => navigate("/function")}
					src={profile}
					alt="profile"
				/>
			</div>
			<div className="flex flex-col">
				<span className="font-inter text-justify text-white text-xl font-medium tracking-wide">
					AKP
				</span>
				<span className="font-poppins text-white text-base font-thin tracking-wide">
					87/4515 Xp
				</span>
			</div>
		</div>
	);
}
