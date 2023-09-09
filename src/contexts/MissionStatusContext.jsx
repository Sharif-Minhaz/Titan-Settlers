import PropTypes from "prop-types";

import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const MissionStatusContext = createContext();

export const MissionStatusContextProvider = ({ children }) => {
	const { state } = useLocation();
	const [missions, setMissions] = useState({ earth: true, titan: false, launch: false });
	const [coins, setCoins] = useState(0)

	useEffect(() => {
		setMissions((prev) => ({ ...prev, ...state?.missions }));
	}, [state]);

	const addCoins = (amount) => {
		setCoins(coins + amount);
	}

	return (
		<MissionStatusContext.Provider value={{ missions, coins, addCoins }}>
			{children}
		</MissionStatusContext.Provider>
	);
};

MissionStatusContextProvider.propTypes = {
	children: PropTypes.node,
};
