import styles from "./Card.module.css";

import Image from "next/image";

export const Card = ({ item }) => {
  return (
    <div className={styles["card__card"]}>
      <div className={styles["card__poster-container"]}>
        <Image
          src={"https://image.tmdb.org/t/p/original" + item.poster_path}
          alt={`${item.title ? item.title : item.name} poster`}
          width={243}
          height={281}
          className={styles["card__poster"]}
        />
      </div>
      <div className={styles["card__body-container"]}>
        <span className={styles["card__span"]}>1:30min</span>
        <span className={styles["card__span"]}>1.5k</span>
      </div>
    </div>
  );
}
