// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { DarkModeContext } from "../context/DarkModeContext";
import projects from "../data/projects.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./ProjectDetails.css";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronCircleLeft,
} from "react-icons/fa";

const ProjectDetails = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div
        className={`text-center py-20 min-h-screen ${
          darkMode ? "text-white bg-[#0f0f0f]" : "text-black bg-white"
        }`}
      >
        <h2 className="text-3xl font-bold">Project Not Found!</h2>
        <p>Invalid project ID or the project does not exist.</p>
      </div>
    );
  }

  const images = project.images || [project.image];

  const buttonClass = `relative group flex items-center justify-between w-56 h-12 px-6 py-3 rounded-full border font-semibold overflow-hidden transition-all duration-300 ${
    darkMode
      ? "border-red-500 text-white hover:shadow-[0_0_10px_#ef4444]"
      : "border-red-500 text-black hover:text-white hover:shadow-[0_0_10px_#ef4444]"
  }`;

  return (
    <>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-[#0f0f0f] text-gray-300" : "bg-white text-black"
        }`}
      >
        {/* Heading */}
        <div className="relative text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase relative z-10">
            Explore<span className="text-red-500">My Projects</span>
          </h2>
          <p
            className={`mt-4 text-lg font-medium ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Check out my portfolio and share your feedback!
          </p>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            {/* Responsive background text with clamp for smooth scaling */}
            <span
              className="font-extrabold opacity-10"
              style={{ fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: 1 }}
            >
              PROJECTS
            </span>
          </div>
        </div>

        {/* Project Details Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 transition-colors ${
            darkMode ? "bg-black text-gray-300" : "bg-white text-black"
          } rounded-lg shadow-lg`}
        >
          {/* Left content */}
          <div className="flex-1 w-full max-w-full md:max-w-xl px-2 md:px-0">
            {/* Project ID */}
            <p
              className={`text-2xl md:text-3xl leading-relaxed font-medium tracking-wide mb-4 md:mb-6 font-mono ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {project.id < 10 ? `0${project.id}` : project.id}
            </p>

            {/* Project Title */}
            <h1
              className={`text-2xl md:text-3xl leading-relaxed font-medium tracking-wide mb-4 md:mb-6 font-mono ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {project.title}
            </h1>

            {/* Project Description */}
            <p
              className={`text-sm md:text-base leading-relaxed font-medium font-bodyFont tracking-wide mb-4 md:mb-6 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {project.des}
            </p>

            {/* Tech stack with red badges */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {project.techStack?.split(", ").map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-xs sm:text-sm bg-red-500 px-3 py-1 rounded-md opacity-90 hover:opacity-100 cursor-default text-white shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-4 md:mb-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                <span className="z-10">View Details</span>
                <span className="absolute right-0 top-0 h-full aspect-square bg-red-500 rounded-full flex items-center justify-center group-hover:scale-105">
                  <FaExternalLinkAlt className="text-white" />
                </span>
              </a>

              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                <span className="z-10">GitHub</span>
                <span className="absolute right-0 top-0 h-full aspect-square bg-red-500 rounded-full flex items-center justify-center group-hover:scale-105">
                  <FaGithub className="text-white" />
                </span>
              </a>
            </div>

            {/* Back to Projects button */}
            <button
              onClick={() => navigate("/portfolio")}
              className={buttonClass}
            >
              <span className="z-10">Back to Projects</span>
              <span className="absolute right-0 top-0 h-full aspect-square bg-red-500 rounded-full flex items-center justify-center group-hover:scale-105">
                <FaChevronCircleLeft className="text-white" size={22} />
              </span>
            </button>
          </div>

          {/* Right slider */}
          <div className="flex-1 w-full max-w-full md:max-w-md rounded-2xl relative border border-red-100 px-1 md:px-0">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="custom-swiper"
              style={{ width: "100%", height: "auto" }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${project.title} - ${index + 1}`}
                    className="project-image w-full object-contain rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div className="absolute bottom-4 right-4 flex gap-3 z-10">
              <button
                className="custom-prev nav-btn p-2 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 focus:outline-none"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    stroke="currentColor"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="custom-next nav-btn p-2 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 focus:outline-none"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    stroke="currentColor"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-[#0f0f0f] bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full view"
              className="modal-image max-w-full max-h-[90vh] rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectDetails;
