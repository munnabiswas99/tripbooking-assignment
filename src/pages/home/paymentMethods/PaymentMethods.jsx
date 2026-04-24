import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import p1 from "../../../assets/paymentMethods/p1.png";
import p2 from "../../../assets/paymentMethods/p2.png";
import p3 from "../../../assets/paymentMethods/p3.png";
import p4 from "../../../assets/paymentMethods/p4.png";
import p5 from "../../../assets/paymentMethods/p5.png";
import p6 from "../../../assets/paymentMethods/p6.png";
import p7 from "../../../assets/paymentMethods/p7.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const brandLogos = [p1, p2, p3, p4, p5, p6, p7];

const PaymentMethods = () => {
  return (
    <div className="my-10 max-w-2/3 mx-auto">
      <Swiper
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PaymentMethods;
