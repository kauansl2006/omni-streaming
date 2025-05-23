"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import CardComponent from "../card/card";

export default function CardsListComponent({ items }) {
  return (
    <Swiper spaceBetween={30} slidesPerView={5}>
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <CardComponent item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
