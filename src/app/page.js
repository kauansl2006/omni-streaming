import styles from "./page.module.css";

import { Showcase } from "@/components/ShowcaseList/Showcase";
import { FaqList } from "@/components/FaqList";
import { SubscriptionList } from "@/components/SubscriptionList";
import { Banner } from "@/components/Banner";
import { BackgroundImage } from "@/components/BackgroundImage";
import { DevicesList } from "@/components/DevicesList";

import { GENRES } from "@/constants/genres";

export default async function HomePage() {
  return (
    <main className={styles["home__main"]}>
      <section
        id="background-image-section"
        className={styles["home__background-image-section"]}
      >
        <BackgroundImage />
      </section>

      <section
        id="categories-section"
        className={styles["home__categories-section"]}
      >
        <Showcase
          heading={"Explore our wide variety of categories"}
          text={
            "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          }
          items={GENRES}
          type={"categories"}
        />
      </section>

      <section id="devices-section" className={styles["home__devices-section"]}>
        <DevicesList />
      </section>

      <section id="faq-section" className={styles["home__faq-section"]}>
        <FaqList />
      </section>

      <section
        id="subscription-section"
        className={styles["home__subscription-section"]}
      >
        <SubscriptionList />
      </section>

      <section id="banner-section" className={styles["home__banner-section"]}>
        <Banner />
      </section>
    </main>
  );
}
