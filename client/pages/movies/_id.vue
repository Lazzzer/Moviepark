<template>
  <div>
    {{ movieInfos.title }}
  </div>
</template>

<script>
export default {
  async asyncData ({ store, $axios, env, params }) {
    try {
      if (store.state.tmdb.genresList.length === 0) {
        await store.dispatch('tmdb/setGenreList')
      }
      const movieInfos = await $axios.get(`${env.API_URL}/tmdb/movie/${params.id}`)
      return { movieInfos: movieInfos.data }
    } catch (err) {
      console.log(err)
      return { movieInfos: {} }
    }
  }
}
</script>
