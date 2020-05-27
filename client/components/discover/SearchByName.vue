<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(prepareSearch)">
        <!-- Name -->
        <div class="pt-3 pb-3 mt-3 border-b-2 border-teal-900 lg:pt-6 lg:mt-6">
          <div class="pb-1">
            <div class="text-lg leading-7">
              <div
                @click="isOpen = !isOpen"
                class="flex items-start justify-between w-full text-left text-gray-400 cursor-pointer focus:outline-none focus:text-gray-900"
              >
                <span class="font-medium text-gray-300">Search By Name</span>
                <span class="flex items-center ml-6 h-7">
                  <svg
                    :class="isOpen ? '-rotate-180' : 'rotate-0'"
                    class="w-6 h-6 text-gray-300 transform"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <transition
              :duration="{leave: 300}"
              mode="out-in"
              enter-active-class="transition duration-300 ease-out"
              enter-class="transform -translate-y-4 opacity-0"
              enter-to-class="transform opacity-100"
              leave-active-class="transition duration-300 ease-in"
              leave-class="transform opacity-100"
              leave-to-class="transform -translate-y-4 opacity-0"
            >
              <div v-show="isOpen" class="mt-2">
                <div>
                  <label for="name" class="block text-sm font-medium leading-5 text-gray-300">Name</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <ValidationProvider v-slot="{ failed, changed }" mode="passive" rules="required">
                      <input
                        v-model.trim="query.movieName"
                        id="name"
                        :class=" failed && !changed ? 'border-red-400' : 'border-transparent'"
                        class="block w-full text-gray-300 border-transparent outline-none bg-m-blue-900 form-input sm:text-sm sm:leading-5 focus:outline-none hover:outline-none focus:border-teal-900 focus:shadow-none"
                        placeholder="Ex: Avengers"
                      />
                    </ValidationProvider>
                  </div>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full px-4 py-3 mt-6 mb-3 text-base font-medium leading-4 text-gray-300 transition duration-150 ease-in-out border border-transparent rounded-md lg:px-3 lg:py-3 bg-m-burgundy-700 hover:bg-m-burgundy-600 focus:outline-none focus:border-m-burgundy-600 active:bg-m-burgundy-600"
                >Search</button>
              </div>
            </transition>
          </div>
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
      isOpen: this.$device.isDesktop,
      query: {
        type: 'name',
        page: 1,
        movieName: ''
      }
    }
  },
  methods: {
    ...mapActions('search', ['setSearchQuery']),
    prepareSearch () {
      const query = Object.assign({}, JSON.parse(JSON.stringify(this.query)))
      this.setSearchQuery(query)
    }
  }
}
</script>
