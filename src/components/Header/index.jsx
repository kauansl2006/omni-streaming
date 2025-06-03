"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import styles from "./Header.module.css";

import { NAV_LINKS } from "@/constants/navLinks";

export const Header = () => {
    const currentPath = usePathname();
  
    const isActive = (href) => currentPath === href;
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

          <button className={styles["header__menu-button"]}>
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </header>
  );
};
