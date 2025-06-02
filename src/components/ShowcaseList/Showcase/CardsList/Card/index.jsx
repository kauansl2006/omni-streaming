import styles from "./Card.module.css";

import Image from "next/image";
import Link from "next/link";

export const Card = ({ item }) => {
  return (
    <div className={styles["card__card"]}>
      <Link className={styles["card__link"]} href={`/movies-and-shows/${item.title ? "movie" : "show"}/${item.id}`}>
        <div className={styles["card__poster-container"]}>
          <Image
            src={"https://image.tmdb.org/t/p/original" + item.poster_path}
            alt={`${item.title ? item.title : item.name} poster`}
            width={243}
            height={281}
            className={styles["card__poster"]}
          />
        </div>
      </Link>
      <div className={styles["card__body-container"]}>
        <span className={styles["card__span"]}>1:30min</span>
        <span className={styles["card__span"]}>1.5k</span>
      </div>
    </div>
  );
}
