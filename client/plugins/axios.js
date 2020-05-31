export default function ({ app, $axios }) {
  if (process.client) {
    $axios.setBaseURL(app.$env.API_BROWSER_URL)
  }

  if (process.server) {
    $axios.setBaseURL(app.$env.API_URL)
  }
}
