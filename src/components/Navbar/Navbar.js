import React from "react";
import { useAppContext } from "../../context/AppContext";

function Navbar() {
  const { toggleNavbar } = useAppContext();
  return (
    <div>
      <header className="bg-gray-700 flex text-white items-center px-3">
        <button
          className="p-2 focus:outline-none focus:bg-gray-600 hover:bg-gray-600 rounded-md lg:hidden"
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <span className="block text-2xl sm:text-3xl font-bold text-white p-4">
          ReactJS
        </span>
      </header>
    </div>
  );
}

export default Navbar;
