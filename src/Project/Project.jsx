/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import image from "../assets/gardening-community-client.web.app.png";
import { DarkModeContext } from "../context/DarkModeContext";

// Project Data Array with id added
const projects = [
  {
    id: 0,
    title: "Gardening Community",
    des: "An engaging social platform designed to help gardening lovers share tips, collaborate on projects, and inspire each other with innovative gardening ideas.",
    codeLink: "https://github.com/sojib-web",
    liveLink: "https://gardening-community-client.web.app/",
    image: image,
  },
  {
    id: 1,
    title: "Service Review System",
    des: "A responsive web application to add, view, and manage service reviews with secure authentication and user-friendly interface.",
    codeLink: "https://github.com/sojib-web/reaheck-assignment-11",
    liveLink: "https://service-review-system-a221e.web.app/",
    image: "https://i.ibb.co/qMPL09py/service-review-system-a221e-web-app.png",
  },
  {
    id: 2,
    title: "LoveKnot Matchmaking",
    des: "A user-friendly matchmaking service that helps people find compatible partners through detailed profiles, smart filters, and secure communication, developed using React and Node.js.",
    codeLink:
      "https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-sojib-web",
    liveLink: "https://loveknot-f6d02.web.app/",
    image: "https://i.ibb.co/MxRd3QB8/loveknot-f6d02-web-app-biodatas.png",
  },
  {
    id: 3,
    title: "E-commerce UI",
    des: "Stylish shopping UI with cart and wishlist functionality.",
    codeLink: "https://github.com/sojib-web/ecommerce-ui",
    liveLink: "https://ecom-ui-sojib.web.app",
    image: "https://i.ibb.co/FqVYZbbh/image.png",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    des: "Track workouts, calories, and progress with dynamic charts.",
    codeLink: "https://github.com/sojib-web/fitness-tracker",
    liveLink: "https://fitness-sojib.netlify.app",
    image: "https://i.ibb.co/FqVYZbbh/image.png",
  },
  {
    id: 5,
    title: "Marketing Site",
    des: "Landing page for SEO and digital marketing campaigns.",
    codeLink: "https://github.com/sojib-web/marketing-site",
    liveLink: "https://marketing-sojib.netlify.app",
    image: "https://i.ibb.co/FqVYZbbh/image.png",
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
        <h2 className="text-4xl font-extrabold uppercase relative z-10">
          My <span className="text-red-500">Projects</span>
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[100px] md:text-[140px] font-extrabold opacity-10 select-none pointer-events-none">
            PROJECT
          </span>
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
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Project;
