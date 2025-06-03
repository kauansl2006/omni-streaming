"use client";

import { useEffect } from "react";

import styles from "./error.module.css";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles["error__main"]}>
      <section className={styles["error__section"]}>
        <div className={styles["error__text-container"]}>
          <h2 className={styles["error__heading"]}>Something went wrong!</h2>
          <p className={styles["error__text"]}>
            Could not find requested resource
          </p>
        </div>
        <button onClick={() => reset()} className={styles["error__button"]}>
          Try again
        </button>
      </section>
    </main>
  );
}
