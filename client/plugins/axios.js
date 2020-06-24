export default function ({ $axios, $config }) {
  if (process.client) {
    $axios.setBaseURL($config.apiBrowserURL)
  }

  if (process.server) {
    $axios.setBaseURL($config.apiURL)
  }
}
