"use client";

import { usePathname } from "next/navigation";

import styles from "./NavLink.module.css";

import Link from "next/link";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/movies-and-shows", name: "Movies & Shows" },
  { path: "/suport", name: "Suport" },
  { path: "/subscription", name: "Subscription" },
];

export const NavLink = () => {
  const currentPath = usePathname();

  const isActive = (href) => currentPath === href;

  return (
    <nav className={styles["nav-link__nav"]}>
      <ul className={styles["nav-link__ul"]}>
        {navLinks.map((link) => {
          return (
            <li key={link.name} className={styles["nav-link__li"]}>
              <Link href={link.path} className={
                isActive(link.path) ? 
                `${styles["nav-link__item--active"]}` : 
                `${styles["nav-link__item"]}`
              }>
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}