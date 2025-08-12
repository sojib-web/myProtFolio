import React, { useContext } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext";
import { Link } from "react-router";

const ProjectCard = ({ images, title, des, codeLink, liveLink, id }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`relative  overflow-hidden rounded-2xl shadow-2xl group cursor-pointer transition-transform duration-500 hover:scale-[1.03]
      ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-white via-gray-100 to-white text-gray-900"
      }
      max-w-sm w-full mx-auto
      `}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={images}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col justify-between h-auto min-h-[220px]">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-extrabold tracking-wide uppercase drop-shadow-md line-clamp-2">
          {title}
        </h3>

        {/* Description - 2 line clamp */}
        <p className="text-xs sm:text-sm mt-2 flex-grow text-ellipsis overflow-hidden ">
          {des}
        </p>

        {/* Links & Button */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-3">
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 text-red-500 hover:text-red-400"
                    : "bg-gray-200 text-red-600 hover:text-red-700"
                }`}
                aria-label="GitHub Repository"
              >
                <FaGithub size={20} />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 text-red-500 hover:text-red-400"
                    : "bg-gray-200 text-red-600 hover:text-red-700"
                }`}
                aria-label="Live Project"
              >
                <FaGlobe size={20} />
              </a>
            )}
          </div>

          <Link
            to={`/project/${id}`}
            className={`px-5 py-2 rounded-full border-2 font-semibold transition duration-300 whitespace-nowrap ${
              darkMode
                ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            }`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
