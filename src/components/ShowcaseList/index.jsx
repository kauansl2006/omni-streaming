import styles from "./ShowcaseList.module.css";

import { 
  fetchMovieGenres,
  fetchDiscoverMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchShowGenres,
  fetchDiscoverShows,
  fetchAiringTodayShows,
  fetchOnTheAirShows,
  fetchPopularShows,
  fetchTopRatedShows
 } from "@/lib/data";

import { Showcase } from "@/components/ShowcaseList/Showcase";

export const ShowcaseList = async ({ type }) => {
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
    <div className={styles["showcase-list__container"]}>
      <div className={styles["showcase-list__text-container"]}>
        <h6 className={styles["showcase-list__heading"]}>{type}</h6>
      </div>

      <div className={styles["showcase-list__showcase-container"]}>
        {type === "Movies" ? (
          <>
{/*             <Showcase
              heading={"Movie Genres"}
              items={movieGenres}
              type={"categories"}
              id="movies-gernres"
            /> */}
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
{/*             <Showcase
              heading={"Show Genres"}
              items={showGenres}
              type={"categories"}
              id="shows-gernres"
            /> */}
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

