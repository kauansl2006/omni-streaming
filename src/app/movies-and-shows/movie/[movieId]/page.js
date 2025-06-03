import styles from "./page.module.css";

import { Suspense } from "react";

import { fetchDetailsById } from "@/lib/data";

import { Backdrop } from "@/components/Carousel/Backdrop";
import { Banner } from "@/components/Banner";
import { DetailsList } from "@/components/DetailsList";

export default async function MoviePageOpen({ params }) {
  const { movieId } = await params;

  const movie = await fetchDetailsById(Number(movieId), "movie");
  return (
    <main className={styles["movie-open__main"]}>
      <section className={styles["movie-open__backdrop-section"]}>
        <Suspense
          fallback={
            <div className={styles["movie-open__loading"]}>Loading...</div>
          }
        >
          {movie.backdrop_path && <Backdrop item={movie} />}
        </Suspense>
      </section>

      <section className={styles["movie-open__details-section"]}>
        <DetailsList id={movieId} type={"movie"} />
      </section>

      <section className={styles["movie-open__banner-section"]}>
        <Banner />
      </section>
    </main>
  );
}
