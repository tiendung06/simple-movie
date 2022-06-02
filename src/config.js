export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "25eac7bfded2875800a2dcebaa8ab051";
const tmdbEndpoint = "https://api.themoviedb.org/3";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search";
export const tmdbAPI = {
  getList: (meta = "movie", type, page = 1) =>
    `${tmdbEndpoint}/${meta}/${type}?api_key=${apiKey}&page=${page}`,
  getDetails: (meta = "movie", id) =>
    `${tmdbEndpoint}/${meta}/${id}?api_key=${apiKey}`,
  getMeta: (meta = "movie", type, id) =>
    `${tmdbEndpoint}/${meta}/${id}/${type}?api_key=${apiKey}`,
  getSearch: (meta = "movie", filter, page = 1) =>
    `${tmdbEndpointSearch}/${meta}?api_key=${apiKey}&query=${filter}&page=${page}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
  getPerson: (id) => `${tmdbEndpoint}/person/${id}?api_key=${apiKey}`,
  getPersonMovies: (id) =>
    `${tmdbEndpoint}/person/${id}/movie_credits?api_key=${apiKey}`,
};
export const TabTitle = (newTitle) => {
  return (document.title = newTitle);
};
