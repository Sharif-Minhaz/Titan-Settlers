import PropTypes from "prop-types";

export default function Attributes({ data, title }) {
	return (
		<section>
			<h1 className="text-center font-inter text-white text-[38px] font-semibold uppercase tracking-widest mb-3">
				{title}
			</h1>
			<div className="grid grid-cols-5">
				{data.map((item) => (
					<div key={item._id}>
						<h2 className="text-center uppercase font-roboto text-white/75 text-[19px] font-medium tracking-widest">
							{item.heading}
						</h2>
						<div className="text-center font-roboto text-white text-[18px] font-medium">
							{item.value}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

Attributes.propTypes = {
	data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};
