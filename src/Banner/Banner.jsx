import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebook,
  FaLinkedin,
  FaReact,
  FaGithub, // ✅ added GitHub icon
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "React Enthusiast.", "UI Learner."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      {/* Text Section */}
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I’m <span className="text-red-500 capitalize">Sojib Ali</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorColor="#ff014f"
            cursorBlinking={false}
            cursorStyle="|"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-gray-300">
          I’m a junior front-end developer who loves turning ideas into clean,
          responsive websites. With a strong interest in React, Tailwind CSS,
          and UI design, I'm always eager to learn, improve, and collaborate on
          real-world projects.
        </p>
      </div>

      {/* Social & Skills Section */}
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        {/* Social Links */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find Me On
          </h2>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/sojib.ahmed.71271466"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-black bg-opacity-25 text-gray-200 text-2xl rounded-md flex items-center justify-center shadow-md cursor-pointer hover:bg-opacity-50 hover:text-red-500 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/sojib-web"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-black bg-opacity-25 text-gray-200 text-2xl rounded-md flex items-center justify-center shadow-md cursor-pointer hover:bg-opacity-50 hover:text-red-500 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-sojib-ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-black bg-opacity-25 text-gray-200 text-2xl rounded-md flex items-center justify-center shadow-md cursor-pointer hover:bg-opacity-50 hover:text-red-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Skills Icons */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Skills</h2>
          <div className="flex gap-6">
            <span className="w-14 h-14 bg-black bg-opacity-25 text-gray-200 text-2xl rounded-md flex items-center justify-center shadow-md cursor-pointer hover:bg-opacity-50 hover:text-red-500 transition duration-300">
              <FaReact />
            </span>
            <span className="w-14 h-14 bg-black bg-opacity-25 text-gray-200 text-2xl rounded-md flex items-center justify-center shadow-md cursor-pointer hover:bg-opacity-50 hover:text-red-500 transition duration-300">
              <RiNextjsFill />
            </span>
            <span className="w-14 h-14 bg-black bg-opacity-25 text-gray-200 text-2xl rounded-md flex items-center justify-center shadow-md cursor-pointer hover:bg-opacity-50 hover:text-red-500 transition duration-300">
              <RiTailwindCssFill />
            </span>
            <span className="w-14 h-14 bg-black bg-opacity-25 text-gray-200 text-2xl rounded-md flex items-center justify-center shadow-md cursor-pointer hover:bg-opacity-50 hover:text-red-500 transition duration-300">
              <IoLogoFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
