import styles from "./page.module.css";

import Image from "next/image";

import { fetchMovieGenres, fetchDiscoverMovies } from "@/lib/data";
import { ShowcaseComponent } from "@/components/Showcase";

import { DEVICES } from "@/dataset/devices";
import { DeviceCardComponent } from "@/components/DeviceCard";
import { FaqSectionComponent } from "@/components/FaqSection";
import { SubscriptionSectionComponent } from "@/components/SubscriptionSection";
import { BannerComponent } from "@/components/Banner";

export default async function HomePage() {
  const movieGenresData = await fetchMovieGenres();
  const discoverMoviesData = await fetchDiscoverMovies();

  const [movieGenres, discoverMovies] = await Promise.all([
    movieGenresData,
    discoverMoviesData,
  ]);

  return (
    <main className={styles["main__home"]}>
      <section className={styles["image-section__home"]}>
        <div className={styles["image-container__home"]}>
          <div className={styles["background-image-container__home"]}>
            <Image
              src="/background.png"
              alt="Background Image from Application"
              width={1920}
              height={860}
              className={styles["image__home"]}
            />
          </div>
          <div className={styles["text-image-container__home"]}>
            <div className={styles["text-container__home"]}>
              <h1 className={styles["heading__home"]}>
                The Best Streaming Experience
              </h1>
              <p className={styles["text__home"]}>
                omni+ is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere. With
                omni+, you can enjoy a wide variety of content, including the
                latest blockbusters, classic movies, popular TV shows, and more.
                You can also create your own watchlists, so you can easily find
                the content you want to watch.
              </p>
            </div>
            <button className={styles["button__home"]}>
              Start Watching Now
            </button>
          </div>
        </div>
      </section>

      <section className={styles["section-movies__home"]}>
        <div className={styles["showcase-container__home"]}>
          <ShowcaseComponent
            heading={"Explore our wide variety of categories"}
            items={movieGenres}
            type={"categories"}
          />
          <ShowcaseComponent
            heading={"Movies"}
            items={discoverMovies}
            type={"movies"}
          />
        </div>
      </section>
      <section className={styles["section-devices__home"]}>
        <div className={styles["text-devices-container__home"]}>
          <h2 className={styles["h2-devices__home"]}>
            We Provide you streaming experience across various devices.
          </h2>
          <p className={styles["p-devices__home"]}>
            With omni+ , you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>
        <div className={styles["devices-container__home"]}>
          {DEVICES.map((device) => (
            <DeviceCardComponent key={device.id} item={device} />
          ))}
        </div>
      </section>
      <FaqSectionComponent />
      <SubscriptionSectionComponent />
      <BannerComponent />
    </main>
  );
}
