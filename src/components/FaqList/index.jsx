import styles from "./FaqList.module.css";

import { QUESTIONS } from "@/constants/questions";

import { Question } from "@/components/FaqList/Question";

export const FaqList = () => {
  return (
    <>
      <div className={styles["faq-list__heading-container"]}>
        <div className={styles["faq-list__text-container"]}>
          <h2 className={styles["faq-list__heading"]}>Frequently Asked Questions</h2>
          <p className={styles["faq-list__text"]}>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about omni+.</p>
        </div>
        <button className={styles["faq-list__button"]}>Ask a Question</button>
      </div>

      <div className={styles["faq-list__faq-container"]}>
        <div className={styles["faq-list__items-container"]}>
          {
            QUESTIONS.slice(0,4).map((question) => (
              <Question key={question.id} item={question} />
            ))
          }
        </div>
        <div className={styles["faq-list__items-container"]}>
          {
            QUESTIONS.slice(4,8).map((question) => (
              <Question key={question.id} item={question} />
            ))
          }
        </div>
      </div>
    </>
  )
}
