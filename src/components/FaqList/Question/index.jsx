"use client";

import { useState } from "react";

import styles from "./Question.module.css";

export const Question = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className={styles["question__container"]}>
      <div className={styles["question__number"]}>{item.question}</div>
      <div className={styles["question__text-container"]}>
        <h5 className={styles["question__heading"]}>{item.title}</h5>
        {isOpen &&  <p className={styles["question__p"]}>{item.description}</p>}
      </div>
      <button onClick={handleOpen} className={styles["question__icon"]}>
        {isOpen ? "-" : "+" }
      </button>
    </div>
  )
}