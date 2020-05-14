<template>
  <div>
    <form @submit.prevent>
      <!-- Filters -->
      <div class="pt-1 pb-3 mt-6 border-b-2 border-teal-900">
        <div class="pb-1">
          <div class="text-lg leading-7">
            <div
              @click="isOpen = !isOpen"
              class="flex items-start justify-between w-full text-left text-gray-400 cursor-pointer focus:outline-none focus:text-gray-900"
            >
              <span class="font-medium text-gray-300">Search With Filters</span>
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
            mode="out-in"
            enter-active-class="transition duration-300 ease-out"
            enter-class="transform -translate-y-4 opacity-0"
            enter-to-class="transform opacity-100"
            leave-active-class="transition duration-300 ease-in"
            leave-class="transform opacity-100"
            leave-to-class="transform -translate-y-4 opacity-0"
          >
            <div v-show="isOpen" class="mt-2">
              <!-- Sort By -->
              <div>
                <label
                  for="sortBy"
                  class="block text-sm font-medium leading-5 text-gray-300"
                >Sort By</label>
                <div class="mb-3 sm:mt-0">
                  <div class="mt-1 rounded-md shadow-sm">
                    <select
                      v-model="query.sortBy"
                      id="sortBy"
                      aria-label="language"
                      class="block w-full text-gray-300 transition duration-150 ease-in-out border-transparent outline-none bg-m-blue-900 form-select sm:text-sm sm:leading-5 focus:outline-none hover:outline-none focus:border-teal-900 focus:shadow-none"
                    >
                      <option value="popularity.desc" selected>Popularity (Desc.)</option>
                      <option value="popularity.asc">Popularity (Asc.)</option>
                      <option value="original_title.desc">Title (Desc.)</option>
                      <option value="original_title.asc">Title (Asc.)</option>
                      <option value="release_date.desc">Release Date (Desc.)</option>
                      <option value="release_date.asc">Release Date (Asc.)</option>
                      <option value="vote_average.desc">Vote Average (Desc.)</option>
                      <option value="vote_average.asc">Vote Average (Asc.)</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Genres -->
              <div class="mt-2">
                <label
                  for="genre"
                  class="block mb-1 text-sm font-medium leading-5 text-gray-300"
                >Genres</label>
                <div class="flex flex-wrap mb-1 sm:mt-0">
                  <span
                    v-for="genre in genresList"
                    :key="genre.id"
                    @click="query.genre.includes(genre.id) ? query.genre = query.genre.filter(item => item !== genre.id) : query.genre.push(genre.id) "
                    :class="['cursor-pointer inline-flex items-center px-3 py-1 mb-2 mr-2 text-xs font-medium leading-4  rounded-md', query.genre.includes(genre.id) ? 'bg-m-burgundy-700 text-white' : 'bg-m-blue-900 text-gray-300' ]"
                  >
                    {{ genre.name }}
                    <button
                      v-if="query.genre.includes(genre.id)"
                      type="button"
                      class="inline-flex flex-shrink-0 ml-1 text-gray-300 focus:outline-none focus:text-gray-100"
                    >
                      <svg
                        class="w-2 h-2 text-white"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                      >
                        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>

              <!-- Release Dates -->
              <div>
                <span
                  class="block mt-2 mb-1 text-sm font-medium leading-5 text-gray-300"
                >Release Dates</span>
                <label
                  for="releaseDatesFrom"
                  class="block text-xs font-medium leading-5 text-gray-300"
                >From</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input
                    v-model.trim="query.releaseDates[0]"
                    id="releaseDatesFrom"
                    type="date"
                    class="block w-full text-gray-300 border-transparent outline-none bg-m-blue-900 form-input sm:text-sm sm:leading-5 focus:outline-none hover:outline-none focus:border-teal-900 focus:shadow-none"
                    placeholder="Ex: Avengers"
                  />
                  <label
                    for="releaseDatesFrom"
                    class="block mt-1 text-xs font-medium leading-5 text-gray-300"
                  >To</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <input
                      v-model.trim="query.releaseDates[1]"
                      id="releaseDatesTo"
                      type="date"
                      class="block w-full text-gray-300 border-transparent outline-none bg-m-blue-900 form-input sm:text-sm sm:leading-5 focus:outline-none hover:outline-none focus:border-teal-900 focus:shadow-none"
                      placeholder="Ex: Avengers"
                    />
                  </div>
                </div>
              </div>

              <!-- Person -->
              <div class="mt-2">
                <label
                  for="person"
                  class="block text-sm font-medium leading-5 text-gray-300"
                >Actor/Director</label>
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input
                    v-model="selectedPersonName"
                    @click="showPersonModal = !showPersonModal"
                    @keydown.enter.prevent
                    @keyup="delayedCall($event.target.value, 800)"
                    id="person"
                    class="block w-full text-gray-300 border-transparent outline-none bg-m-blue-900 form-input sm:text-sm sm:leading-5 focus:outline-none hover:outline-none focus:border-teal-900 focus:shadow-none"
                    placeholder="Ex: Quentin Tarantino"
                  />
                  <div
                    v-if="personNameResult.length > 0 && selectedPersonName.length > 2 && showPersonModal"
                    @blur="showPersonModal = !showPersonModal"
                    class="absolute block w-48 overflow-y-scroll transition duration-150 ease-in-out rounded max-h-40 scrollbarDiv top-11 bg-m-blue-900"
                  >
                    <div
                      v-for="person in personNameResult"
                      :key="person.id"
                      @click="query.person = person.id, selectedPersonName = person.name, showPersonModal = !showPersonModal"
                      class="p-1 pl-4 cursor-pointer hover:bg-m-burgundy-700"
                    >
                      <span class="text-sm text-gray-300">{{ person.name }}</span>
                    </div>
                  </div>
                  <div
                    v-if="noPersonResult && selectedPersonName.length > 2 && showPersonModal"
                    class="absolute flex items-center justify-center block w-48 h-10 border rounded max-h-40 top-11 bg-m-blue-900 border-m-burgundy-700"
                  >
                    <span class="text-sm text-gray-300">Person not found</span>
                  </div>
                </div>
              </div>

              <!-- Votes Average -->
              <div class="mt-2">
                <label
                  for="votesAverage"
                  class="block text-sm font-medium leading-5 text-gray-300"
                >Votes Average Greater Than</label>
                <div class="mb-3 sm:mt-0">
                  <div class="mt-1 rounded-md shadow-sm">
                    <input
                      v-model.trim="query.votesAverage"
                      id="votesAverage"
                      min="0"
                      max="10"
                      type="number"
                      class="block w-20 text-gray-300 border-transparent outline-none bg-m-blue-900 form-input sm:text-sm sm:leading-5 focus:outline-none hover:outline-none focus:border-teal-900 focus:shadow-none"
                      placeholder="10"
                    />
                  </div>
                </div>
              </div>
              <button
                @click="prepareSearch"
                type="submit"
                class="inline-flex items-center justify-center w-full px-4 py-3 mt-6 mb-3 text-base font-medium leading-4 text-gray-300 transition duration-150 ease-in-out border border-transparent rounded-md lg:px-3 lg:py-2 bg-m-burgundy-700 hover:bg-m-burgundy-600 focus:outline-none focus:border-m-burgundy-600 active:bg-m-burgundy-600"
              >Search</button>
            </div>
          </transition>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      isOpen: false,
      query: {
        type: 'filters',
        sortBy: 'popularity.desc',
        genre: [],
        releaseDates: ['', ''],
        votesAverage: '',
        person: ''
      },
      personNameResult: [],
      selectedPersonName: '',
      showPersonModal: false,
      noPersonResult: false
    }
  },
  computed: {
    ...mapState({
      genresList: state => state.tmdb.genresList
    })
  },
  watch: {
    selectedPersonName() {
      if (this.selectedPersonName === '') {
        this.query.person = ''
      }
    }
  },
  methods: {
    ...mapActions('search', ['setSearchQuery']),
    prepareSearch() {
      const query = Object.assign({}, JSON.parse(JSON.stringify(this.query)))
      this.setSearchQuery(query)
    },
    delayedCall(search, debounceDuration = 300) {
      if (search !== ' ' && search.length > 2) {
        if (this.timeoutId !== null) {
          clearTimeout(this.timeoutId)
        }
        this.noPersonResult = false
        this.timeoutId = setTimeout(() => {
          this.$axios.get(`${process.env.BASE_URL}/tmdb/search/personDummy/${search}`)
            .then((res) => {
              this.personNameResult = res.data.results
              if (this.personNameResult.length === 0) {
                this.noPersonResult = true
                this.showPersonModal = true
              } else {
                this.showPersonModal = true
              }
              console.log('CALLING API FOR CAST', this.personNameResult)
            })
            .catch((err) => {
              this.personNameResult = ''
              this.noPersonResult = true
              console.log(err)
            })
        }, debounceDuration)
      }
    }
  }
}
</script>
<style>
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    background-color: transparent;
    color:#014451;
    -webkit-appearance: none;
 }
 .scrollbarDiv{
    scrollbar-width: none;
  }
  .scrollbarDiv::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>
