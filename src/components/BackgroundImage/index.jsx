import styles from "./BackgroundImage.module.css";

import Image from "next/image";

import { FaPlay } from "react-icons/fa";

export const BackgroundImage = () => {
  return (
    <div className={styles["background-image__container"]}>
      <div className={styles["background-image__image-container"]}>
        <Image
          src="/background.png"
          alt="Background Image from Application"
          width={1920}
          height={860}
          className={styles["background-image__image"]}
        />
      </div>
      <div className={styles["background-image__text-image-container"]}>
        <div className={styles["background-image__text-container"]}>
          <h1 className={styles["background-image__heading"]}>
            The Best Streaming Experience
          </h1>
          <p className={styles["background-image__text"]}>
            omni+ is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            omni+, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more.
            You can also create your own watchlists, so you can easily find
            the content you want to watch.
          </p>
          <p className={styles["background-image__text--mobile"]}>
            omni+ is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
          </p>
        </div>
        <button className={styles["background-image__button"]}>
          <FaPlay className={styles["background-image__icon-button"]} />
          Start Watching Now
        </button>
      </div>
    </div>
  );
}