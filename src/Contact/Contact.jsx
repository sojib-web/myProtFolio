// @ts-nocheck
import React, { useRef } from "react";
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

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y6r8fi8", // ✅ তোমার Service ID
        "template_s4qv35q", // ✅ তোমার Template ID
        form.current,
        "bQ8DDe-Ak0NI9vpCl" // ✅ তোমার Public Key
      )
      .then(
        (result) => {
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
    <section className="text-white py-20 px-4">
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="relative text-center mb-16">
          <h2 className="text-4xl font-extrabold uppercase relative z-10">
            GET IN <span className="text-red-500">TOUCH</span>
          </h2>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[100px] md:text-[140px] font-extrabold text-gray-800 opacity-10 select-none pointer-events-none">
              CONTACT
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">DON'T BE SHY!</h3>
            <p className="text-gray-400">
              Feel free to reach out. I'm always open to discussing new projects
              or collaborations.
            </p>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-white">ADDRESS POINT</p>
                <p className="text-gray-300">
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

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-red-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-white">MAIL ME</p>
                <a
                  href="mailto:alisojib295@gmail.com"
                  className="text-gray-300 hover:underline"
                >
                  alisojib295@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-red-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-white">CALL / WHATSAPP</p>
                <a
                  href="https://wa.me/8801743191397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  01743191397
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/sojib.ahmed.71271466"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e1e1e] p-2 rounded-full hover:text-red-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/sojib-ali-6538a91a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e1e1e] p-2 rounded-full hover:text-red-500 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/sojib-web"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e1e1e] p-2 rounded-full hover:text-red-500 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="bg-[#1e1e1e] px-4 py-3 rounded-full text-sm text-white placeholder-gray-500 outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="bg-[#1e1e1e] px-4 py-3 rounded-full text-sm text-white placeholder-gray-500 outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              className="bg-[#1e1e1e] w-full px-4 py-3 rounded-full text-sm text-white placeholder-gray-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="bg-[#1e1e1e] w-full px-4 py-3 rounded-2xl text-sm text-white placeholder-gray-500 outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="relative group flex items-center justify-between w-56 h-12 px-6 py-3 rounded-full border border-red-500 text-white font-semibold overflow-hidden hover:shadow-[0_0_10px_#ef4444] transition-all duration-300"
            >
              <span className="z-10">SEND MESSAGE</span>
              <span className="absolute right-0 top-0 h-full aspect-square bg-red-500 rounded-full flex items-center justify-center group-hover:scale-105">
                <FaPaperPlane className="text-white" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
