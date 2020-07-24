<template>
  <div class="relative flex-shrink-0 block cursor-pointer hover:shadow-md">
    <div v-if="isSearched" class="relative rounded-md bg-m-blue-900 md:w-card-lg md:h-card-lg w-card h-card placeholder-content"></div>
    <div v-else>
      <span v-if="$auth.loggedIn && watchlist" class="absolute bottom-0 left-0 z-30 w-full duration-500 rounded-md md:opacity-0 h-1/3 hover:opacity-100">
        <div class="absolute flex justify-between w-full h-2/3 md:h-1/2 left-1 bottom-1 ">
          <div
            v-if="!watched"
            @click="update(true)"
            class="flex items-center justify-center w-2/5 h-full p-2 bg-gray-500 rounded-lg cursor-pointer focus:outline-none focus:shadow-outline-none hover:bg-gray-600"
          >
            <svg-icon name="eye" class="w-5 h-5 text-m-blue-900" />
          </div>
          <div
            v-else
            @click="update(false)"
            class="flex items-center justify-center w-2/5 h-full p-2 rounded-lg cursor-pointer bg-m-burgundy-600 focus:outline-none focus:shadow-outline-none hover:bg-m-burgundy-700"
          >
            <svg-icon name="bookmark" class="w-5 h-5 text-m-blue-900" />
          </div>
          <div
            @click="deleteMovie()"
            class="flex items-center justify-center w-2/5 h-full p-2 mr-2 bg-red-400 rounded-lg cursor-pointer focus:outline-none focus:shadow-outline-none hover:bg-red-500"
          >
            <svg class="w-5 h-5 text-m-blue-900 group-hover:text-white group-focus:text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </span>

      <nuxt-link :to="'/movies/'+ movieInfos.id" tag="a" no-prefetch
                 :class="animation ? 'duration-500 ease-in-out md:transform md:transition hover:-translate-y-1 hover:scale-105' : ' '"
                 class="relative flex-shrink-0 block cursor-pointer hover:shadow-md"
      >
        <div class="absolute z-20 w-full h-full px-3 py-2 duration-500 bg-opacity-75 rounded-md opacity-0 bg-m-blue-900 hover:opacity-100">
          <p class="font-bold leading-5 text-gray-300 "
             :class="movieInfos.title.length < 30 ? 'text-lg' : 'text-base'"
          >{{ movieInfos.title.length > 100 ? movieInfos.title.slice(0,100) + '...' : movieInfos.title }}</p>
        </div>

        <VueLoadImage class="relative rounded-md md:w-card-lg md:h-card-lg w-card h-card">
          <img
            slot="image"
            class="object-cover rounded-md md:w-card-lg md:h-card-lg w-card h-card"
            :src="movieInfos.poster_path !== null ? imgPath + movieInfos.poster_path : require('~/assets/img/noPoster.jpg')"
            :alt="'Poster of ' + movieInfos.title "
          />
          <div slot="preloader" class="rounded-md md:w-card-lg md:h-card-lg w-card h-card placeholder-content"></div>
        </VueLoadImage>

        <span v-if="$auth.loggedIn && !watchlist" class="absolute left-1 bottom-1">
          <div
            v-if="watched"
            class="p-2 bg-gray-500 rounded-full cursor-pointer focus:outline-none focus:shadow-outline-none"
          >
            <svg-icon name="eye" class="w-4 h-4 text-m-blue-900" />
          </div>
          <div
            v-if="notWatched"
            class="p-2 rounded-full cursor-pointer bg-m-burgundy-600 focus:outline-none focus:shadow-outline-none"
          >
            <svg-icon name="bookmark" class="w-4 h-4 text-m-blue-900" />
          </div>

        </span>

        <span
          :class="movieInfos.vote_average >= 6.0 ? 'bg-green-500' : movieInfos.vote_average >= 4.0 ? 'bg-orange-500' : movieInfos.vote_count === 0 ? 'bg-gray-500' : 'bg-red-500'"
          class="absolute flex items-center justify-center w-8 h-8 text-xs border border-gray-300 rounded-full right-1 bottom-1"
        >
          <span class="font-bold text-m-blue-900">{{ movieInfos.vote_count === 0 ? 'N/A' : movieInfos.vote_average }}</span>
        </span>
      </nuxt-link>
    </div>

  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import VueLoadImage from '@/components/global/VueLoadImage'

export default {
  components: {
    VueLoadImage
  },
  props: {
    movieInfos: {
      type: Object,
      required: true
    },
    animation: {
      type: Boolean,
      required: true
    },
    isSearched: {
      type: Boolean,
      required: true
    },
    watchlist: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      imgPath: 'https://image.tmdb.org/t/p/w154'
    }
  },
  computed: {
    ...mapGetters('watchlist', ['watchedMovieList', 'notWatchedMovieList']),
    watched () {
      return this.watchedMovieList.some(movie => movie.movie_id === this.movieInfos.id)
    },
    notWatched () {
      return this.notWatchedMovieList.some(movie => movie.movie_id === this.movieInfos.id)
    }
  },
  methods: {
    async add () {
      await this.$axios.post('/watchlist/addMovie', { movieId: this.movieInfos.id })
      await this.$store.dispatch('watchlist/setWatchList')
    },
    async update (state) {
      await this.$axios.put('/watchlist/updateMovie', { movieId: this.movieInfos.id, watched: state })
      await this.$store.dispatch('watchlist/setWatchList')
    },
    async deleteMovie () {
      await this.$axios.delete('/watchlist/deleteMovie', { data: { movieId: this.movieInfos.id } })
      await this.$store.dispatch('watchlist/setWatchList')
    }
  }
}
</script>

<style>
  .placeholder-content {
    overflow: hidden;
    background: #000E1B;
    position: relative;

    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: placeholderAnimate;
    background: #000E1B;
    background: linear-gradient(to right, #000E1B 2%, #02182B 18%, #000E1B 33%);
    background-size: 1300px;
  }

  @keyframes placeholderAnimate {
    0%{ background-position: -650px 0; }
    100%{ background-position: 650px 0; }
  }
</style>
