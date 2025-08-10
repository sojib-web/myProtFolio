/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Skills from "./Skills";
import ExperienceEducation from "./ExperienceEducation";
import { FaDownload } from "react-icons/fa";
import CountUp from "react-countup";
import { DarkModeContext } from "../context/DarkModeContext";
import { motion } from "framer-motion";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }} // Animate in from below
      animate={{ opacity: 1, y: 0 }} // To normal position
      exit={{ opacity: 0, y: -30 }} // Animate out to top
      transition={{ duration: 0.5 }} // Duration of animation
      className={`py-16 px-6 md:px-12 transition-colors duration-300 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }`}
    >
      {/* === Your entire existing JSX goes here unchanged === */}
      {/* Heading */}
      {/* Grid Layout with Personal Info + Stats */}
      {/* Skills and ExperienceEducation Sections */}
      {/* ... */}
      {/* <Skills /> */}
      <ExperienceEducation />
    </motion.section>
  );
};

export default About;
