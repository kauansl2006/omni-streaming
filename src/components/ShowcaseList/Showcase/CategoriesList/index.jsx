"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Category } from "./Category";

export const CategoriesList = ({ swiperRef, items }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      onSwiper={(swiper) => {
        swiperRef.current = swiper
      }}
    >
      {items.genres.map((item) => (
        <SwiperSlide key={item.id}>
          <Category item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}