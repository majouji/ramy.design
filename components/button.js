import { motion } from "framer-motion";
import Link from "next/link";

/*
const Card = () => (
  <>
  <motion.div
    className="myExample" 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
  </motion.div>
)
*/

/*
export default function Button({ label }) {
  return (
    <div className="card-content-container">
    <motion.div
      className="myExample"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      >
        <span>{label}</span>
      </motion.div>
  </div>
  )
}
*/

export default function Button({ label, url }) {
  return (
    <Link href={url}>
      <a>
        <motion.button
          className="button-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <span className="button-label">{label}</span>
        </motion.button>
      </a>
    </Link>
  );
}