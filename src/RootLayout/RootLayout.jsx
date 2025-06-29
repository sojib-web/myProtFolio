import React from "react";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Navbar from "../Navbar/Navbar";

const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 z-50 h-full w-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="ml-20 flex-1 bg-white dark:bg-[#0f0f0f] transition-colors duration-300 overflow-y-auto">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RootLayout;
