import styles from "./Card.module.css";

import Image from "next/image";

export const Card = ({ item }) => {
  return (
    <div className={styles["card__card"]}>
      <div className={styles["card__poster-container"]}>
        <Image
          src={"https://image.tmdb.org/t/p/original" + item.poster_path}
          alt={`${item.title ? item.title : item.name} poster`}
          width={500}
          height={500}
          className={styles["card__poster"]}
        />
      </div>
      <div className={styles["card__body-container"]}>
        <h5 className={styles["card__original-title"]}>
          {item.original_title ? item.original_title : item.original_name}
        </h5>
        <p className={styles["card__overview"]}>{item.overview}</p>
        <div className={styles["card__span-container"]}>
          <span>1:30min</span>
          <span>1.5k</span>
        </div>
        <button className={styles["card__button"]}>Play Now</button>
      </div>
    </div>
  );
}
