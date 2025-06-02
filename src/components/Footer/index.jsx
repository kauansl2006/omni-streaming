import styles from "./Footer.module.css";

import Link from "next/link";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles["footer__footer"]}>
      <div className={styles["footer__container"]}>
        <div className={styles["footer__subcontainer"]}>
          <h6 className={styles["footer__heading"]}>Home</h6>
          <ul className={styles["footer__ul"]}>
            <li className={styles["footer__li"]}>
              <Link href="/#categories-section" className={styles["footer__item"]}>
                Categories
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/#devices-section" className={styles["footer__item"]}>
                Devices
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/#subscription-section" className={styles["footer__item"]}>
                Pricing
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/#faq-section" className={styles["footer__item"]}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer__subcontainer"]}>
          <h6 className={styles["footer__heading"]}>Movies</h6>
          <ul className={styles["footer__ul"]}>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#movies-gernres" className={styles["footer__item"]}>
                Genres
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#discover-movies" className={styles["footer__item"]}>
                Discover
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#popular-movies" className={styles["footer__item"]}>
                Popular
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#top-rated-movies" className={styles["footer__item"]}>
                Top Rated
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#upcoming-movies" className={styles["footer__item"]}>
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer__subcontainer"]}>
          <h6 className={styles["footer__heading"]}>Shows</h6>
          <ul className={styles["footer__ul"]}>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#shows-gernres" className={styles["footer__item"]}>
                Genres
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#discover-movies" className={styles["footer__item"]}>
                Discover
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#airing-today-movies" className={styles["footer__item"]}>
                Airing Today
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#on-the-air" className={styles["footer__item"]}>
              On The Air 
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#popular-movies" className={styles["footer__item"]}>
                Popular
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/movies-and-shows#top-rated-movies" className={styles["footer__item"]}>
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer__subcontainer"]}>
          <h6 className={styles["footer__heading"]}>Suport</h6>
          <ul className={styles["footer__ul"]}>
            <li className={styles["footer__li"]}>
              <Link href="/suport#suport-section" className={styles["footer__item"]}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer__subcontainer"]}>
          <h6 className={styles["footer__heading"]}>Subscription</h6>
          <ul className={styles["footer__ul"]}>
            <li className={styles["footer__li"]}>
              <Link href="/subscription#subscription-section" className={styles["footer__item"]}>
                Plans
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="/subscription#comparasion-section" className={styles["footer__item"]}>
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer__subcontainer"]}>
          <h6 className={styles["footer__heading"]}>Connect With Us</h6>
          <ul className={styles["footer__ul-social-media"]}>
            <li className={styles["footer__li"]}>
              <Link href="#" className={styles["footer__item-social-media"]}>
                <FaFacebook />
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="#" className={styles["footer__item-social-media"]}>
                <FaXTwitter />
              </Link>
            </li>
            <li className={styles["footer__li"]}>
              <Link href="#" className={styles["footer__item-social-media"]}>
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["footer__container"]}>
        <p className={styles["footer__text"]}>
          @2025 omni-streaming, All Rights Reserved
        </p>
        <div className={styles["footer__terms-and-privacy"]}>
          <Link href="#" className={styles["footer__link"]}>
            Terms of Use
          </Link>
          |
          <Link href="#" className={styles["footer__link"]}>
            Privacy Policy
          </Link>
          |
          <Link href="#" className={styles["footer__link"]}>
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
