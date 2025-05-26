import styles from "./SubscriptionCard.module.css"

export const SubscriptionCard = ({ item }) => {
  return (
    <div className={styles["card__subscription"]}>
      <div className={styles["text-container__subscription"]}>
        <h4 className={styles["heading__subscription"]}>{item.title}</h4>
        <p className={styles["p__subscription"]}>{item.description}</p>
      </div>

      <div className={styles["price-container__subscription"]}>
        <h3 className={styles["price__subcription"]}>{item.price}</h3>
        <p className={styles["price-text__subscription"]}>{`/${item.type}`}</p>
      </div>

      <div className={styles["buttons-container"]}>
        <button className={styles["button__subscription"]}>Start Free Trial</button>
        <button className={styles["button__subscription"]}>Choose Plan</button>
      </div>
    </div>
  )
}