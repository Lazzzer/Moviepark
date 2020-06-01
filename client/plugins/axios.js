export default function ({ app, $axios }) {
  if (process.env.NODE_ENV === 'production') {
    if (process.client) {
      $axios.setBaseURL(app.$env.API_BROWSER_URL)
    }

    if (process.server) {
      $axios.setBaseURL(app.$env.API_URL)
    }
  } else {
    if (process.client) {
      $axios.setBaseURL(process.env.API_BROWSER_URL)
    }

    if (process.server) {
      $axios.setBaseURL(process.env.API_URL)
    }
  }
}
