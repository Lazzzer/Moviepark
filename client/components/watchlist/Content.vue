<template>
  <div class="relative w-full mt-6 md:mt-10">
    <div class="flex justify-center mb-2">
      <div class="flex items-center mr-3 space-x-2 md:mr-4">
        <span
          @click="detailed = !detailed"
          role="checkbox"
          tabindex="0"
          aria-checked="false"
          :class="detailed ? 'bg-m-burgundy-600': 'bg-teal-900'"
          class="relative flex-shrink-0 inline-block h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none hover:outline-none"
        >
          <span
            aria-hidden="true"
            :class="detailed ? 'translate-x-5': 'translate-x-0'"
            class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-gray-300 rounded-full shadow"
          ></span>
        </span>
        <span class="font-bold text-gray-300">Detailed view</span>
      </div>
      <div class="flex items-center space-x-2">
        <span
          @click="watchedOnly = !watchedOnly"
          role="checkbox"
          tabindex="0"
          aria-checked="false"
          :class="watchedOnly ? 'bg-m-burgundy-600': 'bg-teal-900'"
          class="relative flex-shrink-0 inline-block h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none hover:outline-none"
        >
          <span
            aria-hidden="true"
            :class="watchedOnly ? 'translate-x-5': 'translate-x-0'"
            class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-gray-300 rounded-full shadow"
          ></span>
        </span>
        <span class="font-bold text-gray-300">Watched only</span>
      </div>
    </div>

    <div v-if="!detailed" class="flex flex-wrap justify-center w-full mt-6">
      <Card v-for="(card,index) in toggledMovieList()" :key="index" class="m-2" :movie-infos="card" :animation="true" :is-searched="false" :watchlist="false"></Card>
    </div>
    <div v-else class="w-full mx-auto my-6 md:w-11/12">
      <DetailedCard v-for="(card,index) in toggledMovieList()" :key="index" class :movie-infos="card" :is-searched="false" :watchlist="true"></DetailedCard>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Card from '@/components/movie/Card.vue'
import DetailedCard from '@/components/movie/DetailedCard.vue'

export default {
  components: {
    Card,
    DetailedCard
  },
  props: {
    movieList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      detailed: false,
      watchedOnly: false
    }
  },
  computed: {
    ...mapGetters('watchlist', ['watchedMovieList', 'notWatchedMovieList']),
    ...mapState({
      watchList: state => state.watchlist.watchList
    }),
    watched () {
      return this.movieList.filter(movie => this.watchedMovieList.find(m => m.movie_id === movie.id))
    },
    notWatched () {
      return this.movieList.filter(movie => this.notWatchedMovieList.find(m => m.movie_id === movie.id))
    }
  },
  methods: {
    toggledMovieList () {
      if (this.watchedOnly) {
        return this.watched
      } else {
        return this.notWatched
      }
    }
  }
}
</script>
