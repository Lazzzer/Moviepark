<template>
  <div class="relative hidden p-8 rounded-md lg:flex bg-m-blue-900">
    <div
      class="absolute top-0 right-0 z-0 w-full h-full bg-cover rounded-md"
      :style="movieInfos.backdrop_path !== null ? 'background:url('+ backdropPath + movieInfos.backdrop_path + ') top center / cover no-repeat,linear-gradient(black,black);opacity:0.08;' : ''"
    ></div>
    <img
      class="relative object-cover rounded-md w-card-xl h-card-xl"
      :src="movieInfos.poster_path !== null ? imgPath + movieInfos.poster_path : require('~/assets/img/noPoster.jpg')"
      :alt="'Poster of ' + movieInfos.title "
    />
    <div class="relative flex flex-col w-full h-full mt-6 ml-8 text-gray-300 lg:mt-10">
      <h2 class="text-2xl font-extrabold leading-7 text-gray-300 lg:leading-8 lg:text-4xl">{{ movieInfos.title }}</h2>
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

      <div class="flex items-center mt-2">
        <span class="mr-1 font-bold">User score:</span>
        <span
          :class="movieInfos.vote_average > 5.1 ? 'bg-green-500' : 'bg-red-500'"
          class="inline-flex items-center justify-center w-8 h-8 text-sm border border-gray-300 rounded-full"
        >
          <span class="font-bold text-m-blue-900">{{ movieInfos.vote_average }}</span>
        </span>

        <span v-if="movieInfos.videos.results.some(video => video.type === 'Trailer')" @click="showTrailer" class="inline-flex items-center ml-4 text-gray-300 cursor-pointer hover:text-white">
          <svg class="inline-block w-6 h-auto mr-2 stroke-current" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.0533 4.56016C29.8949 3.92738 29.5723 3.34759 29.1182 2.87937C28.664 2.41115 28.0943 2.07108 27.4666 1.8935C25.1733 1.3335 15.9999 1.3335 15.9999 1.3335C15.9999 1.3335 6.82662 1.3335 4.53328 1.94683C3.90561 2.12441 3.33592 2.46448 2.88174 2.9327C2.42757 3.40093 2.105 3.98071 1.94662 4.6135C1.5269 6.9409 1.3216 9.30191 1.33328 11.6668C1.31832 14.0496 1.52364 16.4286 1.94662 18.7735C2.12123 19.3866 2.45102 19.9444 2.90414 20.3928C3.35726 20.8412 3.91838 21.1652 4.53328 21.3335C6.82662 21.9468 15.9999 21.9468 15.9999 21.9468C15.9999 21.9468 25.1733 21.9468 27.4666 21.3335C28.0943 21.1559 28.664 20.8158 29.1182 20.3476C29.5723 19.8794 29.8949 19.2996 30.0533 18.6668C30.4698 16.3569 30.6751 14.0139 30.6666 11.6668C30.6816 9.2841 30.4763 6.90509 30.0533 4.56016V4.56016Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13 16.0266L20.6667 11.6666L13 7.30664V16.0266Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="font-bold ">Trailer</span>
        </span>

        <a v-if="facebookId !== null" :href="'https://facebook.com/' + facebookId" target="_blank" class="ml-2">
          <svg class="inline-block w-auto h-6 stroke-current hover:text-white hover:fill-current" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2.6665H20C18.2319 2.6665 16.5362 3.36888 15.286 4.61913C14.0358 5.86937 13.3334 7.56506 13.3334 9.33317V13.3332H9.33337V18.6665H13.3334V29.3332H18.6667V18.6665H22.6667L24 13.3332H18.6667V9.33317C18.6667 8.97955 18.8072 8.64041 19.0572 8.39036C19.3073 8.14031 19.6464 7.99984 20 7.99984H24V2.6665Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>

        <a v-if="instagramId !== null" :href="'https://instagram.com/' + instagramId" target="_blank" class="ml-1">

          <svg class="inline-block w-auto h-6 stroke-current hover:text-white hover:fill-current" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.6666 2.6665H9.33329C5.65139 2.6665 2.66663 5.65127 2.66663 9.33317V22.6665C2.66663 26.3484 5.65139 29.3332 9.33329 29.3332H22.6666C26.3485 29.3332 29.3333 26.3484 29.3333 22.6665V9.33317C29.3333 5.65127 26.3485 2.6665 22.6666 2.6665Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.3334 15.1599C21.4979 16.2696 21.3084 17.4029 20.7917 18.3986C20.275 19.3943 19.4575 20.2018 18.4555 20.7061C17.4535 21.2105 16.3179 21.386 15.2104 21.2078C14.1029 21.0296 13.0797 20.5067 12.2865 19.7135C11.4932 18.9202 10.9703 17.8971 10.7921 16.7895C10.6139 15.682 10.7894 14.5464 11.2938 13.5444C11.7981 12.5424 12.6056 11.7249 13.6013 11.2082C14.5971 10.6916 15.7304 10.502 16.84 10.6666C17.9719 10.8344 19.0198 11.3619 19.8289 12.171C20.6381 12.9801 21.1655 14.028 21.3334 15.1599Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23.3334 8.6665H23.3467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </a>

        <a v-if="twitterId !== null" :href="'https://twitter.com/' + twitterId" target="_blank" class="ml-2">
          <svg class="inline-block w-auto h-6 stroke-current hover:text-white hover:fill-current" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.6667 4.00022C29.3899 4.90086 27.9762 5.5897 26.48 6.04022C25.677 5.11691 24.6098 4.46248 23.4228 4.16546C22.2357 3.86844 20.986 3.94315 19.8428 4.3795C18.6996 4.81584 17.718 5.59276 17.0307 6.60518C16.3434 7.6176 15.9836 8.81667 16 10.0402V11.3736C13.6569 11.4343 11.3351 10.9146 9.24139 9.86082C7.1477 8.807 5.34713 7.25174 4.00004 5.33356C4.00004 5.33356 -1.33329 17.3336 10.6667 22.6669C7.92074 24.5308 4.64958 25.4655 1.33337 25.3336C13.3334 32.0002 28 25.3336 28 10.0002C27.9988 9.62883 27.9631 9.25835 27.8934 8.89356C29.2542 7.55155 30.2145 5.85717 30.6667 4.00022V4.00022Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>

      </div>

      <div>
      </div>
      <p class="mt-2 text-lg italic text-gray-300">{{ movieInfos.tagline }}</p>
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
    },
    facebookId () {
      return this.movieInfos.external_ids.facebook_id
    },
    instagramId () {
      return this.movieInfos.external_ids.instagram_id
    },
    twitterId () {
      return this.movieInfos.external_ids.twitter_id
    }
  },
  methods: {
    formateDate (date) {
      const formattedDate = new Date(date)
      return formattedDate instanceof Date && !isNaN(formattedDate) ? formattedDate.toLocaleDateString('fr-FR') : 'No date given'
    },
    showTrailer () {
      this.$modal.show('trailer')
    },
    hideTrailer () {
      this.$modal.hide('trailer')
    }
  }
}
</script>
