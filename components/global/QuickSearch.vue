<template>
  <div class="w-full max-w-lg lg:w-64">
    <form @submit.prevent="prepareSearch">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          v-model="query.movieName"
          id="search"
          class="block w-full py-2 pl-10 pr-3 leading-5 text-white placeholder-gray-400 transition duration-150 ease-in-out border border-transparent rounded-md bg-m-blue-900 lg:bg-m-blue-800 focus:outline-none hover:bg-m-blue-900 focus:bg-m-blue-900 sm:text-sm"
          placeholder="Quick search"
          type="search"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      query: {
        type: 'name',
        movieName: ''
      }
    }
  },
  methods: {
    ...mapActions('search', ['setSearchQuery', 'setUserSearch']),
    prepareSearch() {
      const query = Object.assign({}, JSON.parse(JSON.stringify(this.query)))
      this.setSearchQuery(query)

      if (this.$router.currentRoute.name !== 'Discover') {
        this.setUserSearch(true)
        this.$router.push('/discover')
      }
    }
  }
}
</script>
