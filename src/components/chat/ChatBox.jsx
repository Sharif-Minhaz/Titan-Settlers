import Chat from "./Chat";
import loadingImg from "../../assets/gifs/loading.gif";
import { useState } from "react";
import PropTypes from "prop-types";
import PreDefinedOptions from "./PreDefinedOptions";
import close from "../../assets/icons/close-fill.svg";

export default function ChatBox({ closeChat }) {
	const [text, setText] = useState("");
	const [selectedOption, setSelectedOption] = useState("")

	const handleSelectedOption = (info) => {
		setSelectedOption(info)
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setText("");
	};

	return (
		<div className="fixed z-[99] bottom-[110px] right-6 rounded-md shadow-lg bg-white font-inter text-white w-[330px] browser-end:w-[340px] ">
			<div className="relative h-[100%]">
				<div className="bg-default-theme py-3 px-4 rounded-t-lg text-lg flex items-center justify-between shadow-sm">
					<p className="text-black font-semibold font-inter">TITAN</p>
					<div className="flex items-center gap-2">
						<div className="cursor-pointer" onClick={closeChat}>
							<img
								className="w-6 h-6 invert"
								src={close}
								alt="close"
							/>
						</div>
					</div>
				</div>
				<div className="h-[380px] text-black p-4 overflow-y-auto mb-10">
					<Chat text="Hey, What can I do for you?" time={Date.now()} index={0} />
					<PreDefinedOptions handleSelectedOption={handleSelectedOption} />
					{selectedOption && <Chat text={selectedOption} time={Date.now()} index={1} />}
					{selectedOption && <Chat img={loadingImg} time={Date.now()} index={2} />}
				</div>
				<div className="absolute bottom-[-40px] w-[100%] rounded-b-lg shadow-top flex items-center">
					<form className="w-[100%]" onSubmit={handleSubmit}>
						<input
							required
							value={text}
							onChange={(e) => setText(e.target.value)}
							name="text"
							placeholder="Ask Neb anything..."
							type="text"
							className="w-[100%] p-4 text-black focus:border-none focus:outline-none rounded-b-lg"
						/>
					</form>
				</div>
			</div>
		</div>
	);
}

ChatBox.propTypes = {
	closeChat: PropTypes.func,
};
