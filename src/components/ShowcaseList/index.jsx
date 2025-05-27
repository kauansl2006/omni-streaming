import styles from "./ShowcaseList.module.css";

import { TheMovieDbService } from "@/services/theMovieDbService";

import { Showcase } from "@/components/ShowcaseList/Showcase";

export const ShowcaseList = async ({ type }) => {
  const movieGenresData = await TheMovieDbService.getMovieGenres();
  const discoverMoviesData = await TheMovieDbService.getDiscoverMovies();
  const popularMoviesData = await TheMovieDbService.getPopularMovies();
  const topRatedMoviesData = await TheMovieDbService.getTopRatedMovies();
  const upcomingMoviesData = await TheMovieDbService.getUpcomingMovies();
  const showGenresData = await TheMovieDbService.getShowGenres();
  const discoverShowsData = await TheMovieDbService.getDiscoverShows();
  const airingTodayShowsData = await TheMovieDbService.getAiringTodayShows();
  const onTheAirShowsData = await TheMovieDbService.getOnTheAirShows();
  const popularShowsData = await TheMovieDbService.getPopularShows();
  const topRatedShowsData = await TheMovieDbService.getTopRatedShows();

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
    <div className={styles["showcase-list__container"]}>
      <div className={styles["showcase-list__text-container"]}>
        <h6 className={styles["showcase-list__heading"]}>{type}</h6>
      </div>

      <div className={styles["showcase-list__showcase-container"]}>
        {type === "Movies" ? (
          <>
            <Showcase
              heading={"Movie Genres"}
              items={movieGenres}
              type={"categories"}
              id="movies-gernres"
            />
            <Showcase
              heading={"Discover Movies"}
              items={discoverMovies}
              type={"movies"}
              id="discover-movies"
            />
            <Showcase
              heading={"Popular Movies"}
              items={popularMovies}
              type={"movies"}
              id="popular-movies"
            />
            <Showcase
              heading={"Top Rated Movies"}
              items={topRatedMovies}
              type={"movies"}
              id="top-rated-movies"
            />
            <Showcase
              heading={"Up Coming Movies"}
              items={upcomingMovies}
              type={"movies"}
              id="upcoming-movies"
            />
          </>
        ) : (
          <>
            <Showcase
              heading={"Show Genres"}
              items={showGenres}
              type={"categories"}
              id="shows-gernres"
            />
            <Showcase
              heading={"Discover TV Shows"}
              items={discoverShows}
              type={"shows"}
              id="discover-movies"
            />
            <Showcase
              heading={"Airing Today Shows"}
              items={airingTodayShows}
              type={"shows"}
              id="airing-today-movies"
            />
            <Showcase
              heading={"On The Air Shows"}
              items={onTheAirShows}
              type={"shows"}
              id="on-the-air"
            />
            <Showcase
              heading={"Popular Shows"}
              items={popularShows}
              type={"shows"}
              id="popular-movies"
            />
            <Showcase
              heading={"Top Rated Shows"}
              items={topRatedShows}
              type={"shows"}
              id="top-rated-movies"
            />
          </>
        )}
      </div>
    </div>
  )
}

