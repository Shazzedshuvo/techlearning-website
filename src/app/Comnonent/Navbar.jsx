"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingCart, FiMenu, FiX, FiUser, FiSearch, FiCode } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { openCart } from "../Redux/cartSlice";

const Navbar = ({ onOpenAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.items || []);
  const cartCount = cartItems.length;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/course" },
    { name: "E-Books", path: "/ebook" },
    { name: "Mentors", path: "/mentor" },
    { name: "Freelancing", path: "/freelancing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#07090e]/85 backdrop-blur-xl border-b border-indigo-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
              <FiCode className="text-xl text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-xl font-black tracking-tight text-white">Tech</span>
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Learning</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-0.5 animate-pulse" />
            </div>
            <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase -mt-0.5">
              Empowering Careers
            </span>
          </div>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-sm font-semibold transition-all duration-200 py-1 ${
                  isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cart Button with Live Badge */}
          <button
            onClick={() => dispatch(openCart())}
            className="relative p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-slate-800/80 transition shadow-sm"
            aria-label="View Cart"
          >
            <FiShoppingCart className="text-lg" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-[11px] font-black flex items-center justify-center shadow-lg shadow-indigo-500/50 animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Login / Auth Button */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold transition shadow-lg shadow-indigo-500/25 active:scale-95"
          >
            <FiUser className="text-sm" /> Sign In
          </button>
        </div>

        {/* Mobile Menu & Cart Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => dispatch(openCart())}
            className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
            aria-label="View Cart"
          >
            <FiShoppingCart className="text-lg" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-4.5 px-1 rounded-full bg-pink-500 text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-[#0a0e1a]/95 backdrop-blur-2xl border-b border-indigo-500/20 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] py-6 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <div className="flex flex-col gap-4 text-slate-300 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-base font-medium py-1.5 transition ${
                pathname === item.path ? "text-cyan-400 font-bold" : "hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenAuth) onOpenAuth();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition"
            >
              <FiUser /> Sign In / Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
