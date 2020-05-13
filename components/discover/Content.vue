<template>
  <div class="flex flex-wrap w-full ml-2 lg:w-3/4">
    <Card v-for="(card,index) in movieList.results" :key="index" class="m-2" :movie-infos="card"></Card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/movie/Card.vue'
export default {
  components: {
    Card
  },
  computed: {
    ...mapState({
      movieList: state => state.search.movieList
    })
  }
}
</script>
