<template>
  <div class="container mx-auto mt-1 mb-16 sm:mt-10">
    <MovieDetails :movie-infos="movieInfos" :trailer-id="trailerId" class="hidden lg:flex" />
    <MobileMovieDetails :movie-infos="movieInfos" :trailer-id="trailerId" class="block lg:hidden" />
    <client-only>
      <modal v-if="movieInfos.videos.results.some(video => video.type === 'Trailer')" name="trailer" :classes="'trailer-modal'" width="750px" height="422px" :pivot-y="0.3">
        <iframe class="rounded-md w-yt-modal-lg h-yt-modal-lg" :src="'https://www.youtube-nocookie.com/embed/' + trailerId" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </modal>
    </client-only>
    <StreamingServices v-if="Object.keys(streamingInfos.collection).includes('locations') && streamingInfos.collection.locations.length > 0" :infos="streamingInfos" />
    <Cast v-if="movieInfos.credits.cast.length > 0" :cast-infos="movieInfos.credits.cast" />
    <div v-else style="height:250px;"></div>
    <div v-if="movieInfos.recommendations.total_results !== 0 && movieInfos.similar.total_results !== 0" class="mt-2 lg:mt-10 lg:flex lg:space-x-10 xl:space-x-12">
      <MovieListing :component-title="'Recommendations'" :infos="movieInfos.recommendations.results" />
      <MovieListing :component-title="'Similar Movies'" :infos="movieInfos.similar.results" />
    </div>
    <div v-else style="height:250px;"></div>
  </div>
</template>

<script>
import MovieDetails from '@/components/movie/MovieDetails'
import MobileMovieDetails from '@/components/movie/MobileMovieDetails'

import StreamingServices from '@/components/movie/StreamingServices'
import Cast from '@/components/movie/Cast'
import MovieListing from '@/components/movie/MovieListing'

export default {
  components: {
    MovieDetails,
    MobileMovieDetails,
    StreamingServices,
    Cast,
    MovieListing
  },
  async asyncData ({ store, $axios, env, params, error }) {
    try {
      const movieInfos = await $axios.get(`/tmdb/movie/${params.id}`)
      const streamingInfos = await $axios.get(`/utelly/${params.id}`)
      return { movieInfos: movieInfos.data, streamingInfos: streamingInfos.data }
    } catch (err) {
      if (err.response !== undefined) {
        return error({ statusCode: err.response.status, message: err.response.statusText })
      } else {
        error({ statusCode: 503, message: 'Houston, we have a problem.' })
      }
    }
  },
  computed: {
    trailerId () {
      const link = this.movieInfos.videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube')
      return link !== undefined ? link.key : ''
    }
  },
  head () {
    return {
      title: this.movieInfos.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.movieInfos.overview
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.movieInfos.overview
        }
      ]

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
