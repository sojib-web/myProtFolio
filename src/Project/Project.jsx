/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { DarkModeContext } from "../context/DarkModeContext";

import projects from "../data/projects.json";

const Project = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className={`py-20 px-4 transition-colors duration-300 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }`}
    >
      {/* Section Title */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase relative z-10">
          My <span className="text-red-500">Projects</span>
        </h2>
        <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>

        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-extrabold opacity-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1 }}
          >
            PROJECTS
          </span>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Project;
