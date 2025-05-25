import styles from "./banner.module.css";

import Image from "next/image";

export const BannerComponent = () => {
  return (
    <section className={styles["section-banner__banner"]}>
      <div className={styles["container__banner"]}>
        <div className={styles["background-image__banner"]}>
          <Image 
            src="/banner.png"
            alt="Application Banner" 
            width={1920} 
            height={313} 
            className={styles["image__banner"]}
          />
        </div>
        <div className={styles["text-container__banner"]}>
          <h2 className={styles["heading__banner"]}>Start your free trial today!</h2>
          <p className={styles["text__banner"]}>This is a clear and concise call to action that encourages users to sign up for a free trial of omni+.</p>
        </div>
        <button className={styles["button__banner"]}>Start a Free Trail</button>
      </div>
    </section>
  )
}