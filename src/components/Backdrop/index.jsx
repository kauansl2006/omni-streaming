import styles from "./backdrop.module.css";

import Image from "next/image";

export const BackdropComponent = ({ item }) => {
  return (
    <div className={styles["backdrop-container__backdrop"]}>

      <div className={styles["image-container__backdrop"]}>
        <Image
          src={item.backdrop}
          alt={`${item.title} image`}
          width={1920}
          height={860}
          className={styles["image__backdrop"]}
        />
      </div>

      <div className={styles["text-backdrop-container__backdrop"]}>
        <div className={styles["text-container__backdrop"]}>
          <h2 className={styles["heading__backdrop"]}>{item.title}</h2>
          <p className={styles["text__backdrop"]}>{item.description}</p>
        </div>

        <div className={styles["buttons-container__backdrop"]}>
          <button className={styles["button-play-now__backdrop"]}>Play Now</button>
          <button className={styles["button-icon__backdrop"]}>Icon 1</button>
          <button className={styles["button-icon__backdrop"]}>Icon 2</button>
          <button className={styles["button-icon__backdrop"]}>Icon 3</button>
        </div>
      </div>
    </div>
  )
}