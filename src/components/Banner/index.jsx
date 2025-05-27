import styles from "./Banner.module.css";

import Image from "next/image";

export const Banner = () => {
  return (
    <>
      <div className={styles["banner__container"]}>
        <div className={styles["banner__background-image"]}>
          <Image 
            src="/banner.png"
            alt="Application Banner" 
            width={1920} 
            height={313} 
            className={styles["banner__image"]}
          />
        </div>
        <div className={styles["banner__text-container"]}>
          <h2 className={styles["banner__heading"]}>Start your free trial today!</h2>
          <p className={styles["banner__text"]}>This is a clear and concise call to action that encourages users to sign up for a free trial of omni+.</p>
        </div>
        <button className={styles["banner__button"]}>Start a Free Trail</button>
      </div>
    </>
  )
}