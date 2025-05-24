"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { CategoryComponent } from "../Category";

export const CategoriesListComponent = ({ swiperRef, items }) => {
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
          <CategoryComponent item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}