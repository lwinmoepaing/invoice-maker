import React, { useMemo } from "react";
import { motion } from "framer-motion";

function Button(props) {
  const {
    children,
    size = "",
    block = false,
    outlined = false,
    secondary = false,
    success = false,
    danger = false,
  } = props;

  const buttonClasses = useMemo(() => {
    let defaultClasses =
      "rounded-xl font-title text-white flex flex-row items-center justify-center";

    if (block) {
      defaultClasses += " block w-full ";
    }

    if (size === "sm") {
      defaultClasses += " text-sm h-8 px-2 ";
    } else {
      defaultClasses += " h-12 px-4 ";
    }

    if (outlined) {
      if (secondary) {
        defaultClasses += " border-gray-400 border text-gray-600";
      } else if (success) {
        defaultClasses += " border-green-600 border text-green-500";
      } else if (danger) {
        defaultClasses += " border-red-500 border text-red-500";
      } else defaultClasses += " primary-self-text border-blue-400 border ";
    } else {
      if (secondary) {
        defaultClasses += " bg-gray-400 ";
      } else if (success) {
        defaultClasses += " bg-green-600 ";
      } else if (danger) {
        defaultClasses += " bg-red-500 ";
      } else defaultClasses += " primary-background-color ";
    }

    return defaultClasses;
  }, [block, danger, outlined, secondary, size, success]);

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
