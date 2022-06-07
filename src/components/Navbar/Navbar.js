import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import InvoiceNavbarLoading from "../Loading/InvoiceNavbarLoading";

function Navbar() {
  const { toggleNavbar, showNavbar } = useAppContext();

  const classes = useMemo(() => {
    const defaultClasses =
      "bg-white flex items-center pr-3 z-12 fixed w-full z-10 border-b border-slate-50 transition-all";

    if (!showNavbar) {
      return defaultClasses + " pl-3 ";
    }
    return defaultClasses + " pl-72 ";
  }, [showNavbar]);

  return (
    <header className={classes}>
      <motion.button
        className="p-2 focus:outline-none rounded-md"
        onClick={toggleNavbar}
        initial={{
          translateX: 0,
        }}
        animate={{
          color: showNavbar ? "#777" : "#0066FF",
          rotate: showNavbar ? "360deg" : "0deg",
        }}
        transition={{
          type: "spring",
          damping: 25,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={showNavbar ? "M15 19l-7-7 7-7" : "M4 6h16M4 12h16M4 18h7"}
          />
        </svg>
      </motion.button>
      <div
        className="block flex-1 text-2xl sm:text-3xl font-bold p-4 relative justify-center items-center"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        {showNavbar && <>&nbsp;</>}
        {!showNavbar && (
          <motion.div
            className=" relative font-bold font-title text-2xl px-2 flex flex-row justify-center items-center"
            initial={{
              translateX: "10vw",
              opacity: 0.8,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
              color: "#0066FF",
            }}
            transition={{
              type: "spring",
              damping: 20,
            }}
          >
            Invoice Maker
            <InvoiceNavbarLoading
              loop
              className="nav-loading-right "
            />
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
