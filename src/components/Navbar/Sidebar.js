import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useSelector } from "react-redux";
import HomeIcon from "../Icons/HomeIcon";
import ProductIcon from "../Icons/ProductIcon";
import InvoiceIcon from "../Icons/InvoiceIcon";
import ClientPlusIcon from "../Icons/ClientPlusIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import SecurityIcon from "../Icons/SecurityIcon";
import InvoiceNavbarLoading from "../Loading/InvoiceNavbarLoading";
import { getCompanyData } from "../../store/companySlice";

const NAV_DATA = [
  {
    title: "Dashboard",
    link: "/",
    Icon: HomeIcon,
  },
  {
    title: "Invoices",
    link: "invoices",
    Icon: InvoiceIcon,
  },
  {
    title: "Clients",
    link: "clients",
    Icon: ClientPlusIcon,
  },
  {
    title: "Products",
    link: "products",
    Icon: ProductIcon,
  },
];

const navDefaultClasses =
  "fixed inset-0 duration-200 transform lg:opacity-100 z-10 w-72 bg-white h-screen p-3";

const navItemDefaultClasses =
  "block px-4 py-2 rounded-md flex bg-transparent flex-1";

function Sidebar() {
  const { showNavbar } = useAppContext();
  const { pathname } = useLocation();
  const company = useSelector(getCompanyData);

  const isTermAndConditionRoute = useMemo(
    () => pathname === "/terms-and-condition",
    [pathname]
  );

  return (
    <>
      <nav
        className={
          showNavbar
            ? navDefaultClasses + " translate-x-0 ease-in"
            : navDefaultClasses + " -translate-x-full ease-out"
        }
      >
        <div className="flex justify-between">
          <motion.span
            className="font-bold font-title text-2xl sm:text-2xl p-2 flex justify-center items-center"
            initial={{
              translateX: -300,
            }}
            animate={{
              translateX: showNavbar ? -40 : -300,
              color: "#0066FF",
            }}
            transition={{
              type: "spring",
              damping: 18,
            }}
          >
            <span className="nav-loading">
              <InvoiceNavbarLoading loop />
            </span>
            Invoice Maker
          </motion.span>
        </div>

        <ul className="mt-8">
          {NAV_DATA.map(({ title, link, Icon }) => (
            <li key={title} className="mb-2">
              <NavLink to={link} className={" rounded-md side-link"}>
                {({ isActive }) => (
                  <motion.span
                    key={`${title}_nav_item`}
                    className={
                      isActive
                        ? navItemDefaultClasses + " primary-self-text "
                        : navItemDefaultClasses + " text-default-color "
                    }
                    whileHover={{
                      color: "rgb(0, 102, 255)",
                      backgroundColor: "rgba(0, 102, 255, 0.1)",
                      translateX: isActive ? 0 : 4,
                      transition: {
                        backgroundColor: {
                          type: "spring",
                          damping: 18,
                        },
                      },
                    }}
                    whileTap={{ scale: isActive ? 1 : 0.9 }}
                  >
                    <Icon className="h-6 w-6 mr-4" />
                    {title}
                  </motion.span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <hr />

        <div className="my-4">
          <NavLink to={"terms-and-condition"}>
            <motion.span
              className="block px-4 py-2 rounded-md flex text-default-color"
              style={{
                color: isTermAndConditionRoute ? "rgb(14 136 14)" : "#777",
              }}
              whileHover={{
                scale: [1.03, 1, 1.03, 1, 1.03, 1, 1.03, 1],
                color: "rgb(14 136 14)",
                textShadow: "0px 0px 3px #85FF66",
                transition: {
                  backgroundColor: {
                    type: "spring",
                    damping: 18,
                  },
                },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <SecurityIcon className="h-6 w-6 mr-4" />
              Terms And Condition
            </motion.span>
          </NavLink>
        </div>

        <hr />

        <div className="mt-4">
          <motion.a
            href={"#!"}
            className="block px-4 py-2 rounded-md flex"
            initial={{
              color: "#EC7474",
              backgroundColor: "#FFEEEE",
            }}
            whileHover={{
              translateX: 6,
              color: "#777",
              backgroundColor: "#dfdfdf",
              transition: {
                backgroundColor: {
                  type: "spring",
                  damping: 18,
                },
              },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <DeleteIcon className="h-6 w-6 mr-4" />
            Clear Data
          </motion.a>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
