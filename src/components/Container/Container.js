import React from "react";
import { useSelector } from "react-redux";
import { useAppContext } from "../../context/AppContext";
import { getIsOpenClientSelector } from "../../store/clientSlice";
import { getIsOpenProductSelector } from "../../store/productSlice";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";

const defaultContainerClasses =
  "z-0 transform duration-200 lg:flex-grow pt-20 ";

function Container({ children }) {
  const { showNavbar, escapeOverflow } = useAppContext();
  const isOpenClientSelector = useSelector(getIsOpenClientSelector);
  const isOpenProductSelector = useSelector(getIsOpenProductSelector);

  return (
    <div
      className={
        "relative min-h-screen lg:flex " +
        (escapeOverflow ? "" : "  app-wraper ") +
        (isOpenClientSelector || isOpenProductSelector
          ? " fixed-body-scroll"
          : "")
      }
    >
      <Navbar />
      <Sidebar />
      <div
        className={
          showNavbar
            ? defaultContainerClasses + " pl-72 ease-in"
            : defaultContainerClasses + " "
        }
      >
        <div
          className={
            "container mx-auto " +
            (showNavbar
              ? "scale-50 origin-top ease-in sm:origin-center sm:scale-100"
              : "")
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Container;
