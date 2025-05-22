import Image from "next/image";
import styles from "./card.module.css";

export default function CardComponent({ data }) {
  return (
    <div className={styles["card__card"]}>
      <div className={styles["card-poster__card"]}>
        <Image
          src={"https://image.tmdb.org/t/p/original" + data.poster_path}
          alt={`${data.title ? data.title : data.name} poster`}
          width={500}
          height={500}
        />
      </div>
      <div className={styles["card-body__card"]}>
        <h5 className={styles["original-title__card"]}>
          {data.original_title ? data.original_title : data.original_name}
        </h5>
        <p className={styles["overview__card"]}>{data.overview}</p>
        <div className={styles["span-container__card"]}>
          <span>1:30min</span>
          <span>1.5k</span>
        </div>
        <button className={styles["button__card"]}>Play Now</button>
      </div>
    </div>
  );
}
