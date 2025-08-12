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
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      } sm:flex-row`}
    >
      {/* মোবাইলে নিচে, বড় স্ক্রিনে বামে Navbar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 h-16 w-full border-t transition-colors duration-300
        ${
          darkMode ? "bg-[#0f0f0f] border-gray-700" : "bg-white border-gray-200"
        }
        sm:static sm:h-full sm:w-20 sm:border-t-0 sm:border-r`}
      >
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-0 pb-16 sm:pt-0 sm:pb-0 sm:ml-20 overflow-y-auto transition-colors duration-300">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RootLayout;
