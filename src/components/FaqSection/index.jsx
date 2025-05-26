import styles from "./FaqSection.module.css"; 

import { QUESTIONS } from "@/dataset/questions";

import { Question } from "@/components/FaqSection/Question"

export const FaqSection = ({ id }) => {
  return (
    <section id={id ? id : null} className={styles["section-faq__faq"]}>
      <div className={styles["heading-container__faq"]}>
        <div className={styles["text-container__faq"]}>
          <h2 className={styles["heading__faq"]}>Frequently Asked Questions</h2>
          <p className={styles["p__faq"]}>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about omni+.</p>
        </div>
        <button className={styles["button__faq"]}>Ask a Question</button>
      </div>

      <div className={styles["faq-container__faq"]}>
        <div className={styles["items-container"]}>
          {
            QUESTIONS.slice(0,4).map((question) => (
              <Question key={question.id} item={question} />
            ))
          }
        </div>
        <div className={styles["items-container"]}>
          {
            QUESTIONS.slice(4,8).map((question) => (
              <Question key={question.id} item={question} />
            ))
          }
        </div>
      </div>
    </section>
  )
}