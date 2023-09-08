import PropTypes from "prop-types";

export default function Overlay({ children }) {
	return (
		<section className="bg-black/75 fixed inset-0 h-screen flex items-center justify-center z-[60]">
			{children}
		</section>
	);
}

Overlay.propTypes = {
	children: PropTypes.node,
};
