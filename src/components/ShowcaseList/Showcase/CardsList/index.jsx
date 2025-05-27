"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Card } from "./Card";

export const CardsList = ({ items, swiperRef }) => {
  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper
      }}
      breakpoints={{
        390: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
