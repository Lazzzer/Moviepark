<template>
  <div class="container relative w-full px-4 mx-auto mt-20 mb-24 text-gray-300 xl:max-w-4xl md:px-6 xl:px-0">
    {{ 'My watchlist - ' + $auth.user.username }}
    <Content />

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
    // try {
    if (store.state.watchlist.watchList.length > 0) {
      const promises = []
      const list = []

      store.state.watchlist.watchList.map((movie) => {
        promises.push($axios.get(`/tmdb/movie/${movie.movie_id}`))
      })

      await Promise.all(promises).then((res) => {
        res.map((r) => {
          list.push(r.data)
        })
      }).catch(reason => console.log(reason))

      return { movieList: list }
    }
    // } catch (err) {
    //   if (err.response !== undefined) {
    //     return error({ statusCode: err.response.status, message: err.response.statusText })
    //   } else {
    //     error({ statusCode: 503, message: 'Houston, we have a problem.' })
    //   }
    // }
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
