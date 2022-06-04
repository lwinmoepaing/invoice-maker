import React from "react";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";

const defaultContainerClasses =
  "z-0 transform duration-200 lg:flex-grow pt-20 ";

function Container({ children }) {
  const { showNavbar } = useAppContext();

  return (
    <div className="relative min-h-screen lg:flex app-wraper">
      <Navbar />
      <Sidebar />
      <div
        className={
          showNavbar
            ? defaultContainerClasses + " pl-72 ease-in scale-90 origin-top-right sm:origin-center sm:scale-100"
            : defaultContainerClasses + " "
        }
      >
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
}

export default Container;
