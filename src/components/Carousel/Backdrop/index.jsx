import styles from "./Backdrop.module.css";

import Image from "next/image";

export const Backdrop = ({ item }) => {
  return (
    <div className={styles["backdrop__container"]}>
      <div className={styles["backdrop__image-container"]}>
        <Image
          src={item.backdrop}
          alt={`${item.title} image`}
          fill={true}
          objectFit="cover"
          className={styles["backdrop__image"]}
        />
      </div>

      <div className={styles["backdrop__text-backdrop-container"]}>
        <div className={styles["backdrop__text-container"]}>
          <h2 className={styles["backdrop__heading"]}>{item.title}</h2>
          <p className={styles["backdrop__text"]}>{item.description}</p>
        </div>

        <div className={styles["backdrop__buttons-container"]}>
          <button className={styles["backdrop__button--blue"]}>Play Now</button>

          <div className={styles["backdrop__icon-buttons-container"]}>
            <button className={styles["backdrop__icon-button"]}>Icon 1</button>
            <button className={styles["backdrop__icon-button"]}>Icon 2</button>
            <button className={styles["backdrop__icon-button"]}>Icon 3</button>
          </div>
        </div>
      </div>
    </div>
  )
}