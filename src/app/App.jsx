import "./App.css";
import { Toaster } from "react-hot-toast";

import Routers from "../routes/Routers";

function App() {
	return (
		<>
			<Routers />
			<Toaster
				toastOptions={{
					style: {
						background: "linear-gradient(to right, #007cf0, #00dfd8)",
						boxShadow:
							"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
						color: "#f7fafc",
					},
					position: "bottom-right",
				}}
			/>
		</>
	);
}

export default App;
