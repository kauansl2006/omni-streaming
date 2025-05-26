import styles from "./category.module.css";

export const Category = ({ item }) => {
  return (
    <div className={styles["card__card"]}>
        <h5 className={styles["category-name__card"]}>
          {item.name}
        </h5>
    </div>
  );
}
