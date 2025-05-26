"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Card } from "./Card";

export const CardsList = ({ items, swiperRef }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      onSwiper={(swiper) => {
        swiperRef.current = swiper
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
