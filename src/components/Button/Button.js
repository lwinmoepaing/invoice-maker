import React from "react";
import { motion } from "framer-motion";

function Button(props) {
  const { children } = props;
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        transition: {
          type: "spring",
          damping: 15,
          duration: 0.1,
        },
      }}
      type="button"
      className="primary-background-color rounded-xl font-title text-white block w-full h-12 px-4 flex items-center justify-center"
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
