import styles from "./page.module.css";

import { Showcase } from "@/components/MoviesAndShows/ShowcaseList/Showcase";
import { Banner } from "@/components/Home/Banner";
import { Carousel } from "@/components/MoviesAndShows/Carousel";
import { IMAGES } from "@/dataset/images";
import { ShowcaseList } from "@/components/MoviesAndShows/ShowcaseList";

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
