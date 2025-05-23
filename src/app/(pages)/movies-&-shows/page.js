import styles from "./page.module.css";

import { MOVIES } from "@/app/_dataset/movies";
import { SHOWS } from "@/app/_dataset/shows";

import ShowcaseComponent from "@/app/_components/showcase/showcase";
import CardsListComponent from "@/app/_components/cards-list/cards-list";

export default function MoviesAndShowsPage() {
  return (
    <main className={styles["main__movies-and-shows"]}>
      <section className={styles["section__movies-and-shows"]}>
        <div className={styles["container__movies-and-shows"]}>
          <div className={styles["text-container__movies-and-shows"]}>
            <h6 className={styles["h6__movies-and-shows"]}>Movies</h6>
          </div>

          <div className={styles["showcase-container__movies-and-shows"]}>
            <ShowcaseComponent heading={"Discover Movies"}>
              <CardsListComponent items={MOVIES} />
            </ShowcaseComponent>
          </div>
        </div>
      </section>

      <section className={styles["section__movies-and-shows"]}>
        <div className={styles["container__movies-and-shows"]}>
          <div className={styles["text-container__movies-and-shows"]}>
            <h6 className={styles["h6__movies-and-shows"]}>TV Shows</h6>
          </div>

          <div className={styles["showcase-container__movies-and-shows"]}>
            <ShowcaseComponent heading={"Discover TV Shows"}>
              <CardsListComponent items={SHOWS} />
            </ShowcaseComponent>
          </div>
        </div>
      </section>
    </main>
  );
}
