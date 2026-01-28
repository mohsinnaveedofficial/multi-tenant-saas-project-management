"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";


function Slide() {
  const images = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    src: `https://wjazdipgmtmrjxzazrva.supabase.co/storage/v1/object/public/images/i-${i + 1}.png?width=900&quality=80`,
  }));
  
  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="flex justify-center items-center">
              <div className="border-8 border-gray-50 shadow-xl rounded-xl mb-10">
                <Image
                  src={image.src}
                  alt={`Slide ${image.id}`}
                  width={900}
                  height={500}
                  className="h-64 md:h-96 w-auto rounded object-cover "
                  priority={image.id === 1}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slide;
