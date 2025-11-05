"use client";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Left Section: Copyright */}
      <p className="text-sm md:text-base text-center md:text-left">
        © {new Date().getFullYear()} TechLearning — Built with Next.js & Tailwind CSS
      </p>

      {/* Right Section: Payment Methods */}
      <div className="flex items-center gap-4">
        <FaCcVisa className="text-2xl text-blue-500" title="Visa" />
        <FaCcMastercard className="text-2xl text-red-500" title="MasterCard" />
        <FaCcPaypal className="text-2xl text-blue-400" title="PayPal" />
        <FaCcAmex className="text-2xl text-blue-600" title="Amex" />
      </div>
    </div>
  </footer>
);

export default Footer;
