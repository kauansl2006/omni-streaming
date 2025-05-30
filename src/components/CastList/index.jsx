"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Actor } from "./Actor";

export const CastList = ({ cast }) => {
  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        391: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        680: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        860: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        1005: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1150: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
      }}
    >
      {cast.map((actor) => (
        actor.profile_path && (
          <SwiperSlide key={actor.id}>
            <Actor actor={actor}></Actor>
          </SwiperSlide>
        )
      ))}
    </Swiper>
  );
}
