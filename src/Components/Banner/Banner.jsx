import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import sliderA from '../../assets/Slider-2.jpg'
import sliderB from '../../assets/Slider-3.webp'
import sliderC from '../../assets/Slider-4.webp'

const Banner = () => {
  return (
    <div className="w-full max-w-11/12 mx-auto rounded-2xl pt-10 overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-2xl"
      >
        <SwiperSlide>
          <img
            src={sliderA}
            alt="Banner 1"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={sliderB}
            alt="Banner 2"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={sliderC}
            alt="Banner 3"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
