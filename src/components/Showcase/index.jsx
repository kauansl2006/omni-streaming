"use client";

import { Suspense, useRef } from "react";

import styles from "./showcase.module.css";

import { CardsListComponent } from "./CardsList";
import { CategoriesListComponent } from "./CategoriesList";

export const ShowcaseComponent = ({ heading, items, type, id }) => {
  const swiperRef = useRef(null)

  return (
    <section id={id ? id : null} className={styles["section__showcase"]}>
      <div className={styles["container__showcase"]}>
        <div className={styles["heading-container__showcase"]}>
          <h2 className={styles["h2__showcase"]}>{heading}</h2>
          {
            !(type === "categories") && (

              <div className={styles["buttons__showcase"]}>
                <button
                  className={styles["button__showcase"]}
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  {"<"}
                </button>
                <button
                  className={styles["button__showcase"]}
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  {">"}
                </button>
              </div>
            )
          }
        </div>

        <div className={styles["cards-container__showcase"]}>
          <Suspense fallback={<div className={styles["loading__showcase"]}>Loading...</div>}>
            {
              type === "categories" ? (
                <CategoriesListComponent items={items} swiperRef={swiperRef} />
              ) : (
                <CardsListComponent items={items} swiperRef={swiperRef} />
              )
            }
          </Suspense>
        </div>
      </div>
    </section>
  );
}
