"use client";

import { useRouter } from "next/navigation";

import styles from "./Card.module.css";

import Image from "next/image";

import { FaClock, FaEye } from "react-icons/fa6";

export const Card = ({ item }) => {
  const router = useRouter();
  return (
    <div className={styles["card__card"]} onClick={
      () => router.push(
        `/movies-and-shows/${item.title ? 
        "movie" : 
        "show"}/${item.id}`
      )}>
        <div className={styles["card__poster-container"]}>
          <Image
            src={"https://image.tmdb.org/t/p/original" + item.poster_path}
            alt={`${item.title ? item.title : item.name} poster`}
            width={243}
            height={281}
            className={styles["card__poster"]}
          />
        </div>
      <div className={styles["card__body-container"]}>
        <span className={styles["card__span"]}><FaClock />1:30min</span>
        <span className={styles["card__span"]}><FaEye />1.5k</span>
      </div>
    </div>
  );
}
