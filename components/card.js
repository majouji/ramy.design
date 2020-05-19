import { motion } from "framer-motion";

const Example = () => {
  return <motion.div
    className="myExample" 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }} />;
};

export default Example