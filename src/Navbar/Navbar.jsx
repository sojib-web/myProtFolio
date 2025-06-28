import React from "react";
import { NavLink } from "react-router"; // Use 'react-router-dom' not 'react-router'
import { Home, User, Briefcase, Mail, MessageCircle, Sun } from "lucide-react";

const navItems = [
  { to: "/", icon: <Home className="w-5 h-5" />, label: "Home" },
  { to: "/about", icon: <User className="w-5 h-5" />, label: "About" },
  { to: "/portfolio", icon: <Briefcase className="w-5 h-5" />, label: "Work" },
  { to: "/contact", icon: <Mail className="w-5 h-5" />, label: "Contact" },
];

const Navbar = () => {
  return (
    <div className="bg-[#0f0f0f] h-screen w-20 flex flex-col items-center py-4">
      {/* Top Theme Icon */}
      <div className="mb-6">
        <div className="bg-[#2a2a2a] p-2 rounded-full hover:scale-110 transition-transform duration-300">
          <Sun className="text-white w-5 h-5" />
        </div>
      </div>

      {/* Centered Sidebar Icons */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-5">
        {navItems.map(({ to, icon, label }, index) => (
          <NavLink
            to={to}
            key={index}
            className={({ isActive }) =>
              `bg-[#2a2a2a] p-3 rounded-full transition-transform duration-300 hover:scale-110 ${
                isActive ? "bg-red-500 text-white" : "text-white"
              }`
            }
            title={label}
          >
            {icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
