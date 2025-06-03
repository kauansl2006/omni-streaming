"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import styles from "./Header.module.css";

import { NAV_LINKS } from "@/constants/navLinks";

export const Header = () => {
    const currentPath = usePathname();
    const [isOpen, setIsOpen] = useState(false);
  
    const isActive = (href) => currentPath === href;
  return (
    <header className={styles["header__header"]}>
      <div className={styles["header__container"]}>
        <div className={styles["header__logo-container"]}>
          <Image
            src="/logo.svg"
            alt="Aplication Logo"
            width={250}
            height={90}
            className={styles["header__logo"]}
          />
        </div>
        <nav className={isOpen ? `${styles["header__nav--active"]}`: `${styles["header__nav"]}`}>
          <ul className={styles["header__ul"]}>
            {NAV_LINKS.map((link) => {
              return (
                <li key={link.name} className={styles["header__li"]}>
                  <Link href={link.path} className={
                    isActive(link.path) ? 
                    `${styles["header__item--active"]}` : 
                    `${styles["header__item"]}`
                  }>
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles["header__buttons-container"]}>
          <button className={styles["header__button"]}>Sign In</button>

          <button className={styles["header__menu-button"]} onClick={() => setIsOpen(!isOpen)}>
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>
    </header>
  );
};
