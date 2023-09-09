import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MissionStatusContextProvider } from "./contexts/MissionStatusContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<MissionStatusContextProvider>
				<App />
			</MissionStatusContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
