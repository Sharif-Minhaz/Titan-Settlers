import PropTypes from "prop-types";
import { motion } from "framer-motion";
import atmParticle from "../../assets/images/atmos-particle.png";

export default function AtmParticles({ particles, particleRefs }) {
	return (
		<>
			{particles.map((particle, index) => (
				<motion.div
					ref={particleRefs[index]}
					key={particle._id}
					className={`absolute ${particle.className}`}
				>
					<img className="w-full" src={atmParticle} alt="thick atmosphere particles" />
				</motion.div>
			))}
		</>
	);
}

AtmParticles.propTypes = {
	particles: PropTypes.array,
	particleRefs: PropTypes.any,
};
