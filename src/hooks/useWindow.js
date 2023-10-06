import { useState, useEffect } from "react";

export function useWindow(width) {
	const [isWidthMatch, setIsWidthMatch] = useState(window.innerWidth <= width);

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
