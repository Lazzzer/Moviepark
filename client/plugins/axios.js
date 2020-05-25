export default function ({ $axios }) {
  if (process.client) {
    $axios.setBaseURL(process.env.API_BROWSER_URL)
  }

  if (process.server) {
    $axios.setBaseURL(process.env.API_URL)
  }
}
