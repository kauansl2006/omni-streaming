import styles from "./DeviceCard.module.css";

export const DeviceCard = ({ item }) =>  {
  return (
    <div className={styles["device-card__card"]}>
      <div className={styles["device-card__title-container"]}>
        <span className={styles["device-card__icon"]}>Icon</span>
        <h3 className={styles["device-card__heading"]}>{item.title}</h3>
      </div>
      <p className={styles["device-card__text"]}>{item.description}</p>
    </div>
  )
}