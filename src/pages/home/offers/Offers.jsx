import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import offer1 from "../../../assets/offers/offer1.png";
import offer2 from "../../../assets/offers/offer2.png";
import offer3 from "../../../assets/offers/offer3.png";

const Offers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const offers = [
    {
      img: offer1,
      title: "We Make Every",
      subtitle: "Trips Special",
    },
    {
      img: offer2,
      title: "Limited Offers",
      subtitle: "Buy 1, Get 1 Free Attractions",
    },
    {
      img: offer3,
      title: "Limited Offers",
      subtitle: "Buy 1, Get 1 Free Attractions",
    },
    {
      img: offer2,
      title: "Limited Offers",
      subtitle: "Buy 1, Get 1 Free Attractions",
    },
    {
      img: offer3,
      title: "Limited Offers",
      subtitle: "Buy 1, Get 1 Free Attractions",
    },
  ];

  return (
    <div className="max-w-2/3 mx-auto px-6 py-10 relative">

      {/* 🔘 External Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 text-black bg-gray-300 shadow-md p-3 rounded-full hover:bg-gray-100"
      >
        <FaArrowLeft />
      </button>

      <button
        ref={nextRef}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-gray-300 text-black shadow-md p-3 rounded-full hover:bg-gray-100"
      >
        <FaArrowRight />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {offers.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 text-white">
                <p className="text-sm opacity-80">{item.title}</p>

                <h2 className="text-xl font-bold mb-3">
                  {item.subtitle}
                </h2>

                <button className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full w-fit text-sm font-semibold hover:bg-yellow-300 transition">
                  View More <FaArrowRight />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Offers;
