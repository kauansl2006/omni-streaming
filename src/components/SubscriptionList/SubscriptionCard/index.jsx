import styles from "./SubscriptionCard.module.css"

export const SubscriptionCard = ({ item }) => {
  return (
    <div className={styles["subscription-card__card"]}>
      <div className={styles["subscription-card__text-container"]}>
        <h4 className={styles["subscription-card__heading"]}>{item.title}</h4>
        <p className={styles["subscription-card__p"]}>{item.description}</p>
      </div>

      <div className={styles["subscription-card__price-container"]}>
        <h3 className={styles["subscription-card__price__subcription"]}>{item.price}</h3>
        <p className={styles["subscription-card__price-text"]}>{`/${item.type}`}</p>
      </div>

      <div className={styles["subscription-card__buttons-container"]}>
        <button className={styles["subscription-card__button"]}>Start Free Trial</button>
        <button className={styles["subscription-card__button"]}>Choose Plan</button>
      </div>
    </div>
  )
}