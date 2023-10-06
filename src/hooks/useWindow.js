import { useState, useEffect } from "react";

export function useWindow(width) {
	const [isWidthMatch, setIsWidthMatch] = useState(window.innerWidth <= width);
	console.log("widow:", window.innerWidth, "width:", width, "Res: ", window.innerWidth <= width, isWidthMatch)

	useEffect(() => {
		const handleResize = () => {
			setIsWidthMatch(window.innerWidth <= width);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [width]);

	return isWidthMatch;
}
