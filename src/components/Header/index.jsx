import styles from "./Header.module.css";

import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles["header__header"]}>
      <div className={styles["container__header"]}>
        <div className={styles["logo-container__header"]}>
          <Image
            src="/logo.svg"
            alt="Aplication Logo"
            width={500}
            height={500}
            className={styles["logo__header"]}
          />
        </div>
        <nav className={styles["nav__header"]}>
          <ul className={styles["ul__header"]}>
            <li className={styles["li__header"]}>
              <Link href="/" className={styles["item__header"]}>
                Home
              </Link>
            </li>
            <li className={styles["li__header"]}>
              <Link href="/movies-and-shows" className={styles["item__header"]}>
                Movies & Shows
              </Link>
            </li>
            <li className={styles["li__header"]}>
              <Link href="/suport" className={styles["item__header"]}>
                Suport
              </Link>
            </li>
            <li className={styles["li__header"]}>
              <Link href="/subscription" className={styles["item__header"]}>
                Subscription
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles["buttons-container__header"]}>
          <button>Sign In</button>
        </div>
      </div>
    </header>
  );
};
