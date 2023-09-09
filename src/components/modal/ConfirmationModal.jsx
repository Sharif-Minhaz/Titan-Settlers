import OutsideClickHandler from "react-outside-click-handler";
import ActionButton from "../buttons/ActionButton";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import coins from "../../assets/images/coins.png";
import { useContext } from "react";
import { MissionStatusContext } from "../../contexts/MissionStatusContext";

export default function ConfirmationModal({ closeModal, handleCompleteTask }) {
	const { addCoins } = useContext(MissionStatusContext);

	const handleCompletionAction = () => {
		closeModal();
		handleCompleteTask();
		toast.success(
			() => (
				<p className="flex items-center gap-1 leading-none">
					<img src={coins} className="w-4" /> 2000 coins added to your inventory
				</p>
			),
			{
				position: "top-center",
			}
		);
		addCoins(2000);
	};

	return (
		<OutsideClickHandler onOutsideClick={closeModal}>
			<div className="flex flex-col gap-4 items-center justify-center w-[450px] h-[250px] bg-slate-400 bg-opacity-30 rounded-sm border border-slate-400 font-poppins">
				<div className="text-white text-xl font-normal text-center tracking-wide">
					Are you Complete all the parts?
				</div>
				<div className="flex gap-6">
					<ActionButton
						onClick={handleCompletionAction}
						height="h-[35px]"
						textSize="text-[15px]"
						text="Yes"
					/>
					<ActionButton
						onClick={closeModal}
						text="No"
						height="h-[35px]"
						textSize="text-[15px]"
						bg="from-red-300 via-red-500 to-red-600 hover:from-red-600 hover:to-red-300 border-red-300"
					/>
				</div>
			</div>
		</OutsideClickHandler>
	);
}

ConfirmationModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	handleCompleteTask: PropTypes.func,
};
