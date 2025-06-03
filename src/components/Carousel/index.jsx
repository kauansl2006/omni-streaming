"use client";

import { Suspense } from "react";

import styles from "./Carousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Backdrop } from "./Backdrop";

export const Carousel = ({ items }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
    >
      {
        items.map((item) => 
          item.backdrop_path && (
            <SwiperSlide key={item.id}>
              <Suspense fallback={<div className={styles["carousel__loading"]}>Loading backdrops...</div>} >
                <Backdrop item={item} />
              </Suspense>
            </SwiperSlide>
          )
        )
      }
    </Swiper>
  )
}