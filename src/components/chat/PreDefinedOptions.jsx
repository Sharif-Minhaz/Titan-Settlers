import PropTypes from "prop-types";

const buttonInfo = [
	"Start a live chat",
	"Create a diagram",
	"Request a video",
	"Go to support page",
];

export default function PreDefinedOptions({ handleSelectedOption }) {
	return (
		<div className={`flex gap-2.5 mb-4 float-left`}>
			<div className="inline-block bg-[#f0f4f9] p-2 rounded-md text-sm min-w-[250px]">
				What would you like to do?
				<div className="flex flex-col gap-2 mt-3">
					{buttonInfo.map((info, index) => (
						<button
							className="w-full bg-white text-left rounded px-2 py-2.5"
							key={index}
							onClick={() => handleSelectedOption(info)}
						>
							{info}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

PreDefinedOptions.propTypes = {
	index: PropTypes.number,
	text: PropTypes.string,
	handleSelectedOption: PropTypes.func,
};
