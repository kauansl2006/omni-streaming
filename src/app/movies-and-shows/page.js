import styles from "./page.module.css";

import { Banner } from "@/components/Banner";
import { Carousel } from "@/components/Carousel";
import { IMAGES } from "@/constants/images";
import { ShowcaseList } from "@/components/ShowcaseList";

export default function MoviesAndShowsPage() {
  return (
    <main className={styles["movies-and-shows__main"]}>
      <section className={styles["movies-and-shows__carousel-section"]}>
        <Carousel items={IMAGES} />
      </section>

      <section className={styles["movies-and-shows__section"]}>
        <ShowcaseList type="Movies" />
      </section>

      <section className={styles["movies-and-shows__section"]}>
        <ShowcaseList type="Shows" />
      </section>

      <section
        id="banner-section"
        className={styles["movies-and-shows__banner-section"]}
      >
        <Banner />
      </section>
    </main>
  );
}
