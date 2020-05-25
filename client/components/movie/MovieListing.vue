<template>
  <section id="movie-listing" class="relative w-full mt-4 lg:mt-0 lg:w-listing">
    <div class="w-11/12 mx-auto sm:w-full">
      <h3 class="mb-1 text-2xl font-extrabold text-gray-300 md:ml-3 sm:mb-0">{{ componentTitle }}</h3>
      <div class="flex w-full mt-2 space-x-4 overflow-x-scroll rounded-md noScrollbar sm:scrollbar">
        <Card v-for="(card,index) in infos" :key="index" :movie-infos="card" :animation="false" class="mb-5" :is-searched="false"></Card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/movie/Card.vue'
export default {
  components: {
    Card
  },
  props: {
    componentTitle: {
      type: String,
      required: true
    },
    infos: {
      type: Array,
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
