<template>
  <nuxt-link :to="'/movies/'+ movieInfos.id" tag="a" no-prefetch
             :class="animation ? 'duration-500 ease-in-out md:transform md:transition hover:-translate-y-1 hover:scale-105' : ' '"
             class="relative flex-shrink-0 block cursor-pointer hover:shadow-md "
  >
    <div class="absolute z-20 w-full h-full px-3 py-2 duration-500 bg-opacity-75 rounded-md opacity-0 bg-m-blue-900 hover:opacity-100">
      <p class="font-bold leading-5 text-gray-300 "
         :class="movieInfos.title.length < 30 ? 'text-lg' : 'text-base'"
      >{{ movieInfos.title.length > 100 ? movieInfos.title.slice(0,100) + '...' : movieInfos.title }}</p>
    </div>
    <img
      class="object-cover rounded-md md:w-card-lg md:h-card-lg w-card h-card"
      :src="movieInfos.poster_path !== null ? imgPath + movieInfos.poster_path : require('~/assets/img/noPoster.jpg')"
      :alt="'Poster of ' + movieInfos.title "
    />
    <span
      :class="movieInfos.vote_average > 5.1 ? 'bg-green-500' : 'bg-red-500'"
      class="absolute flex items-center justify-center w-8 h-8 text-xs border border-gray-300 rounded-full right-1 bottom-1"
    >
      <span class="font-bold text-m-blue-900">{{ movieInfos.vote_average }}</span>
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    movieInfos: {
      type: Object,
      required: true
    },
    animation: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      imgPath: 'https://image.tmdb.org/t/p/w154'
    }
  }
}
</script>
