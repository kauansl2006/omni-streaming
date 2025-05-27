import styles from "./Header.module.css";

import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles["header__header"]}>
      <div className={styles["header__container"]}>
        <div className={styles["header__logo-container"]}>
          <Image
            src="/logo.svg"
            alt="Aplication Logo"
            width={500}
            height={500}
            className={styles["header__logo"]}
          />
        </div>
        <nav className={styles["header__nav"]}>
          <ul className={styles["header__ul"]}>
            <li className={styles["header__li"]}>
              <Link href="/" className={styles["header__item"]}>
                Home
              </Link>
            </li>
            <li className={styles["header__li"]}>
              <Link href="/movies-and-shows" className={styles["header__item"]}>
                Movies & Shows
              </Link>
            </li>
            <li className={styles["header__li"]}>
              <Link href="/suport" className={styles["header__item"]}>
                Suport
              </Link>
            </li>
            <li className={styles["header__li"]}>
              <Link href="/subscription" className={styles["header__item"]}>
                Subscription
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles["header__buttons-container"]}>
          <button>Sign In</button>
        </div>
      </div>
    </header>
  );
};
