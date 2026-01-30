import React from "react";
import { motion } from "framer-motion";

const AnimateWrapper = ({ children }: { children: React.ReactNode }) => {
  const pageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;
