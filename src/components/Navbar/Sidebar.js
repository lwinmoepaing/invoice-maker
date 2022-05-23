import React from "react";
import { useAppContext } from "../../context/AppContext";

const NAV_DATA = [
  {
    title: "home",
    link: "#!",
    Icon: <></>,
  },
  {
    title: "bhome",
    link: "#!",
    Icon: <></>,
  },
  {
    title: "chome",
    link: "#!",
    Icon: <></>,
  },
];

const navDefaultClasses =
  "absolute inset-0 duration-200 transform lg:transform-none lg:opacity-100 lg:relative z-10 w-80 text-white bg-indigo-900 h-screen p-3";

function Sidebar() {
  const { showNavbar, toggleNavbar } = useAppContext();

  return (
    <>
      <nav
        className={
          showNavbar
            ? navDefaultClasses + " translate-x-0 ease-in"
            : navDefaultClasses + " -translate-x-full ease-out "
        }
      >
        <div className="flex justify-between">
          <span className="font-bold text-2xl sm:text-3xl p-2">Sidebar</span>
          <button
            className="p-2 focus:outline-none focus:bg-indigo-800 hover:bg-indigo-800 rounded-md lg:hidden"
            onClick={toggleNavbar}
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <ul className="mt-8">
          {NAV_DATA.map((nav) => (
            <li key={nav.title}>
              <a
                href={nav.link}
                className="block px-4 py-2 hover:bg-indigo-800 rounded-md"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
