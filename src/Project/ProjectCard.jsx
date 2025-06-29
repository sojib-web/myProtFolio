import React, { useContext } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext";

const ProjectCard = ({ image, title, des, codeLink, liveLink }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-500 group ${
        darkMode ? "bg-[#1e1e1e]" : "bg-white"
      }`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title & Links */}
      <div className="mt-4 flex justify-between items-center">
        <h3
          className={`font-semibold text-sm uppercase ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h3>
        <div className="flex gap-3">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition ${
                darkMode
                  ? "bg-black text-white hover:text-red-400"
                  : "bg-gray-100 text-black hover:text-red-600"
              }`}
            >
              <FaGithub />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition ${
                darkMode
                  ? "bg-black text-white hover:text-red-400"
                  : "bg-gray-100 text-black hover:text-red-600"
              }`}
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        className={`text-sm mt-3 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {des}
      </p>
    </div>
  );
};

export default ProjectCard;
