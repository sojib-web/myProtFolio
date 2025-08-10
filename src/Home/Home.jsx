import React, { useContext } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/pic.png";
import Banner from "../Banner/Banner";
import { DarkModeContext } from "../context/DarkModeContext";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }`}
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
      }}
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 px-4 sm:px-6 lg:px-8 gap-10 items-center">
        {/* Left - Image */}
        <div className="relative rounded-xl overflow-hidden">
          <div
            className={`relative m-2 rounded-xl p-2 border transition-colors duration-300 ${
              darkMode
                ? "bg-[#0f0f0f] border-gray-600"
                : "bg-white border-gray-300"
            }`}
          >
            <img
              src={profileImage}
              alt="profile"
              className="rounded-xl object-cover w-full h-auto max-h-[600px]"
            />
          </div>
        </div>

        {/* Right - Banner Text */}
        <Banner />
      </div>
    </motion.section>
  );
};

export default Home;
