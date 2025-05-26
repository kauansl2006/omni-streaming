"use client";

import { useState } from "react";

import styles from "./question.module.css";

export const Question = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className={styles["question__question"]}>
      <div className={styles["number__question"]}>{item.question}</div>
      <div className={styles["text-container_question"]}>
        <h5 className={styles["heading__question"]}>{item.title}</h5>
        {isOpen &&  <p className={styles["p__question"]}>{item.description}</p>}
      </div>
      <button onClick={handleOpen} className={styles["icon__question"]}>
        {isOpen ? "-" : "+" }
      </button>
    </div>
  )
}