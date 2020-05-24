<template>
  <div class="relative">
    <div v-if="isSearched" class="relative flex p-2 m-4 duration-500 ease-in-out rounded-md cursor-pointer placeholder-content h-detailedCard bg-m-blue-900 hover:shadow-md md:transform md:transition hover:scale-105"></div>
    <nuxt-link v-else :to="'/movies/'+ movieInfos.id" tag="a" no-prefetch class="relative flex p-2 m-4 duration-500 ease-in-out rounded-md cursor-pointer bg-m-blue-900 hover:shadow-md md:transform md:transition hover:scale-105">
      <div
        class="absolute top-0 right-0 z-0 w-full h-full bg-cover rounded-md"
        :style="movieInfos.backdrop_path !== null ? 'background:url('+ backdropPath + movieInfos.backdrop_path + ') top center / cover no-repeat,linear-gradient(black,black);opacity:0.08;' : ''"
      ></div>
      <img
        class="relative object-cover h-auto rounded-md w-detailedCard h-detailedCard"
        :src="movieInfos.poster_path !== null ? imgPath + movieInfos.poster_path : require('~/assets/img/noPoster.jpg')"
        :alt="'Poster of ' + movieInfos.title "
        :title="movieInfos.title"
      />
      <div class="relative h-full mx-2">
        <!-- Display xl-->
        <div class="hidden xl:block">
          <p
            class="font-bold text-gray-300 truncate md:text-lg sm:w-full"
          >{{ movieInfos.title.length > 70 ? movieInfos.title.slice(0,70) + '...' : movieInfos.title }}</p>

          <p
            class="w-full h-20 mt-1 text-xs text-justify text-gray-300"
          >{{ movieInfos.overview.length > 450 ? movieInfos.overview.slice(0,450) + '...' : movieInfos.overview }}</p>
        </div>
        <!-- Display sm-->
        <div class="hidden sm:block xl:hidden">
          <p
            class="font-bold text-gray-300 truncate md:text-lg sm:w-full"
          >{{ movieInfos.title.length > 50 ? movieInfos.title.slice(0,50) + '...' : movieInfos.title }}</p>

          <p
            class="w-full h-20 mt-1 text-xs text-justify text-gray-300"
          >{{ movieInfos.overview.length > 280 ? movieInfos.overview.slice(0,280) + '...' : movieInfos.overview }}</p>
        </div>
        <!-- Display std-->
        <div class="block sm:hidden xl:hidden">
          <p
            class="font-bold text-gray-300 truncate md:text-lg sm:w-full"
          >{{ movieInfos.title.length > 20 ? movieInfos.title.slice(0,20) + '...' : movieInfos.title }}</p>

          <p
            class="w-full h-20 mt-1 text-xs text-justify text-gray-300"
          >{{ movieInfos.overview.length > 110 ? movieInfos.overview.slice(0,110) + '...' : movieInfos.overview }}</p>
        </div>

        <div>
          <span
            :class="movieInfos.vote_average > 5.1 ? 'bg-green-500' : 'bg-red-500'"
            class="inline-flex items-center justify-center w-6 h-6 -mr-1 text-xs rounded-full right-1 bottom-1"
          >
            <span class="font-bold text-m-blue-900">{{ movieInfos.vote_average }}</span>
          </span>

          <span
            v-for="(id, index) in movieInfos.genre_ids.slice(0,2)"
            :key="index"
            class="items-center hidden px-3 py-1 ml-2 text-xs font-medium leading-4 text-gray-300 bg-teal-900 rounded-md sm:inline-flex"
          >{{ genresList.find(genre => genre.id === id).name }}</span>
          <span
            v-if="movieInfos.genre_ids.length > 2"
            class="items-center hidden px-3 py-1 text-xs font-medium leading-4 text-gray-300 bg-teal-900 rounded-md sm:inline-flex"
          >+{{ ' ' + movieInfos.genre_ids.length - 2 }}</span>
          <span
            class="w-full mt-2 ml-2 text-xs italic text-gray-300 sm:ml-0"
          >{{ formateDate(movieInfos.release_date) }}</span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    movieInfos: {
      type: Object,
      required: true
    },
    isSearched: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      imgPath: 'https://image.tmdb.org/t/p/w92',
      backdropPath: 'https://image.tmdb.org/t/p/w300'
    }
  },
  computed: {
    ...mapState({
      genresList: state => state.tmdb.genresList
    })
  },
  methods: {
    formateDate (date) {
      const formattedDate = new Date(date)
      return formattedDate instanceof Date && !isNaN(formattedDate) ? formattedDate.toLocaleDateString('fr-FR') : 'No date given'
    }
  }
}
</script>
