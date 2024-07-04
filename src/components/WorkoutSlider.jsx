import React from "react";
//import data
import { workouts } from "../constants";

//import the required modules
import { Navigation, Autoplay } from "swiper";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../workoutSlider.css";

export default function WorkoutSlider() {
  //destructure workout contents
  const { programs } = workouts;

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, index) => {
        const { image, name } = program;
        return (
          <SwiperSlide
            className="max-w-[320px] max-h-[320px] relative"
            key={index}
          >
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="workout image"
            />
            <div className="absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center">
              <div className="font-primary font-semibold text-sm text-neutral-500">
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
