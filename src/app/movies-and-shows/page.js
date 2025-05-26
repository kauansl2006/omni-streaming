import styles from "./page.module.css";

import {
  fetchAiringTodayShows,
  fetchDiscoverMovies,
  fetchDiscoverShows,
  fetchMovieGenres,
  fetchOnTheAirShows,
  fetchPopularMovies,
  fetchPopularShows,
  fetchShowGenres,
  fetchTopRatedMovies,
  fetchTopRatedShows,
  fetchUpcomingMovies,
} from "@/lib/data";

import { ShowcaseComponent } from "@/components/Showcase";
import { BannerComponent } from "@/components/Banner";
import { CarouselComponent } from "@/components/Carousel";
import { IMAGES } from "@/dataset/images";

export default async function MoviesAndShowsPage() {
  const movieGenresData = await fetchMovieGenres();
  const discoverMoviesData = await fetchDiscoverMovies();
  const popularMoviesData = await fetchPopularMovies();
  const topRatedMoviesData = await fetchTopRatedMovies();
  const upcomingMoviesData = await fetchUpcomingMovies();
  const showGenresData = await fetchShowGenres();
  const discoverShowsData = await fetchDiscoverShows();
  const airingTodayShowsData = await fetchAiringTodayShows();
  const onTheAirShowsData = await fetchOnTheAirShows();
  const popularShowsData = await fetchPopularShows();
  const topRatedShowsData = await fetchTopRatedShows();

  const [
    movieGenres,
    discoverMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    showGenres,
    discoverShows,
    airingTodayShows,
    onTheAirShows,
    popularShows,
    topRatedShows,
  ] = await Promise.all([
    movieGenresData,
    discoverMoviesData,
    popularMoviesData,
    topRatedMoviesData,
    upcomingMoviesData,
    showGenresData,
    discoverShowsData,
    airingTodayShowsData,
    onTheAirShowsData,
    popularShowsData,
    topRatedShowsData,
  ]);

  return (
    <main className={styles["main__movies-and-shows"]}>
      <section className={styles["section-carousel__carousel"]}>
        <CarouselComponent items={IMAGES} />
      </section>

      <section className={styles["section__movies-and-shows"]}>
        <div className={styles["container__movies-and-shows"]}>
          <div className={styles["text-container__movies-and-shows"]}>
            <h6 className={styles["h6__movies-and-shows"]}>Movies</h6>
          </div>

          <div className={styles["showcase-container__movies-and-shows"]}>
            <ShowcaseComponent
              heading={"Movie Genres"}
              items={movieGenres}
              type={"categories"}
              id="movies-gernres"
            />
            <ShowcaseComponent
              heading={"Discover Movies"}
              items={discoverMovies}
              type={"movies"}
              id="discover-movies"
            />
            <ShowcaseComponent
              heading={"Popular Movies"}
              items={popularMovies}
              type={"movies"}
              id="popular-movies"
            />
            <ShowcaseComponent
              heading={"Top Rated Movies"}
              items={topRatedMovies}
              type={"movies"}
              id="top-rated-movies"
            />
            <ShowcaseComponent
              heading={"Up Coming Movies"}
              items={upcomingMovies}
              type={"movies"}
              id="upcoming-movies"
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
              heading={"Show Genres"}
              items={showGenres}
              type={"categories"}
              id="shows-gernres"
            />
            <ShowcaseComponent
              heading={"Discover TV Shows"}
              items={discoverShows}
              type={"shows"}
              id="discover-movies"
            />
            <ShowcaseComponent
              heading={"Airing Today Shows"}
              items={airingTodayShows}
              type={"shows"}
              id="airing-today-movies"
            />
            <ShowcaseComponent
              heading={"On The Air Shows"}
              items={onTheAirShows}
              type={"shows"}
              id="on-the-air"
            />
            <ShowcaseComponent
              heading={"Popular Shows"}
              items={popularShows}
              type={"shows"}
              id="popular-movies"
            />
            <ShowcaseComponent
              heading={"Top Rated Shows"}
              items={topRatedShows}
              type={"shows"}
              id="top-rated-movies"
            />
          </div>
        </div>
      </section>

      <BannerComponent />
    </main>
  );
}
