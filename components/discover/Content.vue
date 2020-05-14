<template>
  <div class="w-full lg:ml-2 lg:w-3/4">
    <h3
      class="text-xl font-bold text-center text-gray-300 lg:float-right lg:mr-20"
    >{{ movieListType }}</h3>

    <!-- V-IF=TotalPage <= searchQuery.page -->
    <p v-if="typeOfList !== 'discover'" @click="callNextPage" class="text-gray-300">Next Page</p>
    <div class="flex flex-wrap justify-center w-full">
      <Card v-for="(card,index) in movieList" :key="index" class="m-2" :movie-infos="card"></Card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '@/components/movie/Card.vue'
export default {
  components: {
    Card
  },
  computed: {
    ...mapState({
      typeOfList: state => state.search.searchQuery.type,
      movieList: state => state.search.movieList,
      movieListType: state => state.search.movieListType
    })
    // shortenedMovieList() {
    //   const list = [...this.movieList]
    //   return list.splice(0, 20)
    // }
  },
  methods: {
    ...mapActions('search', ['setMovieList', 'incrementPageMovieList']),
    callNextPage() {
      this.incrementPageMovieList()
      this.setMovieList()
    }
  }
}
</script>
