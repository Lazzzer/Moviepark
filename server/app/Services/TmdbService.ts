import axios from 'axios'

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})
export default {
  getTrending () {
    return tmdbApi.get(`trending/movie/week?api_key=${process.env.TMDB_API_KEY}`)
  },
  getNextInTheaters () {
    return tmdbApi.get(`movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`)
  },
  getGenresList () {
    return tmdbApi.get(`genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
  },
  getPersonId (query) {
    return tmdbApi.get(`search/person?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
  },
  getSearchDefaultMovieList (page) {
    return tmdbApi.get(`discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}`)
  },
  getSearchedByNameMovieList (name, page) {
    return tmdbApi.get(`search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${name}&include_adult=false&page=${page}`)
  },
  getSearchedWithFiltersMovieList (query) {
    return tmdbApi.get(`discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=false${query}`)
  },
  getMovieDetails (id) {
    return tmdbApi.get(`movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos%2Crecommendations%2Csimilar%2Ckeywords%2Ccredits%2Creviews%2Cexternal_ids`)
  },
}
