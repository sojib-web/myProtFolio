// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkModeContext } from "../context/DarkModeContext";

const skills = {
  Frontend: [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 85 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 75 },
    { name: "Tailwind CSS", value: 85 },
    { name: "DaisyUI", value: 80 },
    { name: "Next.js", value: 70 },
    { name: "WordPress", value: 85 },
  ],
  "Tools & Platforms": [
    { name: "Firebase", value: 70 },
    { name: "MongoDB", value: 65 },
    { name: "Git & GitHub", value: 75 },
  ],
  Design: [
    { name: "Figma (UI/UX)", value: 70 },
    { name: "pixso", value: 60 },
  ],
};

const AnimatedRadial = ({ target, darkMode }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let value = 0;
    const speed = 15;
    const animate = () => {
      if (value < target) {
        value += 1;
        setProgress(value);
        setTimeout(animate, speed);
      } else {
        setProgress(target);
      }
    };
    animate();
  }, [target]);

  return (
    <div className="relative w-24 h-24">
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          className={darkMode ? "text-gray-800" : "text-gray-300"}
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="48"
          cy="48"
        />
        <circle
          className="text-red-500"
          strokeWidth="6"
          strokeDasharray={251.2}
          strokeDashoffset={251.2 - (251.2 * progress) / 100}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="48"
          cy="48"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-bold text-sm ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className={`py-16 px-6 md:px-12 relative bg-no-repeat bg-cover bg-center transition-colors duration-300 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }`}
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
      }}
    >
      {/* Heading */}

      <div className="relative text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase relative z-10">
          My <span className="text-red-500">Skills</span>
        </h2>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          {/* Responsive background text with clamp for smooth scaling */}
          <span
            className="font-extrabold opacity-10"
            style={{ fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: 1 }}
          >
            SKILLS
          </span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="space-y-16 max-w-7xl mx-auto">
        {Object.entries(skills).map(([category, skillList], i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
              darkMode
                ? "bg-[#181818]/90 shadow-black/30"
                : "bg-gray-100 shadow-gray-300"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-red-500 pl-4 uppercase">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skillList.map((skill, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center rounded-xl p-4 shadow-inner hover:scale-105 transition-transform duration-300 ${
                    darkMode
                      ? "bg-[#0f0f0f] shadow-black/20"
                      : "bg-white shadow-gray-200"
                  }`}
                >
                  <AnimatedRadial target={skill.value} darkMode={darkMode} />
                  <span
                    className={`mt-4 font-semibold tracking-wide text-sm ${
                      darkMode ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
