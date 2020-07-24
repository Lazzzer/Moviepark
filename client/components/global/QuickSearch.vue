<template>
  <div class="w-full lg:flex lg:justify-end">
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(prepareSearch)" id="quickSearchForm">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <ValidationProvider v-slot="{ failed, changed }" mode="passive" rules="required">
            <input
              v-model="query.movieName"
              id="search"
              for="quickSearchForm"
              :class=" failed && !changed ? 'border-red-400' : 'border-transparent'"
              class="block w-full py-2 pl-10 pr-3 leading-5 text-white placeholder-gray-300 border border-transparent rounded-md lg:transition-all bg-m-blue-900 lg:bg-transparent focus:outline-none hover:bg-m-blue-900 focus:bg-m-blue-900 sm:text-sm lg:duration-300 lg:ease-in lg:w-40 lg:focus:w-80"
              placeholder="Quick search"
              type="search"
            />
          </ValidationProvider>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      query: {
        type: 'name',
        page: 1,
        movieName: ''
      }
    }
  },
  methods: {
    ...mapActions('search', ['setSearchQuery', 'setUserSearch']),
    prepareSearch () {
      const query = Object.assign({}, JSON.parse(JSON.stringify(this.query)))
      this.setSearchQuery(query)
      if (this.$router.currentRoute.name !== 'discover') {
        this.$router.push('/discover')
      }
    }
  }
}
</script>
