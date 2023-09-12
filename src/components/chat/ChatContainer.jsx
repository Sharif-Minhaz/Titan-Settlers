import "./Chat.css";
import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatBox from "./ChatBox";
import Overlay from "../Overlay";
import OutsideClickHandler from "react-outside-click-handler";

export default function ChatContainer() {
	const [open, setOpen] = useState(false);

	const toggleChat = () => {
		setOpen(!open);
	};

	const closeChat = () => {
		setOpen(false);
	};

	return (
		<div className="z-60 relative">
			{open && (
				<Overlay>
					<OutsideClickHandler onOutsideClick={closeChat}>
						<ChatBox closeChat={closeChat} />
					</OutsideClickHandler>
				</Overlay>
			)}
			<ChatButton toggleChat={toggleChat} />
		</div>
	);
}
