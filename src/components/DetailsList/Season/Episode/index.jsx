import styles from "./Episode.module.css";

import Image from "next/image";

export const Episode = ({ episode }) => {
  return (
  <div className={styles["episode__container"]} >
    <h3 className={styles["episode__number"]}>{episode.episode_number}</h3>

      {
        episode.still_path ? (
          <Image
            src={"https://image.tmdb.org/t/p/original" + episode.still_path}
            alt={episode.name}
            width={172}
            height={118}
            className={styles["episode__still"]}
          />
        ) : (
          <div className={styles["episode__still"]}>Not Available</div>
        )
      }

    <div className={styles["episode__text-container"]}>
      <h5 className={styles["episode__heading"]}>{ episode.name ? episode.name : "episode name not found" }</h5>
      <p className={styles["episode__text"]}>{ episode.overview ? episode.overview : "overview not found" }</p>
    </div>
  </div>
  )
}