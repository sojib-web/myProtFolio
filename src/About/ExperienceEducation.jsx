import React, { useContext } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext";

// Experience Data
const experience = [
  {
    date: "2024 - Present",
    title: "Frontend Developer ",
    company: "Programming Hero",
    desc: "Learning advanced frontend development including React.js, Firebase, REST API integration, and modern UI/UX practices. Built multiple projects and completed assignments following industry-standard practices.",
  },
  {
    date: "2024 - Present",
    title: "Frontend Developer (Freelance)",
    company: "Self / Remote Clients",
    desc: "Developed responsive websites using HTML, CSS, Tailwind, and React. Integrated Firebase for authentication and deployed apps to Vercel and Netlify.",
  },
  {
    date: "2021 - Present",
    title: "Web Design & WordPress",
    company: "Creative IT Institute",
    desc: "Completed web design training including HTML, CSS, Bootstrap, jQuery, and WordPress theme customization. Built client-focused websites for local businesses.",
  },
];

// Education Data
const education = [
  {
    date: "2024",
    title: "B.Sc. in Computer Science & Engineering",
    company: "Daffodil International University (DIU)",
    desc: "Completed Bachelor of Science in Computer Science & Engineering. Gained strong foundational and practical knowledge in frontend development, data structures, algorithms, and web technologies.",
  },
  {
    date: "2020",
    title: "Diploma in Computer Engineering",
    company: "Gopalganj Polytechnic Institute",
    desc: "4-year diploma under Bangladesh Technical Education Board (BTEB) with a GPA of 3.59. Specialized in Computer Technology.",
  },
  {
    date: "2016",
    title: "Secondary School Certificate (SSC)",
    company: "Dharampur High School",
    desc: "Passed from Science group under Jessore Board with a GPA of 4.39.",
  },
];

const TimelineCard = ({ item, isEducation, darkMode }) => (
  <div
    className={`relative pl-12 border-l ${
      darkMode ? "border-gray-700" : "border-gray-300"
    }`}
  >
    {/* Icon */}
    <div className="absolute left-[-1.25rem] top-1 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
      {isEducation ? (
        <FaGraduationCap className="w-5 h-5 text-white" />
      ) : (
        <FaBriefcase className="w-5 h-5 text-white" />
      )}
    </div>

    <div className="mb-10">
      <span
        className={`text-xs px-2 py-1 rounded-full font-medium ${
          darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {item.date}
      </span>
      <h3
        className={`text-lg font-bold mt-2 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {item.title}{" "}
        <span
          className={`text-sm font-semibold ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          — {item.company}
        </span>
      </h3>
      <p
        className={`text-sm mt-2 ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
        {item.desc}
      </p>
    </div>
  </div>
);

const ExperienceEducation = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-12 transition-colors duration-300 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }`}
    >
      <div className="relative text-center mb-16">
        <div className="relative text-center mb-16">
          <h2 className="text-4xl font-extrabold uppercase relative z-10">
            Experience <span className="text-red-500">& Education</span>
          </h2>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[100px] md:text-[140px] font-extrabold opacity-10 select-none pointer-events-none">
              EDUCATION
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`text-[100px] md:text-[140px] font-extrabold opacity-10 select-none pointer-events-none ${
              darkMode ? "text-gray-800" : "text-gray-300"
            }`}
          >
            Education
          </span>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div>
          {experience.map((item, idx) => (
            <TimelineCard
              key={idx}
              item={item}
              isEducation={false}
              darkMode={darkMode}
            />
          ))}
        </div>
        <div>
          {education.map((item, idx) => (
            <TimelineCard
              key={idx}
              item={item}
              isEducation={true}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
