import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const FindWithAi = () => {
  return (
    <div className="max-w-11/12 mx-auto relative bg-gradient-to-r from-blue-700 to-blue-900 overflow-hidden py-20 px-6 my-20">

      {/* 🔵 Background Glow Circles */}
      <div className="absolute w-[300px] h-[300px] bg-blue-400 opacity-20 rounded-full blur-3xl top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-300 opacity-20 rounded-full blur-3xl bottom-0 right-0"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-white">

        {/* Highlight Box */}
        <div className="p-6 rounded-lg max-w-2xl">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Find The Best Travel <br />
            Deals Instantly With AI!
          </h1>

          {/* Description */}
          <p className="text-sm text-blue-100 mb-6 leading-relaxed">
            No more endless searching! Our AI scans thousands of travel packages
            to find you the best deals - Whether it’s a budget getaway or a
            luxury escape, we’ll match you with the best deal — instantly!
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">

            {/* Apple */}
            <button className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-lg shadow hover:scale-105 transition">
              <FaApple size={20} />
              <div className="text-left text-xs leading-tight">
                <p>Download on the</p>
                <span className="font-semibold text-sm">
                  Apple Store
                </span>
              </div>
            </button>

            {/* Google Play */}
            <button className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-lg shadow hover:scale-105 transition">
              <FaGooglePlay size={20} />
              <div className="text-left text-xs leading-tight">
                <p>Get it on</p>
                <span className="font-semibold text-sm">
                  Google Play
                </span>
              </div>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FindWithAi;
