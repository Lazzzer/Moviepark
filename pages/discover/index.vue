<template>
  <div class="container w-full h-full mx-auto mt-10 lg:flex">
    <section id="menu" class="w-full lg:w-1/4">
      <h2 class="mx-3 text-3xl font-bold text-gray-300">Discover</h2>
      <!-- Search By Name -->
      <div class="pt-6 pb-3 mx-3 mt-6 border-b-2 border-teal-900">
        <div class="pb-1">
          <div class="text-lg leading-7">
            <button
              @click="searchIsOpen = !searchIsOpen"
              class="flex items-start justify-between w-full text-left text-gray-400 focus:outline-none focus:text-gray-900"
            >
              <span class="font-medium text-gray-300">Search By Name</span>
              <span class="flex items-center ml-6 h-7">
                <svg
                  :class="searchIsOpen ? '-rotate-180' : 'rotate-0'"
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
            </button>
          </div>
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-class="transform -translate-y-4 opacity-0"
            enter-to-class="transform opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-class="transform opacity-100"
            leave-to-class="transform -translate-y-4 opacity-0"
          >
            <div v-show="searchIsOpen" class="pr-12 mt-2">
              <p
                class="text-base leading-6 text-gray-500"
              >I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
            </div>
          </transition>
        </div>
      </div>

      <!-- Search By Name -->
      <div class="pt-1 pb-3 mx-3 mt-6 border-b-2 border-teal-900">
        <div class="pb-1">
          <div class="text-lg leading-7">
            <button
              @click="filtersIsOpen = !filtersIsOpen"
              class="flex items-start justify-between w-full text-left text-gray-400 focus:outline-none focus:text-gray-900"
            >
              <span class="font-medium text-gray-300">Search With Filters</span>
              <span class="flex items-center ml-6 h-7">
                <svg
                  :class="filtersIsOpen ? '-rotate-180' : 'rotate-0'"
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
            </button>
          </div>
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-class="transform -translate-y-4 opacity-0"
            enter-to-class="transform opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-class="transform opacity-100"
            leave-to-class="transform -translate-y-4 opacity-0"
          >
            <div v-show="filtersIsOpen" class="pr-12 mt-2">
              <p
                class="text-base leading-6 text-gray-500"
              >I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
            </div>
          </transition>
        </div>
      </div>
    </section>
    <section id="content" class="w-full bg-red-300 lg:w-3/4">Yolo</section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchIsOpen: false,
      filtersIsOpen: false
    }
  }
}
</script>
