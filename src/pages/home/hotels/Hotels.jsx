import React from "react";
import { FaHotel } from "react-icons/fa6";
import { MdTour } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";

const Hotels = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gray-100 p-4 rounded-xl">
      
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        
        {/* Tabs */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-black hover:bg-[#FAB326] transition">
            <MdTour />
            Tours
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#FAB326] text-black">
            <FaHotel />
            Hotels
          </button>
        </div>

        {/* Help Link */}
        <Link className="text-gray-500 text-sm hover:underline">
          Need some help?
        </Link>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Location */}
        <div className="flex items-center gap-3 w-full">
          <IoLocationOutline className="text-gray-400 text-xl" />
          <div>
            <p className="text-xs text-gray-400">Location</p>
            <p className="font-medium text-gray-800">New York, USA</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-200"></div>

        {/* Date */}
        <div className="flex items-center gap-3 w-full">
          <FaRegCalendarAlt className="text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Check In & Check Out</p>
            <p className="font-medium text-gray-800">02 January 2024</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-200"></div>

        {/* Guests */}
        <div className="flex items-center gap-3 w-full">
          <FiUsers className="text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Guest</p>
            <p className="font-medium text-gray-800">2 adults, 2 children</p>
          </div>
        </div>

        {/* Search Button */}
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
          <IoSearch />
          Search
        </button>
      </div>
    </div>
  );
};

export default Hotels;