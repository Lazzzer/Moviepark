<template>
  <div class="w-full lg:ml-2 lg:w-3/4">
    <h3
      class="text-xl font-bold text-center text-gray-300 lg:float-right lg:mr-20"
    >{{ movieListType }}</h3>
    <div class="flex flex-wrap justify-center w-full">
      <Card v-for="(card,index) in shortenedMovieList" :key="index" class="m-2" :movie-infos="card"></Card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/movie/Card.vue'
export default {
  components: {
    Card
  },
  computed: {
    ...mapState({
      movieList: state => state.search.movieList,
      movieListType: state => state.search.movieListType
    }),
    shortenedMovieList() {
      const list = [...this.movieList.results]
      return list.splice(0, 20)
    }
  }
}
</script>
