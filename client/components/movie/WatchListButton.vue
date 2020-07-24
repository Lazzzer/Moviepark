<template>
  <div>
    <button
      v-if="!isInWatchList"
      @click="add"
      type="button"
      class="inline-flex items-center w-full px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-teal-700 border border-transparent rounded-lg cursor-pointer hover:bg-teal-800 focus:outline-none focus:shadow-outline-none active:bg-teal-800 focus:bg-teal-800"
    >
      <svg-icon name="plus-circle" class="w-4 h-4" />
      <span class="ml-1">Add to watchlist</span>
    </button>
    <div v-else @click="open = !open" class="cursor-pointer">

      <div
        v-if="isWatched"
        class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-gray-500 border border-transparent rounded-lg hover:bg-gray-600 focus:outline-none focus:shadow-outline-none"
      >
        <svg-icon name="eye" class="w-4 h-4" />
        <span class="ml-1">Watched</span>
        <svg class="w-4 h-4 ml-1 -mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>

      <div v-else
           class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-lg bg-m-burgundy-600 hover:bg-m-burgundy-700 focus:outline-none focus:shadow-outline-none"
      >
        <svg-icon name="bookmark" class="w-4 h-4" />
        <span class="ml-1">In watchlist</span>
        <svg class="w-4 h-4 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>

      <transition
        :duration="{leave: 300}"
        mode="out-in"
        enter-active-class="transition duration-100 ease-out"
        enter-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-show="open" class="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg">
          <div class="rounded-md bg-m-blue-800" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div class="py-1">

              <div v-if="isWatched"
                   @click="update(false)"
                   class="flex items-center px-4 py-2 text-sm leading-5 text-gray-300 cursor-pointer group hover:bg-teal-900 hover:text-white focus:outline-none focus:bg-teal-900 focus:text-white" role="menuitem"
              >
                <svg-icon name="eye-off" class="w-5 h-5 mr-3 text-gray-300 group-hover:text-white group-focus:text-white" />
                Mark as unwatched
              </div>

              <div v-else
                   @click="update(true)"
                   class="flex items-center px-4 py-2 text-sm leading-5 text-gray-300 cursor-pointer group hover:bg-teal-900 hover:text-white focus:outline-none focus:bg-teal-900 focus:text-white" role="menuitem"
              >
                <svg-icon name="eye" class="w-5 h-5 mr-3 text-gray-300 group-hover:text-white group-focus:text-white" />
                Mark as watched
              </div>

              <div
                @click="deleteMovie()"
                class="flex items-center px-4 py-2 text-sm leading-5 text-gray-300 cursor-pointer group hover:bg-red-400 hover:text-white focus:outline-none focus:bg-red-400 focus:text-white" role="menuitem"
              >
                <svg class="w-5 h-5 mr-3 text-gray-300 group-hover:text-white group-focus:text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                Remove
              </div>
            </div>
          </div>

        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    movieId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    ...mapState({
      watchList: state => state.watchlist.watchList
    }),
    isInWatchList () {
      return this.watchList.some(movie => movie.movie_id === this.movieId)
    },
    isWatched () {
      return this.watchList.some(movie => movie.movie_id === this.movieId && movie.watched === true)
    }
  },
  methods: {
    async add () {
      await this.$axios.post('/watchlist/addMovie', { movieId: this.movieId })
      await this.$store.dispatch('watchlist/setWatchList')
    },
    async update (state) {
      await this.$axios.put('/watchlist/updateMovie', { movieId: this.movieId, watched: state })
      await this.$store.dispatch('watchlist/setWatchList')
    },
    async deleteMovie () {
      await this.$axios.delete('/watchlist/deleteMovie', { data: { movieId: this.movieId } })
      await this.$store.dispatch('watchlist/setWatchList')
    }
  }
}
</script>
