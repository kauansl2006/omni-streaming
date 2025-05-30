import { notFound } from "next/navigation";

export const fetchTmdbData = async (endpoint) => {
  const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
  const TMDB_TOKEN = process.env.TMDB_TOKEN;

  return await fetch(`${TMDB_BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((data) => (data.results ? data.results : data))
    .catch((error) => console.error(error));
};

export const fetchMovieGenres = async () => {
  const data = await fetchTmdbData("/genre/movie/list?language=en");

  if (!data) notFound();

  return data;
};

export const fetchDiscoverMovies = async () => {
  const data = await fetchTmdbData(
    "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  );

  if (!data) notFound();

  return data;
};

export const fetchPopularMovies = async () => {
  const data = await fetchTmdbData("/movie/popular?language=en-US&page=1");

  if (!data) notFound();

  return data;
};

export const fetchTopRatedMovies = async () => {
  const data = await fetchTmdbData("/movie/top_rated?language=en-US&page=1");

  if (!data) notFound();

  return data;
};

export const fetchUpcomingMovies = async () => {
  const data = await fetchTmdbData("/movie/upcoming?language=en-US&page=1");

  if (!data) notFound();

  return data;
};

export const fetchDetailsById = async (id, type) => {
  const data = await fetchTmdbData(`/${type}/${id}?language=en`);

  if (!data) notFound();

  return data;
};

export const fetchCreditsById = async (id, type) => {
  const data = await fetchTmdbData(`/${type}/${id}/credits?language=en`);

  if (!data) notFound();

  return data;
};

export const fetchReviewsById = async (id, type) => {
  const data = await fetchTmdbData(`/${type}/${id}/reviews?language=en`);

  if (!data) notFound();

  return data;
};

export const fetchShowGenres = async () => {
  const data = await fetchTmdbData("/genre/tv/list?language=en");

  if (!data) notFound();

  return data;
};

export const fetchDiscoverShows = async () => {
  const data = await fetchTmdbData(
    "/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
  );

  if (!data) notFound();

  return data;
};

export const fetchAiringTodayShows = async () => {
  const data = await fetchTmdbData("/tv/airing_today?language=en-US&page=1");

  if (!data) notFound();

  return data;
};

export const fetchOnTheAirShows = async () => {
  const data = await fetchTmdbData("/tv/on_the_air?language=en-US&page=1");

  if (!data) notFound();

  return data;
};

export const fetchPopularShows = async () => {
  const data = await fetchTmdbData("/tv/popular?language=en-US&page=1");

  if (!data) notFound();

  return data;
};

export const fetchTopRatedShows = async () => {
  const data = await fetchTmdbData("/tv/top_rated?language=en-US&page=1");

  if (!data) notFound();

  return data;
};
