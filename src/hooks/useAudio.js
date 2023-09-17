import { useEffect } from "react";
import useSound from "use-sound";

export const useAudio = (audio, option = {}) => {
	const [play, { stop }] = useSound(audio, option);

	useEffect(() => {
		return () => stop();
	}, [stop]);

	return { play, stop };
};
