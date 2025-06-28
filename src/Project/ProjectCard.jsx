import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ image, title, des, codeLink, liveLink }) => {
  return (
    <div className="bg-[#1e1e1e] p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-500 group">
      <div className="overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <h3 className="text-white font-semibold text-sm uppercase">{title}</h3>
        <div className="flex gap-3">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center hover:text-pink-500 transition"
            >
              <FaGithub />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center hover:text-pink-500 transition"
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-300 text-sm mt-3">{des}</p>
    </div>
  );
};

export default ProjectCard;
