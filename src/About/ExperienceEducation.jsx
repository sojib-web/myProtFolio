import React, { useContext } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext";

// Experience Data
const experience = [
  {
    date: "2024 - Present",
    title: "Frontend Developer",
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
    className={`relative pl-14 border-l-4 sm:border-l-8 md:border-l-6 ${
      darkMode ? "border-red-600" : "border-red-400"
    } mb-10`}
  >
    {/* Icon */}
    <div className="absolute left-[-1.9rem] sm:left-[-2.3rem] md:left-[-2rem] top-0 w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
      {isEducation ? (
        <FaGraduationCap className="w-6 sm:w-7 md:w-6 h-6 sm:h-7 md:h-6 text-white" />
      ) : (
        <FaBriefcase className="w-6 sm:w-7 md:w-6 h-6 sm:h-7 md:h-6 text-white" />
      )}
    </div>

    <div>
      <span
        className={`inline-block text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-2 ${
          darkMode ? "bg-red-700 text-red-100" : "bg-red-200 text-red-800"
        }`}
      >
        {item.date}
      </span>
      <h3
        className={`text-lg sm:text-xl font-semibold mb-1 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {item.title}{" "}
        <span
          className={`text-xs sm:text-sm font-medium ${
            darkMode ? "text-red-300" : "text-red-600"
          }`}
        >
          — {item.company}
        </span>
      </h3>
      <p
        className={`text-sm sm:text-base leading-relaxed ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {item.desc}
      </p>
    </div>
  </div>
);

const Introduction = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`max-w-7xl mx-auto py-14 px-6 sm:px-10 lg:px-12 transition-colors duration-300 rounded-md shadow-lg mb-20 ${
        darkMode ? "bg-[#111111] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* <div className="relative text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase relative z-10 tracking-wide">
          My Programming <span className="text-red-500">Journey</span>
        </h2>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className={`text-[72px] sm:text-[96px] md:text-[130px] font-extrabold opacity-10 ${
              darkMode ? "text-red-900" : "text-red-200"
            }`}
          >
            Journey
          </span>
        </div>
      </div> */}

      <div className="relative text-center mb-16">
        <h2 className="text-4xl font-extrabold uppercase relative z-10">
          My Programming <span className="text-red-500">Journey</span>
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[100px] md:text-[140px] font-extrabold opacity-10 select-none pointer-events-none">
            JOURNEY
          </span>
        </div>
      </div>

      <p className="mb-6 text-base sm:text-lg leading-relaxed font-medium">
        I began my programming journey in 2016 while pursuing my diploma.
        Initially, I struggled to maintain consistency, often thinking,
        &quot;I’ll learn today, maybe tomorrow,&quot; which led to lost time.
        During the final phase of my diploma, I had the opportunity to intern in
        web development at Creative IT Institute. However, due to the COVID-19
        pandemic, I had to attend online classes from home, where I sometimes
        found it hard to stay focused and occasionally missed classes.
      </p>
      <p className="mb-6 text-base sm:text-lg leading-relaxed font-medium">
        After the situation improved, I enrolled at Daffodil International
        University. Alongside my studies, I took online courses through
        Bohubrihi, but due to lack of focus and the same &quot;I’ll learn
        tomorrow&quot; mindset, I couldn’t fully benefit from these courses.
      </p>
      <p className="mb-6 text-base sm:text-lg leading-relaxed font-medium">
        For the past seven months, I have been consistently and intensively
        learning through Programming Hero, which has significantly enhanced both
        my skills and confidence. From this experience, I’ve realized that
        success in online learning requires persistence and strong self-belief.
        I am now determined, Inshallah, to contribute meaningfully to the tech
        industry.
      </p>
      <p className="text-base sm:text-lg leading-relaxed font-medium">
        I consider myself a calm and composed person but not idle. I am
        continuously working hard with patience and focus to improve myself. My
        goal is to become a proficient programmer, work on quality projects, and
        reach my fullest potential.
      </p>
    </section>
  );
};

const ExperienceEducation = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <Introduction />
      <section
        className={`py-16 px-6 sm:px-10 lg:px-12 transition-colors duration-300 rounded-md shadow-lg max-w-7xl mx-auto ${
          darkMode ? "bg-[#111111] text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* <div className="relative text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase relative z-10 tracking-wide">
            Experience <span className="text-red-500">& Education</span>
          </h2>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span
              className={`text-[72px] sm:text-[96px] md:text-[130px] font-extrabold opacity-10 ${
                darkMode ? "text-gray-800" : "text-gray-300"
              }`}
            >
              Education
            </span>
          </div>
        </div> */}

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

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
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
    </>
  );
};

export default ExperienceEducation;
