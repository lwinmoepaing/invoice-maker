import React from "react";
import { useAppContext } from "../../context/AppContext";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";

function Container({ children }) {
  const { showNavbar } = useAppContext();

  return (
    <div className="relative min-h-screen lg:flex">
      <Sidebar />
      <div className="relative z-0 lg:flex-grow">
        <Navbar />
        <div> showNavbar : {showNavbar.toString()} </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Container;
