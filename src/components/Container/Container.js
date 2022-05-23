import React from "react";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";

const defaultContainerClasses =
  "relative z-0 transform duration-200 lg:flex-grow";

function Container({ children }) {
  const { showNavbar } = useAppContext();

  return (
    <div className="relative  min-h-screen lg:flex app-wraper">
      <Sidebar />
      <div
        className={
          showNavbar
            ? defaultContainerClasses + " pl-80 ease-in"
            : defaultContainerClasses
        }
      >
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Container;
