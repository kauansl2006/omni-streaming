import styles from "./page.module.css";

import { Suspense } from "react";

import { TheMovieDbService } from "@/services/theMovieDbService";

import { Backdrop } from "@/components/Carousel/Backdrop";
import { Banner } from "@/components/Banner";
import { DetailsList } from "@/components/DetailsList";

export default async function ShowPageOpen({ params }) {
  const { showId } = await params;

  const show = await TheMovieDbService.getDetailsById(Number(showId), "show");
  return (
    <main className={styles["show-open__main"]}>
      <section className={styles["show-open__backdrop-section"]}>
        <Suspense
          fallback={
            <div className={styles["show-open__loading"]}>Loading...</div>
          }
        >
          <Backdrop item={show} />
        </Suspense>
      </section>

      <section className={styles["show-open__details-section"]}>
        <DetailsList id={showId} type={"tv"} />
      </section>

      <section className={styles["show-open__banner-section"]}>
        <Banner />
      </section>
    </main>
  );
}
