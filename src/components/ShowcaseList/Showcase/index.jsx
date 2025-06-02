"use client";

import { Suspense, useRef } from "react";

import styles from "./Showcase.module.css";

import { CardsList } from "./CardsList";
import { CategoriesList } from "./CategoriesList";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Showcase = ({ heading, text, items, type, id }) => {
  const swiperRef = useRef(null)

  return (
    <section id={id ? id : null} className={styles["showcase__section"]}>
      <div className={styles["showcase__container"]}>
        <div className={styles["showcase__heading-container"]}>
          <div className={styles["showcase__text-container"]}>
            <h2 className={styles["showcase__h2"]}>{heading}</h2>
            { text && <p className={styles["showcase__text"]}>{text}</p> }
          </div>
          {
            !(type === "categories") && (

              <div className={styles["showcase__buttons"]}>
                <button
                  className={styles["showcase__button"]}
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <FaArrowLeft />
                </button>
                <button
                  className={styles["showcase__button"]}
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <FaArrowRight />
                </button>
              </div>
            )
          }
        </div>

        <div className={styles["showcase__cards-container"]}>
          <Suspense fallback={<div className={styles["showcase__loading"]}>Loading...</div>}>
            {
              type === "categories" ? (
                <CategoriesList items={items} swiperRef={swiperRef} />
              ) : (
                <CardsList items={items} swiperRef={swiperRef} />
              )
            }
          </Suspense>
        </div>
      </div>
    </section>
  );
}
