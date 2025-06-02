"use client";

import { useState } from "react";

import styles from "./Season.module.css";
import { Episode } from "./Episode";

export const Season = ({ season }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div className={styles["season__container"]}>
      <div className={styles["season__subcontainer"]}>
        <div className={styles["season__text-container"]}>
          <h5 className={styles["season__heading"]}>{ season.name }</h5>
          <p className={styles["season__text"]}>{ season.episode_count } Episodes</p>
        </div>
        <button onClick={handleOpen} className={styles["season__button"]}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {
        isOpen && (
          <div className={styles["season__subcontainer"]}>
            {season.episodes.map((episode) => (
              <Episode key={episode.id} episode={episode} />
            ))}
          </div>
        )
      }
    </div>
  )
}