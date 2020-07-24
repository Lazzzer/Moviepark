import axios from 'axios'

const utellyApi = axios.create({
  baseURL: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/octet-stream',
    'X-Requested-With': 'XMLHttpRequest',
    'X-Rapidapi-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
    'X-Rapidapi-Key': process.env.UTELLY_API_KEY,
  },
})
export default {
  getStreamingServicesById (source_id) {
    return utellyApi.get('idlookup', { params: { 'source': 'tmdb', 'source_id': 'movie/' + source_id, 'country': 'us' } })
  },
}
