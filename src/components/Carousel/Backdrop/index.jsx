import styles from "./Backdrop.module.css";

import Image from "next/image";

import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineVolumeUp } from "react-icons/hi";

export const Backdrop = ({ item }) => {
  return (
    <div className={styles["backdrop__container"]}>
      <div className={styles["backdrop__image-container"]}>
        <Image
          src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
          alt={`${item.title ? item.title : item.name} image`}
          fill={true}
          className={styles["backdrop__image"]}
        />
      </div>

      <div className={styles["backdrop__text-backdrop-container"]}>
        <div className={styles["backdrop__text-container"]}>
          <h2 className={styles["backdrop__heading"]}>{item.title ? item.title : item.name}</h2>
          <p className={styles["backdrop__text"]}>{item.overview}</p>
        </div>

        <div className={styles["backdrop__buttons-container"]}>
          <button className={styles["backdrop__button--blue"]}>
            <FaPlay className={styles["backdrop__icon"]} />
            Play Now
          </button>

          <div className={styles["backdrop__icon-buttons-container"]}>
            <button className={styles["backdrop__icon-button"]}>
              <FaPlus className={styles["backdrop__icon"]} />
            </button>
            <button className={styles["backdrop__icon-button"]}>
              <AiOutlineLike className={styles["backdrop__icon"]} />
            </button>
            <button className={styles["backdrop__icon-button"]}>
              <HiOutlineVolumeUp className={styles["backdrop__icon"]} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}