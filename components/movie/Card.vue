<template>
  <div class="relative">
    <img
      v-if="movieInfos.poster_path !== null"
      class="h-auto max-w-lg min-w-full rounded-md"
      :src="imgPath + movieInfos.poster_path"
      :alt="'Poster of ' + movieInfos.title "
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
