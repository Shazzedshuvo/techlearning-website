"use client";
import React from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";

const VideoModal = ({ isOpen, onClose, videoUrl, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#0c101d] border border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-md sm:max-w-xl">
              {title || "Free Video Lecture"}
            </h3>
            <p className="text-xs text-indigo-400">TechLearning Masterclass Session</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Video Player Embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Video Details & Resources */}
        <div className="p-6 bg-slate-950/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-slate-200">
              {description || "Interactive practical lesson with live coding demonstrations and source code."}
            </h4>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <FiCheckCircle /> HD 1080p Video
              </span>
              <span>•</span>
              <span>Free Code Snippets Included</span>
              <span>•</span>
              <span>Certificate of Attendance</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition shadow-lg shadow-indigo-500/20 whitespace-nowrap"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
