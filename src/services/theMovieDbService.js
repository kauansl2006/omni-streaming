export class TheMovieDbService {
  static getTheMovieDbData = async (endpoint) => {
    const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
    const TMDB_TOKEN = process.env.TMDB_TOKEN;

    const url = `${TMDB_BASE_URL}${endpoint}`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    };

    return await fetch(url, options)
      .then((response) => response.json())
      .then((data) => (data.results ? data.results : data))
      .catch((error) => console.error(error));
  };

  static getMovieGenres = async () => {
    const data = await this.getTheMovieDbData("/genre/movie/list?language=en");

    if (!data) throw new Error("Movies genres not found");

    return data;
  };

  static getDiscoverMovies = async () => {
    const data = await this.getTheMovieDbData(
      "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    );

    if (!data) throw new Error("Discover movies not found");

    return data;
  };

  static getPopularMovies = async () => {
    const data = await this.getTheMovieDbData(
      "/movie/popular?language=en-US&page=1",
    );

    if (!data) throw new Error("Popular movies not found");

    return data;
  };

  static getTopRatedMovies = async () => {
    const data = await this.getTheMovieDbData(
      "/movie/top_rated?language=en-US&page=1",
    );

    if (!data) throw new Error("Top rated movies not found");

    return data;
  };

  static getUpcomingMovies = async () => {
    const data = await this.getTheMovieDbData(
      "/movie/upcoming?language=en-US&page=1",
    );

    if (!data) throw new Error("Upcoming movies not found");

    return data;
  };

  static getShowGenres = async () => {
    const data = await this.getTheMovieDbData("/genre/tv/list?language=en");

    if (!data) throw new Error("Show genres not found");

    return data;
  };

  static getDiscoverShows = async () => {
    const data = await this.getTheMovieDbData(
      "/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
    );

    if (!data) throw new Error("Discover shows not found");

    return data;
  };

  static getAiringTodayShows = async () => {
    const data = await this.getTheMovieDbData(
      "/tv/airing_today?language=en-US&page=1",
    );

    if (!data) throw new Error("Airing Today shows not found");

    return data;
  };

  static getOnTheAirShows = async () => {
    const data = await this.getTheMovieDbData(
      "/tv/on_the_air?language=en-US&page=1",
    );

    if (!data) throw new Error("On The Air shows not found");

    return data;
  };

  static getPopularShows = async () => {
    const data = await this.getTheMovieDbData(
      "/tv/popular?language=en-US&page=1",
    );

    if (!data) throw new Error("Popular shows not found");

    return data;
  };

  static getTopRatedShows = async () => {
    const data = await this.getTheMovieDbData(
      "/tv/top_rated?language=en-US&page=1",
    );

    if (!data) throw new Error("Top rated shows not found");

    return data;
  };
}
