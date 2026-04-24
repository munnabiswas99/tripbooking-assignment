import React from "react";
import Venice from "../../../assets/destination/Venice.png";
import Amsterdam from "../../../assets/destination/Amsterdam.png";
import Budapest from "../../../assets/destination/Budapest.png";
import Lisbon from "../../../assets/destination/Lisbon.png";
import London from "../../../assets/destination/London.png";
import Ottawa from "../../../assets/destination/Ottawa.png";
import Paris from "../../../assets/destination/Paris.png";
import { FaArrowRight } from "react-icons/fa6";

const destinations = [
  { name: "Venice", tours: 356, image: Venice },
  { name: "Amsterdam", tours: 356, image: Amsterdam },
  { name: "Budapest", tours: 356, image: Budapest },
  { name: "Lisbon", tours: 356, image: Lisbon },
  { name: "London", tours: 356, image: London },
  { name: "Ottawa", tours: 356, image: Ottawa },
  { name: "Paris", tours: 356, image: Paris },
];

const Destination = () => {
  return (
    <div className="max-w-2/3 mx-auto py-12">
      
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-900">
        Popular Destinations
      </h1>
      <p className="text-gray-800 mb-8">
        Favorite destinations based on customer reviews
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Destination Cards */}
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-3 hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-xl h-40 w-full object-cover"
            />

            <div className="flex justify-between items-center mt-3">
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-800">
                  {item.tours} Tours
                </p>
              </div>

              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800">
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}

        {/* Special Card */}
        <div className="bg-blue-700 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Crafting Your Perfect Travel Experience
            </h2>
          </div>

          <button className="bg-[#FAB326] text-black px-4 py-2 rounded-full flex items-center gap-2 w-fit">
            Browse All destinations
            <FaArrowRight size={12} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Destination;