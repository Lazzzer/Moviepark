<template>
  <div class="relative w-full h-full min-h-screen font-sans bg-m-blue-800 scrollbar">
    <div class="absolute top-0 right-0 z-0 hidden w-full sm:block h-2/3 md:h-1/2"
         :style="{ 'background': 'url('+ require('assets/img/layout-bg.png')+') 55% 0% / 100% auto no-repeat', 'opacity':0.2}"
    ></div>
    <div class="absolute top-0 right-0 z-0 block w-full sm:hidden h-2/3 md:h-1/2"
         :style="{ 'background': 'url('+ require('assets/img/layout-bg-mobile.png')+') 55% 0% / 100% auto no-repeat', 'opacity':0.2 }"
    ></div>
    <Navbar></Navbar>
    <nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '@/components/global/Navbar.vue'
import Footer from '@/components/global/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  head () {
    return {
      titleTemplate: '%s - Moviepark',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Don\'t know what to watch? Discover hidden gems in Moviepark powered by TheMovieDB and its rich catalog of +500K movies.'
        }
      ]
    }
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
