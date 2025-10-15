/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useContext } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebook,
  FaLinkedin,
  FaReact,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { DarkModeContext } from "../context/DarkModeContext";

const Banner = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "React & Next.js Enthusiast.",
      "UI Learner.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const socialLinks = [
    {
      href: "https://www.facebook.com/sojib.ahmed.71271466",
      Icon: FaFacebook,
      color: "#1877F2",
    },
    {
      href: "https://github.com/sojib-web",
      Icon: FaGithub,
      color: "#38BDF8",
    },
    {
      href: "https://www.linkedin.com/in/md-sojib-ali/",
      Icon: FaLinkedin,
      color: "#0A66C2",
    },
  ];

  const skillIcons = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: RiNextjsFill, color: "#38BDF8" },
    { Icon: RiTailwindCssFill, color: "#38BDF8" },
    { Icon: IoLogoFigma, color: "#F24E1E" },
  ];

  return (
    <div
      className={`relative w-full lgl:w-1/2 flex flex-col gap-20 z-10
        pb-20 md:pb-0
      `}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold">
          Hi, I’m <span className="text-red-500 capitalize">Sojib Ali</span>
        </h1>
        <h2 className="text-4xl font-bold">
          a <span>{text}</span>
          <Cursor
            cursorColor="#ff014f"
            cursorBlinking={false}
            cursorStyle="|"
          />
        </h2>
        <p
          className={`text-base font-bodyFont leading-6 tracking-wide ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I’m Sojib, a passionate Full Stack Developer skilled in React,
          Next.js, Node.js, Express.js, MongoDB, WordPress, and modern UI
          frameworks like Tailwind CSS & Bootstrap.
          <br />I have 2 months of professional experience at{" "}
          <a
            href="https://softexel.com/"
            className="text-red-500 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            softexel
          </a>
          , building dynamic and scalable web solutions. I love crafting clean,
          responsive, and SEO-friendly applications that deliver great user
          experiences.
        </p>

        {/* Resume Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* View Resume Button */}
          <a
            href="https://drive.google.com/file/d/1vSwTUKvkQZuTBz5Jz9Pq7WImz4wmNt3t/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group flex items-center justify-between w-56 h-12 px-6 py-3 rounded-full border font-semibold overflow-hidden transition-all duration-300 ${
              darkMode
                ? "border-red-500 text-white hover:shadow-[0_0_10px_#ef4444]"
                : "border-red-500 text-black hover:text-white hover:shadow-[0_0_10px_#ef4444]"
            }`}
          >
            <span className="z-10">View Resume</span>
            <span className="absolute right-0 top-0 h-full aspect-square bg-red-500 rounded-full flex items-center justify-center group-hover:scale-105">
              <FaPaperPlane className="text-white" />
            </span>
          </a>
        </div>
      </div>

      {/* Social & Skills Section */}
      <div className="flex flex-col xl:flex-row gap-8 lgl:gap-0 justify-between relative z-10">
        {/* Social Links */}
        <div className="mb-8 xl:mb-0">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find Me On
          </h2>
          <div className="flex gap-4">
            {socialLinks.map(({ href, Icon, color, className }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-md flex items-center justify-center shadow-md cursor-pointer transition duration-300 ${
                  darkMode ? "bg-white bg-opacity-10" : "bg-black bg-opacity-10"
                } hover:bg-opacity-30 hover:scale-110`}
                style={color ? { color } : undefined}
              >
                <Icon className={className || "text-2xl"} />
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Skills</h2>
          <div className="flex gap-6">
            {skillIcons.map(({ Icon, color, className }, index) => (
              <span
                key={index}
                className={`w-14 h-14 rounded-md flex items-center justify-center shadow-md cursor-pointer transition duration-300 ${
                  darkMode ? "bg-white bg-opacity-10" : "bg-black bg-opacity-10"
                } hover:bg-opacity-30 hover:scale-110`}
                style={color ? { color } : undefined}
              >
                <Icon className={className || "text-2xl"} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
