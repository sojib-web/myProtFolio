import React, { useContext } from "react";
import { NavLink } from "react-router";
import { Home, User, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { DarkModeContext } from "../context/DarkModeContext";

const navItems = [
  { to: "/", icon: <Home className="w-5 h-5" />, label: "Home" },
  { to: "/about", icon: <User className="w-5 h-5" />, label: "About" },
  { to: "/portfolio", icon: <Briefcase className="w-5 h-5" />, label: "Work" },
  { to: "/contact", icon: <Mail className="w-5 h-5" />, label: "Contact" },
];

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex h-screen w-20 flex-col items-center py-4 fixed left-0 top-0 z-50 transition-colors duration-300 ${
          darkMode ? "bg-[#0f0f0f]" : "bg-white"
        }`}
      >
        {/* Theme Toggle */}
        <div className="mb-6">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full hover:scale-110 transition-transform duration-300 ${
              darkMode ? "bg-[#2a2a2a]" : "bg-gray-200"
            }`}
          >
            {darkMode ? (
              <Sun className="text-yellow-400 w-5 h-5" />
            ) : (
              <Moon className="text-black w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation Icons */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-5">
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
              {icon}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center py-2 z-50 transition-colors duration-300 ${
          darkMode ? "bg-[#0f0f0f]" : "bg-white"
        } shadow-md`}
      >
        {navItems.map(({ to, icon, label }, index) => (
          <NavLink
            to={to}
            key={index}
            className={({ isActive }) =>
              `p-2 rounded-full transition-transform duration-300 hover:scale-110 ${
                isActive
                  ? "bg-red-500 text-white"
                  : darkMode
                  ? "bg-[#2a2a2a] text-white"
                  : "bg-gray-200 text-black"
              }`
            }
            title={label}
          >
            {icon}
          </NavLink>
        ))}

        {/* Theme Toggle for Mobile */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-transform duration-300 hover:scale-110 ${
            darkMode ? "bg-[#2a2a2a]" : "bg-gray-200"
          }`}
          title="Toggle Theme"
        >
          {darkMode ? (
            <Sun className="text-yellow-400 w-5 h-5" />
          ) : (
            <Moon className="text-black w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
