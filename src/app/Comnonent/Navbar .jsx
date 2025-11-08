"use client";
import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiMenu, FiX, FiUser } from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";

const Navbar = ({ cartCount = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/course" },
    // { name: "Blog", path: "/blog" },
    { name: "Freelancing", path: "/freelancing" },
    { name: "About", path: "/about" },
    { name: "Contact US", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 border-b border-blue-500/30 shadow-[0_2px_20px_rgba(59,130,246,0.15)] backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-blue-400 tracking-wide hover:text-blue-300 transition">
          TechLearning
        </Link>

        {/* Center Menu (Desktop) */}
        <div className="hidden md:flex justify-center flex-1 gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="relative text-gray-300 font-medium group transition text-lg"
            >
              <span className="group-hover:text-blue-400 duration-200">{item.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/mentor"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
          >
            <FaChalkboardTeacher className="text-lg" /> Our Mentor
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
          >
            <FiUser /> Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-blue-400 text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-md border-t border-blue-500/30 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-lg hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/mentor"
            className="flex items-center gap-2 text-lg hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            <FaChalkboardTeacher /> Our Mentor
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-2 text-lg bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500 text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiUser /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
