<template>
  <div class="container w-full h-full mx-auto mt-2 mb-16 sm:mt-10 md:mt-12 lg:flex">
    <Search></Search>
    <Content></Content>
  </div>
</template>

<script>
import Search from '@/components/discover/Search.vue'
import Content from '@/components/discover/Content.vue'
export default {
  components: {
    Search,
    Content
  },
  async asyncData ({ store, error }) {
    try {
      if (store.state.tmdb.genresList.length === 0) {
        await store.dispatch('tmdb/setGenreList')
      }
      if (!store.state.search.userSearch) {
        await store.dispatch('search/setDefaultMovieList')
      } else {
        await store.dispatch('search/setUserSearch', false)
      }
    } catch (err) {
      if (err.response !== undefined) {
        return error({ statusCode: err.response.status, message: err.response.statusText })
      } else {
        error({ statusCode: 503, message: 'Houston, we have a problem.' })
      }
    }
  }
}
</script>
