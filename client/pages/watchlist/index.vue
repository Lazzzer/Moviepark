<template>
  <div class="container relative w-full mx-auto mt-2 mb-24 text-gray-300 md:mt-10 xl:max-w-4xl md:px-6 xl:px-0">
    <h2 class="px-6 text-3xl font-bold text-gray-300">My Watchlist</h2>
    <Content :movie-list="movieList" />

  </div>
</template>
<script>
import { mapState } from 'vuex'
import Content from '@/components/watchlist/Content.vue'

export default {
  components: {
    Content
  },
  middleware: 'auth',
  async asyncData ({ $axios, error, store }) {
    try {
      if (store.state.tmdb.genresList.length === 0) {
        await store.dispatch('tmdb/setGenreList')
      }
    } catch (err) {
      if (err.response !== undefined) {
        return error({ statusCode: err.response.status, message: err.response.statusText })
      } else {
        error({ statusCode: 503, message: 'Houston, we have a problem.' })
      }
    }

    if (store.state.watchlist.watchList.length > 0) {
      const promises = []
      const list = []

      store.state.watchlist.watchList.map((movie) => {
        promises.push($axios.get(`/tmdb/movie/${movie.movie_id}`))
      })

      await Promise.allSettled(promises).then((res) => {
        res.map((r) => {
          if (r.status === 'fulfilled') {
            list.push(r.value.data)
          }
        })
      })

      return { movieList: list }
    }
  },
  data () {
    return {
      movieList: []
    }
  },
  computed: {
    ...mapState({
      watchList: state => state.watchlist.watchList
    })
  },
  head () {
    return {
      title: 'Watchlist'
    }
  }
}
</script>
