import styles from "./Footer.module.css";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles["footer__footer"]}>
      <div className={styles["container__footer"]}>
        <div className={styles["subcontainer__footer"]}>
          <h6 className={styles["heading__footer"]}>Home</h6>
          <ul className={styles["ul__footer"]}>
            <li className={styles["li__footer"]}>
              <Link href="/#categories-section" className={styles["item__footer"]}>
                Categories
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/#devices-section" className={styles["item__footer"]}>
                Devices
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/#subscription-section" className={styles["item__footer"]}>
                Pricing
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/#faq-section" className={styles["item__footer"]}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["subcontainer__footer"]}>
          <h6 className={styles["heading__footer"]}>Movies</h6>
          <ul className={styles["ul__footer"]}>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#movies-gernres" className={styles["item__footer"]}>
                Genres
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#discover-movies" className={styles["item__footer"]}>
                Discover
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#popular-movies" className={styles["item__footer"]}>
                Popular
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#top-rated-movies" className={styles["item__footer"]}>
                Top Rated
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#upcoming-movies" className={styles["item__footer"]}>
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["subcontainer__footer"]}>
          <h6 className={styles["heading__footer"]}>Shows</h6>
          <ul className={styles["ul__footer"]}>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#shows-gernres" className={styles["item__footer"]}>
                Genres
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#discover-movies" className={styles["item__footer"]}>
                Discover
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#airing-today-movies" className={styles["item__footer"]}>
                Airing Today
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#on-the-air" className={styles["item__footer"]}>
              On The Air 
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#popular-movies" className={styles["item__footer"]}>
                Popular
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/movies-and-shows#top-rated-movies" className={styles["item__footer"]}>
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["subcontainer__footer"]}>
          <h6 className={styles["heading__footer"]}>Suport</h6>
          <ul className={styles["ul__footer"]}>
            <li className={styles["li__footer"]}>
              <Link href="/suport#suport-section" className={styles["item__footer"]}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["subcontainer__footer"]}>
          <h6 className={styles["heading__footer"]}>Subscription</h6>
          <ul className={styles["ul__footer"]}>
            <li className={styles["li__footer"]}>
              <Link href="/subscription#plans-section" className={styles["item__footer"]}>
                Plans
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="/subscription#comparasion-section" className={styles["item__footer"]}>
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["subcontainer__footer"]}>
          <h6 className={styles["heading__footer"]}>Connect With Us</h6>
          <ul className={styles["ul__footer"]}>
            <li className={styles["li__footer"]}>
              <Link href="#" className={styles["item__footer"]}>
                item 1
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="#" className={styles["item__footer"]}>
                item 2
              </Link>
            </li>
            <li className={styles["li__footer"]}>
              <Link href="#" className={styles["item__footer"]}>
                item 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["container__footer"]}>
        <p className={styles["text__footer"]}>
          @2025 omni-streaming, All Rights Reserved
        </p>
        <div className={styles["terms-and-privacy__footer"]}>
          <Link href="#" className={styles["link__footer"]}>
            Terms of Use
          </Link>
          |
          <Link href="#" className={styles["link__footer"]}>
            Privacy Policy
          </Link>
          |
          <Link href="#" className={styles["link__footer"]}>
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
