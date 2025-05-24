"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { CardComponent } from "./Card";

export const CardsListComponent = ({ items, swiperRef }) => {
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
          <CardComponent item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
