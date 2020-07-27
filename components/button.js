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

export function ButtonInternal({ label, url }) {
  return (
    <Link href={url}>
      <a>
        <button className="button-container">{label}</button>
      </a>
    </Link>
  );
}

export default function ButtonExternal({ label, url }) {
  return (
    <a href={url}>
      <button className="button-container">{label}</button>
    </a>
  );
}
