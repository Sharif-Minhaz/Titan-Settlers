import PropTypes from "prop-types";

export default function NavButton({ img, alt }) {
	return (
		<div className="flex items-center cursor-pointer">
			<img src={img} alt={alt} />
		</div>
	);
}

NavButton.propTypes = {
	img: PropTypes.string.isRequired,
	alt: PropTypes.string,
};
