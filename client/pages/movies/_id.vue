<template>
  <div class="container mx-auto mt-10">
    <MovieDetails :movie-infos="movieInfos" />
    <client-only>
      <modal v-if="movieInfos.videos.results.some(video => video.type === 'Trailer')" name="trailer" :classes="'trailer-modal'" width="750px" height="422px" :pivot-y="0.3">
        <iframe class="rounded-md w-yt-modal-lg h-yt-modal-lg" :src="'https://www.youtube-nocookie.com/embed/' + trailerId" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </modal>
    </client-only>
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
  },
  computed: {
    trailerId () {
      return this.movieInfos.videos.results.find(video => video.type === 'Trailer').key
    }
  }
}
</script>

<style>
  .trailer-modal {
    @apply rounded-md bg-m-blue-900 shadow-md !important
  }
  .vm--overlay {
      background-color: rgba(0, 0, 0, 0.4);
  }
</style>
