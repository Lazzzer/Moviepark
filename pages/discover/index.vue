<template>
  <div class="container w-full h-full mx-auto mt-10 lg:flex">
    <Search></Search>
    <section id="content" class="w-full bg-red-300 lg:w-3/4">Yolo</section>
  </div>
</template>

<script>
import Search from '@/components/discover/Search.vue'
export default {
  components: {
    Search
  },
  async asyncData({ store }) {
    try {
      await store.dispatch('tmdb/setGenreList')
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
