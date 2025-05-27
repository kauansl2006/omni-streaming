import styles from "./Backdrop.module.css";

import Image from "next/image";

export const Backdrop = ({ item }) => {
  return (
    <div className={styles["backdrop__container"]}>

      <div className={styles["backdrop__image-container"]}>
        <Image
          src={item.backdrop}
          alt={`${item.title} image`}
          width={1920}
          height={860}
          className={styles["backdrop__image"]}
        />
      </div>

      <div className={styles["backdrop__text-backdrop-container"]}>
        <div className={styles["backdrop__text-container"]}>
          <h2 className={styles["backdrop__heading"]}>{item.title}</h2>
          <p className={styles["backdrop__text"]}>{item.description}</p>
        </div>

        <div className={styles["backdrop__buttons-container"]}>
          <button className={styles["backdrop__button-play-now"]}>Play Now</button>
          <button className={styles["backdrop__button-icon"]}>Icon 1</button>
          <button className={styles["backdrop__button-icon"]}>Icon 2</button>
          <button className={styles["backdrop__button-icon"]}>Icon 3</button>
        </div>
      </div>
    </div>
  )
}