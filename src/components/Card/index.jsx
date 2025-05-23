import Image from "next/image";
import styles from "./card.module.css";

export const CardComponent = ({ item }) => {
  return (
    <div className={styles["card__card"]}>
      <div className={styles["card-poster__card"]}>
        <Image
          src={"https://image.tmdb.org/t/p/original" + item.poster_path}
          alt={`${item.title ? item.title : item.name} poster`}
          width={500}
          height={500}
        />
      </div>
      <div className={styles["card-body__card"]}>
        <h5 className={styles["original-title__card"]}>
          {item.original_title ? item.original_title : item.original_name}
        </h5>
        <p className={styles["overview__card"]}>{item.overview}</p>
        <div className={styles["span-container__card"]}>
          <span>1:30min</span>
          <span>1.5k</span>
        </div>
        <button className={styles["button__card"]}>Play Now</button>
      </div>
    </div>
  );
}
