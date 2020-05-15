<template>
  <div class="w-full lg:ml-2 lg:w-3/4">
    <h3
      class="text-xl font-bold text-center text-gray-300 lg:float-right lg:mr-20"
    >{{ movieListType }}</h3>

    <div class="flex flex-wrap justify-center w-full">
      <Card v-for="(card,index) in movieList" :key="index" class="m-2" :movie-infos="card"></Card>
    </div>
    <button
      v-if="typeOfList !== 'discover' && movieListPage < movieListTotalPages"
      @click="callNextPage"
      type="button"
      class="items-center block w-64 px-4 py-2 mx-auto mt-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-m-burgundy-700 hover:bg-m-burgundy-600 focus:outline-none focus:border-m-burgundy-600 active:bg-m-burgundy-600"
    >Load More</button>
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
      movieListPage: state => state.search.movieListPage,
      movieListTotalPages: state => state.search.movieListTotalPages,
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
      if (this.movieListPage < this.movieListTotalPages) {
        this.incrementPageMovieList()
        this.setMovieList()
      }
    }
  }
}
</script>
