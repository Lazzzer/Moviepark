<template>
  <div class="relative flex p-8 rounded-md bg-m-blue-900">
    <div
      class="absolute top-0 right-0 z-0 w-full h-full bg-cover rounded-md"
      :style="movieInfos.backdrop_path !== null ? 'background:url('+ backdropPath + movieInfos.backdrop_path + ') top center / cover no-repeat,linear-gradient(black,black);opacity:0.08;' : ''"
    ></div>
    <img
      class="relative object-cover rounded-md"
      :src="movieInfos.poster_path !== null ? imgPath + movieInfos.poster_path : require('~/assets/img/noPoster.jpg')"
      :alt="'Poster of ' + movieInfos.title "
    />
    <div class="relative flex flex-col w-full h-full mt-10 ml-8 text-gray-300">
      <h2 class="text-4xl font-extrabold leading-8 text-gray-300">{{ movieInfos.title }}</h2>
      <div class="mt-1">

        <span class="font-bold">Release: </span>
        <span>{{ formateDate(movieInfos.release_date) }}</span>
        <span class="font-bold">- Duration: </span>
        <span>{{ runtime }} </span>

      </div>
      <div class="mt-1">

        <span
          v-for="(genre, index) in movieInfos.genres"
          :key="index"
          :class="index === 0 ? '' : 'ml-2'"
          class="items-center self-end hidden px-3 py-1 text-xs font-medium leading-4 text-gray-300 bg-teal-900 rounded-md sm:inline-flex"
        >{{ genre.name }}</span>
      </div>

      <div class="mt-2">
        <span class="font-bold">User score:</span>
        <span
          :class="movieInfos.vote_average > 5.1 ? 'bg-green-500' : 'bg-red-500'"
          class="inline-flex items-center justify-center w-8 h-8 text-sm border border-gray-300 rounded-full"
        >
          <span class="font-bold text-m-blue-900">{{ movieInfos.vote_average }}</span>
        </span>

      </div>

      <div>
      </div>
      <p class="mt-3 text-lg italic text-gray-300">{{ movieInfos.tagline }}</p>
      <h4 class="mt-2 font-bold">Overview:</h4>
      <p class="mt-1 leading-5 text-justify text-gray-300">{{ movieInfos.overview }}</p>

      <div v-if="directorArray.length > 0" class="mt-3">
        <span class="font-bold">{{ directorArray.length > 1 ? 'Directors:' : 'Director:' }}</span>
        <span v-for="(director, index) in directorArray" :key="index">
          {{ director.name }}<span v-if="directorArray.length > 1 && index !== directorArray.length -1 ">,</span>
        </span>
      </div>
      <div v-if="producerArray.length > 0" class="mt-1">
        <span class="font-bold">{{ producerArray.length > 1 ? 'Producers:' : 'Producer:' }}</span>
        <span v-for="(producer, index) in producerArray" :key="index">
          {{ producer.name }}<span v-if="producerArray.length > 1 && index !== producerArray.length -1 ">,</span>
        </span>
      </div>

    </div>

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
  data () {
    return {
      imgPath: 'https://image.tmdb.org/t/p/w300',
      backdropPath: 'https://image.tmdb.org/t/p/w780'
    }
  },
  computed: {
    directorArray () {
      return this.movieInfos.credits.crew.filter(person => person.job === 'Director')
    },
    producerArray () {
      return this.movieInfos.credits.crew.filter(person => person.job === 'Producer')
    },
    runtime () {
      let minutes = this.movieInfos.runtime
      const hours = Math.floor(minutes / 60)
      minutes %= 60

      return hours + 'h' + minutes + 'm'
    }
  },
  methods: {
    formateDate (date) {
      const formattedDate = new Date(date)
      return formattedDate instanceof Date && !isNaN(formattedDate) ? formattedDate.toLocaleDateString('fr-FR') : 'No date given'
    }
  }
}
</script>
