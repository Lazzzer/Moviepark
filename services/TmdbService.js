import axios from 'axios'

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
export default {
  getTrending() {
    return tmdbApi.get(`trending/movie/week?api_key=${process.env.TMDB_API_KEY}`)
  },
  getNextInTheaters() {
    return tmdbApi.get(`movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`)
  }
}
