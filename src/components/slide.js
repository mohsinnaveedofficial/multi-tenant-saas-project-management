"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function Slide() {
  return (
    <div>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center ">
            <div className="border-12  border-white  shadow-xl rounded-xl mb-10">
              <img className=" h-64 md:h-96  rounded-lg " src="/slideimg1.png" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center ">
            <div className="border-12  border-white  shadow-xl rounded-xl mb-10">
              <img className=" h-64 md:h-96  rounded-lg " src="/slideimg2.png" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center ">
            <div className="border-12  border-white  shadow-xl rounded-xl mb-10">
              <img className=" h-64 md:h-96  rounded-lg " src="/slideimg3.png" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center ">
            <div className="border-12  border-white  shadow-xl rounded-xl mb-10">
              <img className=" h-64 md:h-96  rounded-lg " src="/slideimg4.png" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slide;
