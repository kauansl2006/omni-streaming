import styles from "./page.module.css";

import { getDiscoverMovies, getDiscoverShows } from "@/lib/data";
import { ShowcaseComponent } from "@/components/Showcase";

export default async function MoviesAndShowsPage() {
  const discoverMovies = await getDiscoverMovies();
  const discoverShows = await getDiscoverShows();

  return (
    <main className={styles["main__movies-and-shows"]}>
      <section className={styles["section__movies-and-shows"]}>
        <div className={styles["container__movies-and-shows"]}>
          <div className={styles["text-container__movies-and-shows"]}>
            <h6 className={styles["h6__movies-and-shows"]}>Movies</h6>
          </div>

          <div className={styles["showcase-container__movies-and-shows"]}>
            <ShowcaseComponent
              heading={"Discover Movies"}
              items={discoverMovies}
            />
          </div>
        </div>
      </section>

      <section className={styles["section__movies-and-shows"]}>
        <div className={styles["container__movies-and-shows"]}>
          <div className={styles["text-container__movies-and-shows"]}>
            <h6 className={styles["h6__movies-and-shows"]}>TV Shows</h6>
          </div>

          <div className={styles["showcase-container__movies-and-shows"]}>
            <ShowcaseComponent
              heading={"Discover TV Shows"}
              items={discoverShows}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
