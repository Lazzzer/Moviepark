<template>
  <div
    class="relative duration-500 ease-in-out cursor-pointer hover:shadow-md md:transform md:transition hover:-translate-y-1 hover:scale-105"
  >
    <img
      class="object-cover h-auto min-w-full rounded-md md:w-card-lg md:h-card-lg w-card h-card"
      :src="movieInfos.poster_path !== null ? imgPath + movieInfos.poster_path : require('~/assets/img/noPoster.jpg')"
      :alt="'Poster of ' + movieInfos.title "
      :title="movieInfos.title"
    />
    <span
      :class="movieInfos.vote_average > 5.1 ? 'bg-green-500' : 'bg-red-500'"
      class="absolute flex items-center justify-center w-8 h-8 text-xs border border-gray-300 rounded-full right-1 bottom-1"
    >
      <span class="font-bold text-m-blue-900">{{ movieInfos.vote_average }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    movieInfos: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imgPath: 'https://image.tmdb.org/t/p/w154'
    }
  }
}
</script>
