import styles from "./error.module.css";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className={styles["error__main"]}>
      <section className={styles["error__section"]}>
        <div className={styles["error__text-container"]}>
          <h2 className={styles["error__heading"]}>404 - Not Found</h2>
          <p className={styles["error__text"]}>
            Could not find requested resource
          </p>
        </div>

        <button className={styles["error__button"]}>
          <Link className={styles["error__link"]} href="/">
            Return to Home
          </Link>
        </button>
      </section>
    </main>
  );
}
