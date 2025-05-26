import styles from "./SubscriptionCard.module.css";

import { SUBSCRIPTIONS } from "@/dataset/subscriptions";

import { SubscriptionCard } from "./SubscriptionCard";

export const SubscriptionSection = ({ id }) => {
  return (
    <section id={id ? id : null} className={styles["section-subscription__subscription"]}>
      <div className={styles["heading-container__subscription"]}>
        <div className={styles["text-container__subscription"]}>
          <h2 className={styles["heading__subscription"]}>Choose the plan that's right for you</h2>
          <p className={styles["p__subscription"]}>
          Join omni+ and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
          </p>
        </div>
        <div className={styles["buttons-container__subscription"]}>
          <button className={styles["button__subscription"]}>Monthly</button>
          <button className={styles["button__subscription"]}>Yearly</button>
        </div>
      </div>

    <div className={styles["subscription-container__subscription"]}>
      {
        SUBSCRIPTIONS.map((subscription) => (
          <SubscriptionCard key={subscription.id} item={subscription} />
        ))
      }
    </div>
    </section>
  )
}