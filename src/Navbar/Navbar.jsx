import React, { useContext } from "react";
import { NavLink } from "react-router";
import { Home, User, Briefcase, Mail, Sun, Moon, Code } from "lucide-react";
import { DarkModeContext } from "../context/DarkModeContext";

const navItems = [
  { to: "/", icon: <Home />, label: "Home" },
  { to: "/about", icon: <User />, label: "About" },
  { to: "/portfolio", icon: <Briefcase />, label: "Work" },
  { to: "/skills", icon: <Code />, label: "Skills" },
  { to: "/contact", icon: <Mail />, label: "Contact" },
];

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className={`hidden md:flex h-screen w-20 flex-col items-center py-6 fixed left-0 top-0 z-50 transition-colors duration-300 ${
          darkMode
            ? "bg-[#0f0f0f] shadow-lg shadow-black/70"
            : "bg-white shadow-lg shadow-gray-400/40"
        }`}
      >
        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`mb-8 p-3 rounded-full hover:scale-110 transition-transform duration-300 ${
            darkMode ? "bg-[#2a2a2a]" : "bg-gray-200"
          }`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun className="text-yellow-400 w-6 h-6" />
          ) : (
            <Moon className="text-black w-6 h-6" />
          )}
        </button>

        {/* Navigation Icons */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-6">
          {navItems.map(({ to, icon, label }, index) => (
            <NavLink
              to={to}
              key={index}
              className={({ isActive }) =>
                `p-3 rounded-full transition-transform duration-300 hover:scale-110 ${
                  isActive
                    ? "bg-red-500 text-white"
                    : darkMode
                    ? "bg-[#2a2a2a] text-white"
                    : "bg-gray-200 text-black"
                }`
              }
              title={label}
            >
              {React.cloneElement(icon, {
                className: `w-6 h-6 ${darkMode ? "text-white" : "text-black"}`,
              })}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav
        className={`md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center py-3 z-50 transition-colors duration-300 ${
          darkMode
            ? "bg-[#0f0f0f] shadow-lg shadow-black/70"
            : "bg-white shadow-lg shadow-gray-400/40"
        }`}
      >
        {navItems.map(({ to, icon, label }, index) => (
          <NavLink
            to={to}
            key={index}
            className={({ isActive }) =>
              `p-3 rounded-full transition-transform duration-300 hover:scale-110 ${
                isActive
                  ? "bg-red-500 text-white"
                  : darkMode
                  ? "bg-[#2a2a2a] text-white"
                  : "bg-gray-200 text-black"
              }`
            }
            title={label}
          >
            {React.cloneElement(icon, {
              className: `w-6 h-6 ${darkMode ? "text-white" : "text-black"}`,
            })}
          </NavLink>
        ))}

        {/* Theme Toggle for Mobile */}
        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-full transition-transform duration-300 hover:scale-110 ${
            darkMode ? "bg-[#2a2a2a]" : "bg-gray-200"
          }`}
          title="Toggle Theme"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun className="text-yellow-400 w-6 h-6" />
          ) : (
            <Moon className="text-black w-6 h-6" />
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
