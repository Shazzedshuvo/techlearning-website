import React from "react";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaDatabase,
  FaGraduationCap,
  FaQuoteLeft,
} from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-300 px-6 py-20 flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-6 leading-tight">
          Welcome to <span className="text-white">TechLearning</span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Tech Learning is a modern IT and freelancing training center dedicated to empowering individuals with the technical skills 
          required to excel in today’s fast-evolving digital world. Our courses cover web development, software development, networking, security, databases, multimedia, programming, and freelancing. 
          Whether you are a student, professional, or homemaker, we provide flexible programs to help you build a successful career.
        </p>
      </div>

      {/* Our Expertise Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-blue-900/20 via-gray-900 to-blue-950 border border-blue-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_45px_rgba(59,130,246,0.45)] transition-all duration-500 text-center">
          <FaLaptopCode className="text-blue-400 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-white">Web & Software Development</h3>
          <p className="text-gray-300">Learn front-end, back-end, and full-stack development to build professional web and software projects.</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-blue-950/50 to-gray-900 border border-blue-400/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_45px_rgba(59,130,246,0.45)] transition-all duration-500 text-center">
          <FaNetworkWired className="text-blue-300 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-white">Networking & Security</h3>
          <p className="text-gray-300">Master networking fundamentals, cybersecurity, and advanced IT infrastructure skills.</p>
        </div>

        <div className="bg-gradient-to-br from-blue-950 via-gray-900 to-blue-950 border border-blue-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_45px_rgba(59,130,246,0.45)] transition-all duration-500 text-center">
          <FaDatabase className="text-blue-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-white">Databases & Data Management</h3>
          <p className="text-gray-300">Learn SQL, NoSQL, and data management techniques for real-world applications.</p>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-gray-900 via-blue-950/20 to-gray-900 border border-blue-400/30 rounded-2xl p-8 shadow-lg hover:shadow-blue-400/50 transition-all duration-500">
          <h3 className="text-3xl font-semibold text-blue-400 mb-4 border-b-4 border-blue-500/30 inline-block pb-2">
            Our Vision
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            <li>Be the leading IT training platform for global innovation.</li>
            <li>Provide employment opportunities for over 5,000 individuals by 2030.</li>
            <li>Contribute to the dream of a skilled and digital Bangladesh.</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-blue-950/20 to-gray-900 border border-blue-400/30 rounded-2xl p-8 shadow-lg hover:shadow-blue-400/50 transition-all duration-500">
          <h3 className="text-3xl font-semibold text-blue-400 mb-4 border-b-4 border-blue-500/30 inline-block pb-2">
            Our Mission
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            <li>Empower individuals with technical skills for a changing digital world.</li>
            <li>Offer industry-relevant training to expand career opportunities.</li>
            <li>Enable more people to enter the IT sector and contribute effectively.</li>
          </ul>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl w-full mb-16">
        <h2 className="text-4xl font-extrabold text-blue-400 mb-8 text-center">Student Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "“The instructors are very supportive, and I gained real skills to start freelancing confidently.”",
              name: "Arif Hossain",
              course: "Web Development Student",
              color: "text-blue-400",
            },
            {
              text: "“Tech Learning feels like a family. Mentors always encourage us to do better.”",
              name: "Nusrat Jahan",
              course: "Graphic Design Student",
              color: "text-blue-300",
            },
            {
              text: "“The practical projects and real-world focus make Tech Learning the best choice for IT students.”",
              name: "Rakibul Islam",
              course: "Motion Graphics Student",
              color: "text-blue-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 via-blue-950/20 to-gray-900 border border-blue-500/30 rounded-2xl p-8 shadow-lg hover:shadow-blue-400/50 transition-all duration-500"
            >
              <FaQuoteLeft className={`${item.color} text-4xl mb-4`} />
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{item.text}</p>
              <div className="flex items-center gap-4">
                <FaGraduationCap className={`${item.color} text-3xl`} />
                <div>
                  <h4 className="text-white font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-400">
          Join <span className="text-blue-400 font-semibold">Tech Learning</span> today and start your journey toward a successful IT career!
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default AboutUsSection;
