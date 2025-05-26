"use client";

import styles from "./carousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Backdrop } from "../Backdrop";
import { Suspense } from "react";

export const Carousel = ({ items }) => {
  return (
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
      >
        {
          items.map((item) => (
            <SwiperSlide key={item.id}>
              <Suspense fallback={<div className={styles["loading__carousel"]}>Loading backdrops...</div>} >
                <Backdrop  item={item} />
              </Suspense>
            </SwiperSlide>
          ))
        }
      </Swiper>
  )
}