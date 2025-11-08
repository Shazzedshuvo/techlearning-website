"use client";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-300 border-t border-blue-500/30">
      {/* 🔹 Admission Section */}
      <div className="bg-gradient-to-br from-blue-80 to-blue-800 py-12 text-center text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
        <h2 className="text-4xl font-bold text-white  md:text-4xl font-bold mb-3">
          Admission Is Going On 
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Enroll in any online or offline course now, and take a step forward
          towards a successful career!
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-100 transition duration-300 shadow-lg">
            Join Free Seminar
          </button>
          <button className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-300 shadow-lg">
            Browse Courses
          </button>
        </div>
      </div>

      {/* 🔹 Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 🏢 Contact */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Contact</h3>
          <p className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-blue-400" />
            Momtaz Plaza (4th Floor), House #7, Road #4, Dhanmondi, Dhaka-1205
          </p>
          <p className="mt-3 flex items-center gap-2">
            <FaPhoneAlt className="text-blue-400" /> +880 1777 308777
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-400" /> +880 1624 666000
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" /> info@techlearning.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <FaFacebook className="text-xl hover:text-blue-400 transition" />
            <FaYoutube className="text-xl hover:text-red-500 transition" />
            <FaInstagram className="text-xl hover:text-pink-500 transition" />
            <FaLinkedin className="text-xl hover:text-blue-400 transition" />
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "Free Seminar Schedule",
              "Mentors",
              "Success Story",
              "Our Gallery",
              "FAQ",
              "Blog",
              "Privacy Policy",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 🎓 Popular Courses */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Popular Courses
          </h3>
          <ul className="space-y-2">
            {[
              "Web Development",
              "Professional Graphic Design",
              "Digital Marketing",
              "MERN Stack Development",
              "Motion Graphics",
              "3D Animation",
              "Content Writing",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ⚙️ Others */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Others</h3>
          <ul className="space-y-2">
            {[
              "About Us",
              "Our Facility",
              "Our Achievement",
              "Career Placement",
              "Freelancing",
              "Students Feedback",
              "Contact",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔹 Payment Section */}
      <div className="border-t border-blue-500/30 py-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-gray-400 text-sm space-y-2 text-center md:text-left">
          <p className="gap-8">
            <span className="text-blue-400 font-semibold ">bKash:</span> 017**** ||
            <span className="text-blue-400 font-semibold"> Nagad:</span> 013**** ||
            <span className="text-blue-400 font-semibold"> Rocket:</span> 013**** ||
            <span className="text-blue-400 font-semibold"> SSLCommerz:</span>{" "}
            SSLCOMMERZ
          </p>
        </div>

        {/* 💳 Beautiful Payment Cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: <FaCcVisa />, color: "from-blue-500 to-blue-400" },
            { icon: <FaCcMastercard />, color: "from-red-600 to-orange-500" },
            { icon: <FaCcPaypal />, color: "from-blue-400 to-cyan-400" },
            { icon: <FaCcAmex />, color: "from-indigo-500 to-blue-500" },
          ].map((pay, i) => (
            <div
              key={i}
              className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${pay.color} shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300`}
            >
              {pay.icon}
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Copyright */}
      <div className="border-t border-blue-500/30 py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-semibold">TechLearning</span>. All
        Rights Reserved | e-TIN: 570007703094 | TL: TRAD/DSCC/228155/2019
      </div>
    </footer>
  );
};

export default Footer;
