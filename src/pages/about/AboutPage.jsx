import PropTypes from "prop-types";
import MainBackground from "../../components/MainBackground";
import brand from "../../assets/images/brand.png";
import brandName from "../../assets/images/brand-name.png";
import asiful from "../../assets/images/team/asif.png";
import akash from "../../assets/images/team/akash.png";
import wahid from "../../assets/images/team/wahid.png";
import mithila from "../../assets/images/team/mithila.png";
import sharif from "../../assets/images/team/sharif.png";
import adrita from "../../assets/images/team/adrita.png";

const teamData = [
	{
		id: "t-1",
		name: "Asiful Haque",
		src: asiful,
		designation: "Data Analyst",
		university: "Daffodil International University",
		position: "left-40 top-[90px]",
	},
	{
		id: "t-2",
		name: "Shaikat Kundu Akash",
		src: akash,
		designation: "Team Leader (Project Manager)",
		university: "Daffodil International University",
		position: "left-1/2 top-20 -translate-x-1/2",
	},
	{
		id: "t-3",
		name: "Md. Wahiduzzaman Nayem",
		src: wahid,
		designation: "Software Architect",
		university: "Daffodil International University",
		position: "right-40 top-[90px]",
	},
	{
		id: "t-4",
		name: "Mithila Priasa",
		src: mithila,
		designation: "Researcher",
		university: "BRAC University",
		position: "left-40 bottom-20",
	},
	{
		id: "t-5",
		name: "Sharif Md. Minhaz",
		src: sharif,
		designation: "Full-Stack developer",
		university: "Daffodil International University",
		position: "left-1/2 bottom-7 -translate-x-1/2",
	},
	{
		id: "t-6",
		name: "Adrita Pyne",
		src: adrita,
		designation: "UX Designer",
		university: "Daffodil International University",
		position: "right-40 bottom-20",
	},
];

export default function AboutPage() {
	return (
		<MainBackground src="bg-about-img">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
				<img className="w-[160px] -mt-12" src={brand} alt="" />
				<img className="-mt-10 h-[17px]" src={brandName} alt="" />
			</div>
			{teamData.map((member) => (
				<TeamMember key={member.id} member={member} />
			))}
		</MainBackground>
	);
}

function TeamMember({ member }) {
	return (
		<div
			className={`w-[270px] h-[170px] bg-slate-900 border border-neutral-400 backdrop-blur-2xl absolute ${member.position}`}
		>
			<img
				src={member.src}
				alt={member.name}
				className="absolute -top-[80px] w-[180px] left-1/2 -translate-x-1/2"
			/>
			<div className="absolute w-full bottom-0 pb-3 bg-gradient-to-t from-gray-950 via-slate-900 to-slate-900/[.01]">
				<h2 className="text-center font-inter text-white text-base font-medium uppercase tracking-wide">
					{member.name}
				</h2>
				<h3 className="text-center font-poppins text-neutral-300 text-[14px] font-normal tracking-wide">
					{member.designation}
				</h3>
				<h3 className="text-center font-poppins text-neutral-300 text-[14px] font-normal tracking-wide">
					{member.university}
				</h3>
			</div>
		</div>
	);
}

TeamMember.propTypes = {
	member: PropTypes.object.isRequired,
};
