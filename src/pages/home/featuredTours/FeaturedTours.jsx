import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import feature1 from "../../../assets/featured/feature1.png";
import feature2 from "../../../assets/featured/feature2.png";
import feature3 from "../../../assets/featured/feature3.png";

import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FeaturedTours = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const features = [
    {
      img: feature1,
      title: "California Sunset/Twilight Boat Cruise",
      location: "Manchester, England",
      duration: "2 days 3 nights",
      guests: "4-6 guest",
      price: "$48.25",
      badge: "Top Rated",
    },
    {
      img: feature2,
      title: "NYC: Food Tastings and Culture Tour",
      location: "Manchester, England",
      duration: "3 days 3 nights",
      guests: "4-6 guest",
      price: "$17.32",
      badge: "Best Sale",
    },
    {
      img: feature3,
      title: "Grand Canyon Horseshoe Bend 2 days",
      location: "Manchester, England",
      duration: "7 days 6 nights",
      guests: "4-6 guest",
      price: "$15.63",
      badge: "25% Off",
    },
    {
      img: feature2,
      title: "NYC: Food Tastings and Culture Tour",
      location: "Manchester, England",
      duration: "3 days 3 nights",
      guests: "4-6 guest",
      price: "$17.32",
      badge: "Best Sale",
    },
    {
      img: feature3,
      title: "Grand Canyon Horseshoe Bend 2 days",
      location: "Manchester, England",
      duration: "7 days 6 nights",
      guests: "4-6 guest",
      price: "$15.63",
      badge: "25% Off",
    },
  ];

  return (
    <div className="max-w-2/3 mx-auto px-4 py-16">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-black">
            Our Featured Tours
          </h2>
          <p className="text-gray-500 text-sm">
            Favorite destinations based on customer reviews
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="w-10 h-10 flex items-center justify-center text-black rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FaArrowLeft size={14} />
          </button>

          <button
            ref={nextRef}
            className="w-10 h-10 flex items-center justify-center rounded-full text-black bg-gray-200 hover:bg-gray-300 transition"
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              
              {/* Image */}
              <div className="relative">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-3 left-3 bg-orange-200 text-orange-700 text-xs px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h3 className="text-black font-semibold text-lg leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <CiLocationOn /> {item.location}
                </p>

                <div className="flex text-xs text-gray-400 gap-4">
                  <span className="flex items-center gap-1">
                    <IoTimeOutline /> {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MdPeopleAlt /> {item.guests}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <p className="font-bold text-lg text-black">
                    {item.price}
                    <span className="text-sm text-gray-400"> / person</span>
                  </p>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedTours;