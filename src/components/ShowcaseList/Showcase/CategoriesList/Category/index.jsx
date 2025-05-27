import styles from "./Category.module.css";

export const Category = ({ item }) => {
  return (
    <div className={styles["category__card"]}>
        <h5 className={styles["category__name"]}>
          {item.name}
        </h5>
    </div>
  );
}
