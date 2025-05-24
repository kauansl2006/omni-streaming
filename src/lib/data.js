const fetchTmdb = async (endpoint) => {
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

export const fetchMovieGenres = async () => {
  const data = await fetchTmdb("/genre/movie/list?language=en");

  if (!data) throw new Error("Movies genres not found");

  return data;
};

export const fetchDiscoverMovies = async () => {
  const data = await fetchTmdb(
    "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  );

  if (!data) throw new Error("Discover movies not found");

  return data;
};

export const fetchPopularMovies = async () => {
  const data = await fetchTmdb("/movie/popular?language=en-US&page=1");

  if (!data) throw new Error("Popular movies not found");

  return data;
};

export const fetchTopRatedMovies = async () => {
  const data = await fetchTmdb("/movie/top_rated?language=en-US&page=1");

  if (!data) throw new Error("Top rated movies not found");

  return data;
};

export const fetchUpcomingMovies = async () => {
  const data = await fetchTmdb("/movie/upcoming?language=en-US&page=1");

  if (!data) throw new Error("Upcoming movies not found");

  return data;
};

export const fetchShowGenres = async () => {
  const data = await fetchTmdb("/genre/tv/list?language=en");

  if (!data) throw new Error("Show genres not found");

  return data;
};

export const fetchDiscoverShows = async () => {
  const data = await fetchTmdb(
    "/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
  );

  if (!data) throw new Error("Discover shows not found");

  return data;
};

export const fetchAiringTodayShows = async () => {
  const data = await fetchTmdb("/tv/airing_today?language=en-US&page=1");

  if (!data) throw new Error("Airing Today shows not found");

  return data;
};

export const fetchOnTheAirShows = async () => {
  const data = await fetchTmdb("/tv/on_the_air?language=en-US&page=1");

  if (!data) throw new Error("On The Air shows not found");

  return data;
};

export const fetchPopularShows = async () => {
  const data = await fetchTmdb("/tv/popular?language=en-US&page=1");

  if (!data) throw new Error("Popular shows not found");

  return data;
};

export const fetchTopRatedShows = async () => {
  const data = await fetchTmdb("/tv/top_rated?language=en-US&page=1");

  if (!data) throw new Error("Top rated shows not found");

  return data;
};
