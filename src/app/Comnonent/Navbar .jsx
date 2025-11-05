"use client";
import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ cartCount = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 border-b border-blue-500/30 shadow-[0_2px_20px_rgba(59,130,246,0.1)]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-blue-400 tracking-wide hover:text-blue-300 transition">
          TechLearning
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {["Courses", "Blog", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group transition"
            >
              <span className="hover:text-blue-400 transition-colors duration-200">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Cart */}
          <div className="relative ml-3">
            <FiShoppingCart className="text-xl text-blue-400 hover:text-blue-300 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <FiShoppingCart className="text-xl text-blue-400" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-blue-400 text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900/90 backdrop-blur-md border-t border-blue-500/30 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-gray-300 font-medium">
          {["Courses", "Blog", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-lg hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
