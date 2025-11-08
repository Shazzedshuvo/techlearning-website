"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-300 py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          CONTACT US
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400">
          Let's Talk — For all your needs,{" "}
          <span className="text-blue-400 font-semibold">TechLearning</span> is
          here. For any course info, call the number below or visit our campuses
          directly. You can also send a message through the form below.
        </p>
      </div>

      {/* --- Contact Info Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
        {/* Call */}
        <div className="bg-gray-900/50 border border-blue-500/30 rounded-xl p-6 text-center hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
          <FaPhoneAlt className="text-3xl text-blue-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-300 mb-1">
            Give us a call
          </h3>
          <p className="text-gray-400">+880 1719052334</p>
        </div>

        {/* Chat */}
        <div className="bg-gray-900/50 border border-blue-500/30 rounded-xl p-6 text-center hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
          <FaEnvelope className="text-3xl text-blue-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-300 mb-1">
            Chat with us
          </h3>
          <p className="text-gray-400">info@techlearning.com</p>
        </div>

        {/* Office Time */}
        <div className="bg-gray-900/50 border border-blue-500/30 rounded-xl p-6 text-center hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
          <FaClock className="text-3xl text-blue-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-300 mb-1">
            Office Visit Time
          </h3>
          <p className="text-gray-400">
            Saturday - Friday <br /> 9:00 AM - 8:00 PM
          </p>
        </div>

        {/* Visit */}
        <div className="bg-gray-900/50 border border-blue-500/30 rounded-xl p-6 text-center hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
          <FaMapMarkerAlt className="text-3xl text-blue-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-300 mb-1">Visit us</h3>
          <p className="text-gray-400">
            Daisy Garden, House 14, Block A, Banasree Main Road, Dhaka-1219
          </p>
        </div>
      </div>

      {/* --- Campuses --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        {/* Main Campus */}
        <div className="bg-gray-900/60 border border-blue-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Head Office [Main Campus, Dhaka]
          </h2>
          <p className="text-gray-400 mb-3">
            Momtaz Plaza (4th Floor), Opposite of Labaid Hospital  
            House#7, Road#4, Dhanmondi, Dhaka 1205, Bangladesh
          </p>

          <h3 className="text-blue-300 font-semibold mt-4 mb-1">Phone Number</h3>
          <ul className="text-gray-400 space-y-1">
            <li>+880 1719052334</li>
            <li>+880 1624666000</li>
            <li>+880 1624888444</li>
            <li>+880 1966177177</li>
            <li>+880 1625555444</li>
          </ul>

          <h3 className="text-blue-300 font-semibold mt-4 mb-1">
            Office Visit Time
          </h3>
          <p className="text-gray-400">Saturday - Friday, 9:00 AM - 8:00 PM</p>

          <h3 className="text-blue-300 font-semibold mt-4 mb-1">E-Mail</h3>
          <p className="text-gray-400">info@techlearning.com</p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6983651881045!2d90.38726837500002!3d23.792704278640893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b3baf9f49f%3A0x5dd50d3c991f2a02!2sLabaid%20Hospital%2C%20Dhanmondi!5e0!3m2!1sen!2sbd!4v1699999999999!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ minHeight: "400px", border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* --- Dhanmondi Branch --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.15)] order-2 lg:order-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6639993829295!2d90.38380237500003!3d23.793910078640164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bfb9a222e5%3A0x17c4f23b1121a37d!2sMeher%20Plaza%2C%20Dhanmondi!5e0!3m2!1sen!2sbd!4v1699998888888!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ minHeight: "400px", border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Details */}
        <div className="bg-gray-900/60 border border-blue-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(59,130,246,0.15)] order-1 lg:order-2">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Head Office [Dhanmondi, Dhaka]
          </h2>
          <p className="text-gray-400 mb-3">
            Meher Plaza (3rd, 4th Floor), House#13/A, Road#5 Dhanmondi, Dhaka -
            1205, Bangladesh
          </p>

          <h3 className="text-blue-300 font-semibold mt-4 mb-1">Phone Number</h3>
          <ul className="text-gray-400 space-y-1">
            <li>+880 1719052334</li>
            <li>+880 1990779782</li>
            <li>+880 1958155245</li>
          </ul>

          <h3 className="text-blue-300 font-semibold mt-4 mb-1">
            Office Visit Time
          </h3>
          <p className="text-gray-400">Saturday - Friday, 9:00 AM - 8:00 PM</p>

          <h3 className="text-blue-300 font-semibold mt-4 mb-1">E-Mail</h3>
          <p className="text-gray-400">info@techlearning.com</p>
        </div>
      </div>

      {/* --- Get In Touch Form --- */}
      <div className="max-w-4xl mx-auto text-center bg-gray-900/50 border border-blue-500/30 rounded-2xl p-10 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-8">
          We’d love to hear from you! Fill out the form below and our team will
          get back to you as soon as possible.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-800 border border-blue-500/20 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-800 border border-blue-500/20 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500 transition"
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="bg-gray-800 border border-blue-500/20 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500 transition"
          />
          <input
            type="text"
            placeholder="Course Name"
            className="bg-gray-800 border border-blue-500/20 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500 transition"
          />
          <textarea
            placeholder="Type your message here..."
            className="bg-gray-800 border border-blue-500/20 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500 transition md:col-span-2"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
