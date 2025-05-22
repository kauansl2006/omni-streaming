import styles from "./page.module.css";
import MoviesListComponent from "@/app/_components/movies-list/movies-list";
import ShowsListComponent from "@/app/_components/shows-list/shows-list";
import { MOVIES } from "@/app/_dataset/movies";
import { SHOWS } from "@/app/_dataset/shows";

export default async function MoviesAndShowsPage() {
  return (
    <main className={styles["main__mands"]}>
      <section className={styles["section__mands"]}>
        <div className={styles["container__mands"]}>
          <div className={styles["subcontainer__mands"]}>
            <div className={styles["text-container__mands"]}>
              <h6 className={styles["heading__mands"]}>Movies</h6>
            </div>
          </div>

          <div className={styles["subcontainer__mands"]}>
            <div className={styles["container__mands"]}>
              <div className={styles["subcontainer-movies__mands"]}>
                <h2 className={styles["heading__mands"]}>Discover Movies</h2>
                <div className={styles["buttons-container__mands"]}>
                  <button className={styles["button__mands"]}>{" < "}</button>
                  <button className={styles["button__mands"]}>{" > "}</button>
                </div>
              </div>
              <MoviesListComponent movies={MOVIES} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles["section__mands"]}>
        <div className={styles["container__mands"]}>
          <div className={styles["subcontainer__mands"]}>
            <div className={styles["text-container__mands"]}>
              <h6 className={styles["heading__mands"]}>Shows</h6>
            </div>
          </div>

          <div className={styles["subcontainer__mands"]}>
            <div className={styles["container__mands"]}>
              <div className={styles["subcontainer-shows__mands"]}>
                <h2 className={styles["heading__mands"]}>TV Shows</h2>
                <div className={styles["buttons-container__mands"]}>
                  <button className={styles["button__mands"]}>{" < "}</button>
                  <button className={styles["button__mands"]}>{" > "}</button>
                </div>
              </div>
              <ShowsListComponent shows={SHOWS} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
