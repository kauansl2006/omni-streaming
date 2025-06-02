import styles from "./Header.module.css";

import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";

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
        <NavLink />
        <div className={styles["header__buttons-container"]}>
          <button className={styles["header__button"]}>Sign In</button>
        </div>
      </div>
    </header>
  );
};
