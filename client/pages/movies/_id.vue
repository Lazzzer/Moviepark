<template>
  <div class="container mx-auto mt-10">
    <MovieDetails :movie-infos="movieInfos" />
    <div>social medias</div>
    <Videos v-if="movieInfos.videos.results.some(video => video.type === 'Trailer')" :videos-infos="movieInfos.videos.results" />

  </div>
</template>

<script>
import MovieDetails from '@/components/movie/MovieDetails'
import Videos from '@/components/movie/Videos'

export default {
  components: {
    MovieDetails,
    Videos
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
