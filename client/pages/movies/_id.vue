<template>
  <div class="container mx-auto mt-10">
    <MovieDetails :movie-infos="movieInfos" />
  </div>
</template>

<script>
import MovieDetails from '@/components/movie/MovieDetails'
export default {
  components: {
    MovieDetails
  },
  async asyncData ({ store, $axios, env, params }) {
    try {
      const movieInfos = await $axios.get(`${env.API_URL}/tmdb/movie/${params.id}`)
      return { movieInfos: movieInfos.data }
    } catch (err) {
      console.log(err)
      return { movieInfos: {} }
    }
  }
}
</script>
