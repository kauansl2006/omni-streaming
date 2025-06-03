"use client";

import { Suspense } from "react";

import styles from "./CategoriesList.module.css"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Category } from "./Category";

export const CategoriesList = ({ swiperRef, items }) => {
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
          <Suspense fallback={<div className={styles["categories-list__loading"]}>Loading backdrops...</div>} >
            <Category item={item} />
          </Suspense>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}