import React, { useMemo } from "react";
import { motion } from "framer-motion";

function Button(props) {
  const { children, size = "", block = false, outlined = false } = props;

  const buttonClasses = useMemo(() => {
    let defaultClasses =
      "rounded-xl font-title text-white w-full flex items-center justify-center";

    if (block) {
      defaultClasses += " block";
    }

    if (size === "sm") {
      defaultClasses += " text-sm h-8 px-2 ";
    } else {
      defaultClasses += " h-12 px-4 ";
    }

    if (outlined) {
      defaultClasses += " primary-self-text border-blue-400 border";
    } else {
      defaultClasses += " primary-background-color ";
    }

    return defaultClasses;
  }, [block, outlined, size]);

  return (
    <motion.button
      whileHover={{
        scale: size === "sm" ? 1.02 : 1.04,
        transition: {
          type: "spring",
          damping: 15,
          duration: 0.1,
        },
      }}
      whileTap={{ scale: 0.9 }}
      type="button"
      className={buttonClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
