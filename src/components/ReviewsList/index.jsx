"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { ReviewCard } from "./ReviewCard";

export const ReviewsList = ({ reviews }) => {
  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
