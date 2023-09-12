import PropTypes from "prop-types";
import bot from "../../assets/images/astronaut-bot.png";

export default function ChatButton({ toggleChat }) {
	return (
		<div
			onClick={toggleChat}
			className="w-[70px] h-[70px] fixed bottom-6 right-6 z-30 flex justify-center text-white items-center cursor-pointer"
		>
			<img className="drop-shadow-lg inline-block" src={bot} alt="bot" />
		</div>
	);
}

ChatButton.propTypes = {
	toggleChat: PropTypes.func,
};
