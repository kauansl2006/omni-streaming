import styles from "./showcase.module.css";

export const ShowcaseComponent = ({ heading, children }) => {
  return (
    <section className={styles["section__showcase"]}>
      <div className={styles["container__showcase"]}>
        <div className={styles["heading-container__showcase"]}>
          <h2 className={styles["h2__showcase"]}>{heading}</h2>
          <div className={styles["buttons__showcase"]}>
            <button className={styles["button__showcase"]}>{"<"}</button>
            <button className={styles["button__showcase"]}>{">"}</button>
          </div>
        </div>

        <div className={styles["cards-container__showcase"]}>{children}</div>
      </div>
    </section>
  );
}
