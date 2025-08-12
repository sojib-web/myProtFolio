import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { DarkModeContext } from "../context/DarkModeContext";

const RootLayout = () => {
  const location = useLocation();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`flex min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }`}
    >
      {/* Fixed Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-20 transition-colors duration-300 ${
          darkMode ? "bg-[#0f0f0f]" : "bg-white"
        }`}
      >
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-20 overflow-y-auto transition-colors duration-300">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RootLayout;
