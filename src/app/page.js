import styles from "./page.module.css";

import { fetchDiscoverMovies } from "@/lib/data";

import { Showcase } from "@/components/Showcase";
import { FaqList } from "@/components/Home/FaqList";
import { SubscriptionList } from "@/components/Home/SubscriptionList";
import { Banner } from "@/components/Home/Banner";
import { BackgroundImage } from "@/components/Home/BackgroundImage";
import { DevicesList } from "@/components/Home/DevicesList";

export default async function HomePage() {
  const discoverMovies = await fetchDiscoverMovies();

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
        <Showcase heading={"Movies"} items={discoverMovies} type={"movies"} />
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
