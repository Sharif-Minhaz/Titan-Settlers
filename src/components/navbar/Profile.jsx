import profile from "../../assets/images/profile.png";

export default function Profile() {
	return (
		<div>
			<img src={profile} alt="profile" />
			<div>
				<span className="text-justify text-white text-2xl font-medium tracking-wide">
					AKP
				</span>
				<div className="text-justify">
					<span className="text-white text-base font-normal tracking-wide">87/4515 Xp</span>
				</div>
			</div>
		</div>
	);
}
