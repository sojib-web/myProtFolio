/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import image from "../assets/gardening-community-client.web.app.png";
import { DarkModeContext } from "../context/DarkModeContext";

// Project Data Array
const projects = [
  {
    title: "Gardening Community",
    des: "A vibrant social platform for gardening enthusiasts to share tips, connect with others, and explore new ideas.",
    codeLink: "https://github.com/sojib-web",
    liveLink: "https://gardening-community-client.web.app/",
    image: image,
  },
  {
    title: "Mobile UI",
    des: "Cross-platform mobile design with a clean and intuitive interface.",
    codeLink: "https://github.com/sojib-web/mobile-ui",
    liveLink: "https://mobile-ui-sojib.netlify.app",
    image: "https://i.imgur.com/8Q6Qq5B.jpg",
  },
  {
    title: "SEO Tools",
    des: "Optimized SEO toolset built using React and Node.js.",
    codeLink: "https://github.com/sojib-web/seo-tools",
    liveLink: "https://seo-tools-sojib.netlify.app",
    image: "https://i.imgur.com/8Q6Qq5B.jpg",
  },
  {
    title: "E-commerce UI",
    des: "Stylish shopping UI with cart and wishlist functionality.",
    codeLink: "https://github.com/sojib-web/ecommerce-ui",
    liveLink: "https://ecom-ui-sojib.web.app",
    image: "https://i.imgur.com/8Q6Qq5B.jpg",
  },
  {
    title: "Fitness Tracker",
    des: "Track workouts, calories, and progress with dynamic charts.",
    codeLink: "https://github.com/sojib-web/fitness-tracker",
    liveLink: "https://fitness-sojib.netlify.app",
    image: "https://i.imgur.com/8Q6Qq5B.jpg",
  },
  {
    title: "Marketing Site",
    des: "Landing page for SEO and digital marketing campaigns.",
    codeLink: "https://github.com/sojib-web/marketing-site",
    liveLink: "https://marketing-sojib.netlify.app",
    image: "https://i.imgur.com/8Q6Qq5B.jpg",
  },
];

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
        <div className="relative text-center mb-16">
          <h2 className="text-4xl font-extrabold uppercase relative z-10">
            My <span className="text-red-500">Projects</span>
          </h2>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[100px] md:text-[140px] font-extrabold opacity-10 select-none pointer-events-none">
              PROJECT
            </span>
          </div>
        </div>
        <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`text-[100px] md:text-[140px] font-extrabold opacity-10 select-none pointer-events-none ${
              darkMode ? "text-gray-800" : "text-gray-300"
            }`}
          >
            PROJECT
          </span>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Project;
