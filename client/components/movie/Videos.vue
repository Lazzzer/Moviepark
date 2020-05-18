<template>
  <div>
    <h3 class=""></h3>

    <div class="pb-1">
      <div class="text-lg leading-7">
        <div
          @click="isOpen = !isOpen"
          class="flex items-start w-full text-left text-gray-400 cursor-pointer focus:outline-none focus:text-gray-900"
        >
          <span class="text-2xl font-extrabold text-gray-300">Trailers & videos</span>
          <span class="flex items-center ml-2 h-7">
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
        <div v-show="isOpen" class="flex justify-center mt-4">
          <div id="trailer" class="flex justify-center w-1/2">
            <iframe width="601" height="338" class="rounded-md" :src="'https://www.youtube-nocookie.com/embed/' + trailerId" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="flex flex-wrap justify-center w-1/2">
            <div v-for="video in videosArray.slice(0,4)" :key="video.id" id="videos">
              <iframe width="300" height="169" class="m-2 rounded-md" :src="'https://www.youtube-nocookie.com/embed/' + video.key" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

        </div>
      </transition>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    videosInfos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isOpen: true
    }
  },
  computed: {
    trailerId () {
      return this.videosInfos.find(video => video.type === 'Trailer').key
    },
    videosArray () {
      return this.videosInfos.filter(video => video.type !== 'Trailer')
    }
  }
}
</script>
