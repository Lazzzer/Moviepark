<template>
  <div class="w-full lg:ml-2 lg:w-3/4">
    <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
      <h3
        class="mb-4 text-xl font-bold text-center text-gray-300 lg:mb-0 lg:ml-20 lg:mt-0"
      >{{ movieListType }}</h3>
      <div class="flex items-center space-x-2 lg:mr-20">
        <span
          @click="isOn = !isOn"
          role="checkbox"
          tabindex="0"
          aria-checked="false"
          :class="isOn ? 'bg-m-burgundy-600': 'bg-teal-900'"
          class="relative flex-shrink-0 inline-block h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none hover:outline-none"
        >
          <span
            aria-hidden="true"
            :class="isOn ? 'translate-x-5': 'translate-x-0'"
            class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-gray-300 rounded-full shadow"
          ></span>
        </span>
        <span class="font-bold text-gray-300">Detailed view</span>
      </div>
    </div>
    <div v-if="!isOn" class="flex flex-wrap justify-center w-full mt-2">
      <Card v-for="(card,index) in movieList" :key="index" class="m-2" :movie-infos="card"></Card>
    </div>
    <div v-else class="w-full mx-auto my-2 md:w-11/12">
      <DetailedCard v-for="(card,index) in movieList" :key="index" class :movie-infos="card"></DetailedCard>
    </div>
    <button
      v-if="movieListPage < movieListTotalPages"
      @click="callNextPage"
      type="button"
      class="items-center block w-64 px-4 py-2 mx-auto mt-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-m-burgundy-700 hover:bg-m-burgundy-600 focus:outline-none focus:border-m-burgundy-600 active:bg-m-burgundy-600"
    >Load More</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '@/components/movie/Card.vue'
import DetailedCard from '@/components/movie/DetailedCard.vue'

export default {
  components: {
    Card,
    DetailedCard
  },
  data () {
    return {
      isOn: false
    }
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
    callNextPage () {
      if (this.movieListPage < this.movieListTotalPages) {
        this.incrementPageMovieList()
        this.setMovieList()
      }
    }
  }
}
</script>
