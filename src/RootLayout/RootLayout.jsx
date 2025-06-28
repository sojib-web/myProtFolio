// src/components/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0f0f0f]">
      {/* Sidebar on the right */}
      <div className="w-20 bg-[#121212] border-l border-gray-800">
        <Navbar />
      </div>

      {/* Content on the left */}
      <div className="flex-1 overflow-y-auto bg-[#121212] ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
