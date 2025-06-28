import React from "react";
import { Download } from "lucide-react";
import Skills from "./Skills";
import ExperienceEducation from "./ExperienceEducation";
import { FaDownload, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import CountUp from "react-countup";
const About = () => {
  return (
    <section className="text-white bg-[#0f0f0f] py-16 px-6 md:px-12">
      {/* Heading */}

      <div className="relative text-center mb-16">
        <h2 className="text-4xl font-extrabold uppercase relative z-10">
          ABOUT <span className="text-red-500">ME</span>
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[100px] md:text-[140px] font-extrabold text-gray-800 opacity-10 select-none pointer-events-none">
            ABOUT
          </span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Personal Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">PERSONAL INFOS</h2>
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <p>
              <span className="font-bold">First Name:</span> Md Sojib Ali
            </p>

            <p>
              <span className="font-bold">Age:</span> 25 Years
            </p>
            <p>
              <span className="font-bold">Nationality:</span> Bangladeshi
            </p>

            <p>
              <span className="font-bold">Address:</span>{" "}
              <a
                href="https://www.google.com/maps/place/Bheramara,+Kushtia"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Bheramara, Kushtia
              </a>
            </p>

            <p>
              <span className="font-bold">Phone:</span>{" "}
              <a href="tel:01743191397" className="">
                01743191397
              </a>
            </p>

            <p>
              <span className="font-bold">Email:</span>{" "}
              <a href="mailto:alisojib295@gmail.com" className="">
                alisojib295@gmail.com
              </a>
            </p>

            <p>
              <span className="font-bold">GitHub:</span>{" "}
              <a
                href="https://github.com/sojib-web"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                github.com
              </a>
            </p>

            <p>
              <span className="font-bold">Languages:</span> Bengali, English
            </p>
          </div>

          <div className="mt-10">
            <a
              href="/Sojib-Ali-CV.pdf"
              download
              className="relative group flex items-center justify-between w-56 h-12 px-6 py-3 rounded-full border border-red-400 text-white font-semibold overflow-hidden"
            >
              <span className="z-10">DOWNLOAD CV</span>
              <span className="absolute right-0 top-0 h-full aspect-square bg-red-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                <FaDownload className="text-white" />
              </span>
            </a>
          </div>
        </div>

        {/* Stats Section */}

        <div className="grid grid-cols-2 gap-6">
          {[
            { number: 1, suffix: "+", label: "YEARS OF EXPERIENCE" },
            { number: 10, suffix: "+", label: "COMPLETED PROJECTS" },
            { number: 5, suffix: "+", label: "CLIENTS SERVED" },
            { number: 3, suffix: "+", label: "TEAM PROJECTS" },
          ].map((stat, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-lg p-6 flex flex-col items-start hover:shadow-lg transition-shadow"
            >
              <h3 className="text-4xl text-red-500 font-bold">
                <CountUp end={stat.number} duration={2} />
                {stat.suffix}
              </h3>
              <span className="text-sm mt-2 text-gray-400 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Skills />
      <ExperienceEducation />
    </section>
  );
};

export default About;
