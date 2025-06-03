"use client";

import { Suspense } from "react";

import styles from "./CardsList.module.css";

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
        0: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1840: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Suspense fallback={<div className={styles["cards-list__loading"]}>Loading backdrops...</div>} >
            <Card item={item} />
          </Suspense>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
