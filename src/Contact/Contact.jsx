// @ts-nocheck
import React, { useContext, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeContext } from "../context/DarkModeContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y6r8fi8",
        "template_s4qv35q",
        form.current,
        "bQ8DDe-Ak0NI9vpCl"
      )
      .then(
        () => {
          toast.success("🎉 Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-gray-900"
      }`}
    >
      <ToastContainer
        position="top-center"
        theme={darkMode ? "dark" : "light"}
        autoClose={3000}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="relative text-center mb-16">
          <h2 className="text-4xl font-extrabold uppercase relative z-10">
            GET IN <span className="text-red-500">TOUCH</span>
          </h2>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[100px] md:text-[140px] font-extrabold opacity-10 select-none pointer-events-none">
              CONTACT
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative z-10 mt-40">
          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">DON'T BE SHY!</h3>
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-600"
              } max-w-md`}
            >
              Feel free to reach out. I'm always open to discussing new projects
              or collaborations.
            </p>

            {/* Address */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold">ADDRESS POINT</p>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  <a
                    href="https://www.google.com/maps/place/Bheramara,+Kushtia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Bheramara, Kushtia, Bangladesh
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-red-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold">MAIL ME</p>
                <a
                  href="mailto:alisojib295@gmail.com"
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } hover:underline`}
                >
                  alisojib295@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhone className="text-red-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold">CALL / WHATSAPP</p>
                <a
                  href="https://wa.me/8801743191397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } hover:underline`}
                >
                  01743191397
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-4">
              {[
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/sojib.ahmed.71271466",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/sojib-ali-6538a91a5/",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/sojib-web",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition ${
                    darkMode
                      ? "bg-[#1e1e1e] text-white hover:text-red-500"
                      : "bg-gray-100 text-black hover:text-red-500"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className={`px-4 py-3 rounded-full text-sm outline-none ${
                  darkMode
                    ? "bg-[#1e1e1e] text-white placeholder-gray-500"
                    : "bg-gray-100 text-black placeholder-gray-500"
                }`}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className={`px-4 py-3 rounded-full text-sm outline-none ${
                  darkMode
                    ? "bg-[#1e1e1e] text-white placeholder-gray-500"
                    : "bg-gray-100 text-black placeholder-gray-500"
                }`}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              className={`w-full px-4 py-3 rounded-full text-sm outline-none ${
                darkMode
                  ? "bg-[#1e1e1e] text-white placeholder-gray-500"
                  : "bg-gray-100 text-black placeholder-gray-500"
              }`}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className={`w-full px-4 py-3 rounded-2xl text-sm outline-none resize-none ${
                darkMode
                  ? "bg-[#1e1e1e] text-white placeholder-gray-500"
                  : "bg-gray-100 text-black placeholder-gray-500"
              }`}
            ></textarea>

            <button
              type="submit"
              className={`relative group flex items-center justify-between w-56 h-12 px-6 py-3 rounded-full border font-semibold overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "border-red-500 text-white hover:shadow-[0_0_10px_#ef4444]"
                  : "border-red-500 text-black hover:text-white hover:shadow-[0_0_10px_#ef4444]"
              }`}
            >
              <span className="z-10">SEND MESSAGE</span>
              <span
                className={`absolute right-0 top-0 h-full aspect-square bg-red-500 rounded-full flex items-center justify-center group-hover:scale-105`}
              >
                <FaPaperPlane className="text-white" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
