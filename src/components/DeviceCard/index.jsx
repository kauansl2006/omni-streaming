import styles from "./device-card.module.css";

export const DeviceCard = ({ item }) =>  {
  return (
    <div className={styles["card__device"]}>
      <div className={styles["title-container__device"]}>
        <span className={styles["icon__device"]}>Icon</span>
        <h3 className={styles["heading__device"]}>{item.title}</h3>
      </div>
      <p className={styles["p__device"]}>{item.description}</p>
    </div>
  )
}