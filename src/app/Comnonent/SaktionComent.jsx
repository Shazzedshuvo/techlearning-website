
import React from "react";
import { FaQuoteLeft, FaUserGraduate, FaStar } from "react-icons/fa";

const SaktionComent = () => {
   return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-300 flex flex-col items-center justify-center px-6 py-20">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
          Comments
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Students are members of the <span className="text-blue-400 font-semibold">TechLearning</span>. 
          So, any constructive feedback from students motivates us to improve and move forward.
        </p>
      </div>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        
        {/* Card 1 */}
        <div className="relative bg-gradient-to-br from-blue-900/20 via-gray-900 to-blue-950 border border-blue-500/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_45px_rgba(59,130,246,0.45)] transition-all duration-500">
          <FaQuoteLeft className="text-blue-400 text-4xl mb-4" />
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            “The teachers are really friendly and helpful. The course helped me 
            to start freelancing confidently. Highly recommended!”
          </p>
          <div className="flex items-center gap-4">
            <FaUserGraduate className="text-blue-400 text-3xl" />
            <div>
              <h4 className="text-white font-semibold text-lg">Arif Hossain</h4>
              <p className="text-sm text-gray-400">Graphic Design Student</p>
              <div className="flex text-yellow-400 mt-1">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-gradient-to-br from-gray-900 via-blue-950/50 to-gray-900 border border-blue-400/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_45px_rgba(59,130,246,0.45)] transition-all duration-500">
          <FaQuoteLeft className="text-blue-300 text-4xl mb-4" />
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            “Creative IT feels like a family. I learned a lot about web development 
            and the mentors always encouraged us to do better.”
          </p>
          <div className="flex items-center gap-4">
            <FaUserGraduate className="text-blue-300 text-3xl" />
            <div>
              <h4 className="text-white font-semibold text-lg">Nusrat Jahan</h4>
              <p className="text-sm text-gray-400">Web Development Student</p>
              <div className="flex text-yellow-400 mt-1">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-gradient-to-br from-blue-950 via-gray-900 to-blue-950 border border-blue-500/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_45px_rgba(59,130,246,0.45)] transition-all duration-500">
          <FaQuoteLeft className="text-blue-500 text-4xl mb-4" />
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            “The best part is the practical learning experience. The instructors 
            really focus on skill development for real-world projects.”
          </p>
          <div className="flex items-center gap-4">
            <FaUserGraduate className="text-blue-500 text-3xl" />
            <div>
              <h4 className="text-white font-semibold text-lg">Rakibul Islam</h4>
              <p className="text-sm text-gray-400">Motion Graphics Student</p>
              <div className="flex text-yellow-400 mt-1">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );}

export default SaktionComent;