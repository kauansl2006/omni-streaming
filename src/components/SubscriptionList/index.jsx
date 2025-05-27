import styles from "./SubscriptionList.module.css";

import { SUBSCRIPTIONS } from "@/dataset/subscriptions";

import { SubscriptionCard } from "./SubscriptionCard";

export const SubscriptionList = () => {
  return (
    <>
      <div className={styles["subscription-list__heading-container"]}>
        <div className={styles["subscription-list__text-container"]}>
          <h2 className={styles["subscription-list__heading"]}>Choose the plan that's right for you</h2>
          <p className={styles["subscription-list__p"]}>
          Join omni+ and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
          </p>
        </div>
        <div className={styles["subscription-list__buttons-container"]}>
          <button className={styles["subscription-list__button"]}>Monthly</button>
          <button className={styles["subscription-list__button"]}>Yearly</button>
        </div>
      </div>

    <div className={styles["subscription-list__subscription-container"]}>
      {
        SUBSCRIPTIONS.map((subscription) => (
          <SubscriptionCard key={subscription.id} item={subscription} />
        ))
      }
    </div>
    </>
  )
}