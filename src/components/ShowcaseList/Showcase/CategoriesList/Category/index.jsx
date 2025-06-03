import styles from "./Category.module.css"; 

import { FaArrowRight } from "react-icons/fa";

import Image from "next/image"; 

export const Category = ({ item }) => {
  return (
    <div className={styles["category__card"]}>
        <div className={styles["category__poster-container"]}>
          <Image
            src={item.image}
            alt={`${item.name} image`}
            width={215}
            height={252}
            className={styles["category__poster"]}
          />
        </div>
      <div className={styles["category__body-container"]}>
        <h5 className={styles["category__name"]} >{item.name}</h5>
        <span className={styles["category__arrow"]}><FaArrowRight /></span>
      </div>
    </div>
  );
}
