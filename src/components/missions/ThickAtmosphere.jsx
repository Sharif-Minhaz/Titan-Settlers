import cloud1 from "../../assets/images/green-clouds/1.png";
import cloud2 from "../../assets/images/green-clouds/2.png";
import cloud3 from "../../assets/images/green-clouds/3.png";
import cloud4 from "../../assets/images/green-clouds/4.png";
import cloud5 from "../../assets/images/green-clouds/5.png";
import cloud6 from "../../assets/images/green-clouds/6.png";
import cloud7 from "../../assets/images/green-clouds/7.png";
import cloud8 from "../../assets/images/green-clouds/8.png";
import cloud9 from "../../assets/images/green-clouds/9.png";
import cloud10 from "../../assets/images/green-clouds/10.png";
import { motion } from 'framer-motion';

export default function ThickAtmosphere() {
	return (
		<div>
			<div className="absolute left-0 bottom-0">
				<motion.img
					initial={{ x: 0, y: 0 }}
					animate={{ x: [-15, 0, -15], y: [-5, 0, -5] }}
					transition={{ duration: 2, repeat: Infinity }}
					src={cloud1}
					alt="cloud"
				/>
			</div>
			<div className="absolute z-10 right-10 -bottom-6">
				<motion.img
					initial={{ x: 0, y: 0 }}
					animate={{ x: [-150, 0, -150], y: [-5, 0, -5] }}
					transition={{ duration: 10, repeat: Infinity }}
					src={cloud2}
					alt="cloud"
				/>
			</div>
			<div className="absolute z-10 right-0 bottom-0">
				<motion.img
					initial={{ y: 0 }}
					animate={{ y: [-0, -10, 0] }}
					transition={{ duration: 4, repeat: Infinity }}
					src={cloud3}
					alt="cloud"
				/>
			</div>
			<div className="absolute bottom-0">
				<motion.img
					initial={{ x: 0, y: 0 }}
					animate={{ x: 0, y: 0 }}
					transition={{ duration: 2, repeat: Infinity }}
					src={cloud4}
					alt="cloud"
				/>
			</div>
			<div className="absolute bottom-0">
				<motion.img
					initial={{ x: 0, y: 0 }}
					animate={{ x: 0, y: 0 }}
					transition={{ duration: 2, repeat: Infinity }}
					src={cloud5}
					alt="cloud"
				/>
			</div>
			<div className="absolute z-10 bottom-10">
				<motion.img
					initial={{ x: 0, y: 0 }}
					animate={{ x: 0, y: 0 }}
					transition={{ duration: 2, repeat: Infinity }}
					src={cloud6}
					alt="cloud"
				/>
			</div>
			<div className="absolute z-20 left-[20%] bottom-0">
				<motion.img
					initial={{ x: 0, y: 0 }}
					animate={{ x: 0, y: 0 }}
					transition={{ duration: 2, repeat: Infinity }}
					src={cloud7}
					alt="cloud"
				/>
			</div>
			<div className="absolute right-0 bottom-0">
				<motion.img
					initial={{ x: 0, y: 0 }}
					animate={{ x: 0, y: 0 }}
					transition={{ duration: 2, repeat: Infinity }}
					src={cloud8}
					alt="cloud"
				/>
			</div>
			<div className="absolute bottom-3 right-0">
				<motion.img
					initial={{ x: 0, y: 0 }}
					animate={{ x: 0, y: 0 }}
					transition={{ duration: 2, repeat: Infinity }}
					src={cloud9}
					alt="cloud"
				/>
			</div>
			<div className="absolute left-0 bottom-0">
				<motion.img
					initial={{ x: 0, y: 0 }}
					animate={{ x: 0, y: 0 }}
					transition={{ duration: 2, repeat: Infinity }}
					src={cloud10}
					alt="cloud"
				/>
			</div>
		</div>
	);
}
