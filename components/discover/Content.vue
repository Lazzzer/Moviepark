<template>
  <div class="w-full ml-2 lg:w-3/4">
    <h3 class="float-right mr-20 text-xl font-bold text-gray-300">{{ movieListType }}</h3>
    <div class="flex flex-wrap justify-center w-full">
      <Card v-for="(card,index) in movieList.results" :key="index" class="m-2" :movie-infos="card"></Card>
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
    })
  }
}
</script>
