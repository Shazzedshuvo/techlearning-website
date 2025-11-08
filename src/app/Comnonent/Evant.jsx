"use client";
import Image from "next/image";
import { FiClock, FiMapPin, FiInfo } from "react-icons/fi";

export default function UpcomingEvents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-300 py-16 px-6">
      {/* Header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-blue-400">
          Upcoming Events
        </h1>
        <button className="text-blue-400 hover:text-blue-500 transition font-medium">
          See all →
        </button>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Main Event */}
        <div className="bg-gray-900/50 border border-blue-500/20 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] transition">
          <Image
            src="/e1.jpg"
            alt="Certified MERN Stack Development"
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
              <FiClock className="text-blue-400" />
              <span>07 February 2025 • 4:00 PM - 5:00 PM</span>
              <span className="bg-green-400 text-black px-2 py-0.5 rounded">OFFLINE</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-1 mb-3">
              Certified MERN Stack Development
            </h2>
            <p className="text-gray-400 mb-3">
              ‘Level Up Your Career with MERN’! Join our offline seminar to expand your career in web development with our expert mentor.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <FiMapPin className="text-blue-400" />
              Daisy Garden, House 14 (Level-5), Block A, Main Road, Banasree, Dhaka
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg transition-all">
              Join Seminar
            </button>
          </div>
        </div>

        {/* Two smaller events */}
        <div className="flex flex-col gap-6">
          {/* Event 2 */}
          <div className="flex bg-gray-900/50 border border-blue-500/20 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition h-full">
            <Image
              src="/e2.jpg"
              alt="Certified UX-UI Design"
              width={160}
              height={160}
              className="w-40 h-40 object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                <FiClock className="text-blue-400" />
                <span>09 February 2025 • 7:00 PM - 8:00 PM</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Certified UX-UI Design
              </h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FiInfo className="text-blue-400" />
                Learn more about this seminar
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="flex bg-gray-900/50 border border-blue-500/20 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition h-full">
            <Image
              src="/e1.jpg"
              alt="Certified MERN Stack Development"
              width={160}
              height={160}
              className="w-40 h-40 object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                <FiClock className="text-blue-400" />
                <span>07 February 2025 • 4:00 PM - 5:00 PM</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Certified MERN Stack Development
              </h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FiInfo className="text-blue-400" />
                Learn more about this seminar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
