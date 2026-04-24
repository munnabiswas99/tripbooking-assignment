import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import feature1 from "../../../assets/featured/feature1.png";
import feature2 from "../../../assets/featured/feature2.png";
import feature3 from "../../../assets/featured/feature3.png";

import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const TopHotels = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const features = [
    {
      img: feature1,
      title: "California Sunset/Twilight Boat Cruise",
      location: "Manchester, England",
      price: "$48.25",
    },
    {
      img: feature2,
      title: "NYC: Food Tastings and Culture Tour",
      location: "Manchester, England",
      price: "$17.32",
    },
    {
      img: feature3,
      title: "Grand Canyon Horseshoe Bend 2 days",
      location: "Manchester, England",
      price: "$15.63",
    },
    {
      img: feature2,
      title: "NYC: Food Tastings and Culture Tour",
      location: "Manchester, England",
      price: "$17.32",
    },
  ];

  return (
    <div className="max-w-2/3 mx-auto py-25">
      <div className="px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-black">
              Top Rated Hotels
            </h2>
            <p className="text-gray-500 text-sm">
              Quality as judged by customers. Book at the ideal price!
            </p>
          </div>

          {/* External Navigation */}
          <div className="flex gap-3">
            <button
              ref={prevRef}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-black hover:bg-gray-100 transition"
            >
              <FaArrowLeft size={14} />
            </button>

            <button
              ref={nextRef}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-black hover:bg-gray-100 transition"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20"
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group hover:-translate-y-2 transition duration-300">

                {/* Image */}
                <div className="rounded-3xl">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[260px] object-cover group-hover:scale-105 rounded-2xl transition duration-300"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 mb-2 w-[90%] bg-white rounded-3xl shadow-xl p-5">

                  {/* Title */}
                  <h3 className="text-black font-semibold text-[15px] leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Location + Rating */}
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <CiLocationOn /> {item.location}
                    </p>

                    {/* Stars */}
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  {/* Price + Button */}
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-black">
                      {item.price}
                      <span className="text-xs text-gray-400"> / person</span>
                    </p>

                    <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs hover:bg-blue-700 transition">
                      Book Now
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default TopHotels;
