import { format } from "date-fns";
import PropTypes from "prop-types";
import bot from "../../assets/images/bot-user.png";
import userMan from "../../assets/images/user-man.png";

export default function Chat({ index, time = new Date.now(), text, img }) {
	const isBotTurn = index % 2 === 0;

	return (
		<div className={`flex gap-2.5 mb-2 ${isBotTurn ? "float-left w-full" : "float-right"}`}>
			<div className={isBotTurn ? "order-2" : "order-1"}>
				<div className={`mb-2 flex gap-1 items-center ${!isBotTurn && "justify-end"}`}>
					<img
						src={isBotTurn ? bot : userMan}
						alt="user"
						className={`h-6`}
					/>
					<span className={`ml-0.5 text-sm`}>{isBotTurn ? "Neb" : "AKP"}</span>
					<span className="text-[10px] text-gray-700 mt-[1px]">{`${format(
						new Date(time),
						"p"
					)}`}</span>
				</div>
				<div
					className={`inline-block ${
						isBotTurn ? "bg-[#f0f4f9]" : "bg-[#0084ff] text-white float-right"
					} p-2 rounded-md text-sm`}
				>
					{text ? text: <img className="h-4" src={img} />}
				</div>
			</div>
		</div>
	);
}

Chat.propTypes = {
	index: PropTypes.number,
	time: PropTypes.number,
	img: PropTypes.any,
	text: PropTypes.string,
};
