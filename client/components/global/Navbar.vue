<template>
  <nav class="relative z-10">
    <div class="px-2 pt-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <nuxt-link to="/">
              <svg
                class="hidden w-auto h-6 lg:block"
                viewBox="0 0 826 145" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M733.22 116.109L734.939 72.4243C737.306 73.6634 742.548 75.898 748.535 76.9108L743.871 118.665L743.736 120.146C740.05 119.135 736.534 117.775 733.22 116.109Z" fill="#D70745" />
                <path d="M753.302 121.922L763.665 79.4702C767.362 80.0357 775.4 80.8747 777.993 79.707L763.957 121.991C760.464 122.296 756.9 122.282 753.302 121.922Z" fill="#D70745" />
                <path d="M788.391 59.764C794.878 61.9956 796.75 67.9611 796.872 70.7193L775.558 120.848C795.577 114.674 811.468 97.6895 815.2 75.605C820.476 44.3976 799.479 14.8236 768.301 9.54958C737.126 4.27561 707.574 25.2989 702.299 56.5063C698.742 77.5414 707.124 97.8347 722.514 110.444L722.543 110.264L720.635 57.8107C721.658 55.2363 725.411 50.1924 732.316 50.254C732.457 50.2107 732.6 50.168 732.741 50.1265C735.547 43.3896 744.984 32.7406 760.843 43.0416C761.117 43.0114 761.407 42.9885 761.713 42.9748C778.66 39.9574 787.468 52.4471 787.96 59.4514C788.105 59.5545 788.248 59.6588 788.391 59.764Z" fill="#D70745" />
                <path d="M0.558441 14.0847V115.205H27.4089V56.3499H28.1986L50.7055 114.415H66.8947L89.4018 56.745H90.1915V115.205H117.042V14.0847H82.8865L59.3924 71.36H58.2078L34.7138 14.0847H0.558441ZM160.712 116.588C185.391 116.588 200.001 100.788 200.001 77.4826C200.001 54.1775 185.391 38.3773 160.712 38.3773C136.034 38.3773 121.424 54.1775 121.424 77.4826C121.424 100.788 136.034 116.588 160.712 116.588ZM160.91 96.4428C153.605 96.4428 149.261 89.1847 149.261 77.2852C149.261 65.3856 153.605 58.1275 160.91 58.1275C167.82 58.1275 172.163 65.3856 172.163 77.2852C172.163 89.1847 167.82 96.4428 160.91 96.4428ZM278.9 39.3649H250.272L238.033 89.5303H237.243L225.002 39.3649H196.375L221.843 115.205H253.431L278.9 39.3649ZM280.395 115.205H307.639V39.3649H280.395V115.205ZM294.016 31.4648C301.421 31.4648 307.443 25.8854 307.443 19.0222C307.443 12.159 301.421 6.57959 294.016 6.57959C286.614 6.57959 280.592 12.159 280.592 19.0222C280.592 25.8854 286.614 31.4648 294.016 31.4648ZM351.594 116.588C372.619 116.588 386.145 106.515 388.71 90.7153H363.835C362.255 95.0109 357.763 97.4302 352.186 97.4302C344.093 97.4302 339.353 92.0978 339.353 84.7902V83.6052H388.71V77.2852C388.71 53.1407 373.904 38.3773 351.002 38.3773C327.507 38.3773 312.502 53.9799 312.502 77.4826C312.502 102.022 327.31 116.588 351.594 116.588ZM339.353 68.5951C339.502 62.0282 344.93 57.535 351.594 57.535C358.357 57.535 363.49 62.0774 363.637 68.5951H339.353ZM393.573 143.646H420.819V102.763H421.214C424.373 110.465 431.678 116.193 442.339 116.193C458.529 116.193 472.15 103.553 472.15 77.2852C472.15 49.8325 457.54 38.3773 442.537 38.3773C431.283 38.3773 424.175 44.8949 421.214 52.5974H420.623V39.3649H393.573V143.646ZM420.227 77.2852C420.227 66.0276 424.769 59.3125 432.27 59.3125C439.772 59.3125 444.116 66.0276 444.116 77.2852C444.116 88.5427 439.772 95.2578 432.27 95.2578C424.769 95.2578 420.227 88.3453 420.227 77.2852ZM498.435 116.39C508.308 116.39 515.76 113.033 520.35 104.54H520.942V115.205H546.411V63.2625C546.411 49.24 533.133 38.3773 511.465 38.3773C488.811 38.3773 477.656 50.2274 476.717 64.0526H501.791C502.432 59.362 505.887 57.1399 511.072 57.1399C515.809 57.1399 519.165 59.3125 519.165 63.2625V63.4601C519.165 67.8544 514.328 69.2369 501.594 70.175C485.948 71.3108 473.757 77.6308 473.757 94.2702C473.757 109.379 483.925 116.39 498.435 116.39ZM507.319 99.2078C502.681 99.2078 499.422 96.9366 499.422 92.6903C499.422 88.7896 502.186 85.7778 508.504 84.7902C512.847 84.099 516.5 83.2101 519.363 82.0253V88.3453C519.363 95.2578 513.49 99.2078 507.319 99.2078ZM553.174 115.205H580.42V75.7051C580.42 67.015 586.392 61.2875 594.436 61.2875C597.25 61.2875 601.791 61.7318 604.505 62.67V39.4141C602.335 38.7724 599.964 38.3773 597.595 38.3773C589.502 38.3773 583.184 43.1174 580.42 53.7825H579.63V39.3649H553.174V115.205ZM607.185 115.205H634.43V93.6777L638.526 88.4933L653.976 115.205H685.169L658.616 72.5945L684.381 39.3649H653.779L635.416 64.8426H634.43V14.0847H607.185V115.205Z" fill="#DAD6D6" />
              </svg>

              <svg
                class="block w-auto h-10 lg:hidden md:ml-2 md:h-12"
                viewBox="0 0 387 384"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M117.905 339.966L122.943 212.058C129.875 215.686 145.227 222.229 162.763 225.194L149.103 347.45L148.708 351.787C137.912 348.827 127.615 344.845 117.905 339.966Z"
                  fill="#D70745"
                />
                <path
                  d="M176.729 356.988L207.083 232.689C217.908 234.345 241.455 236.801 249.047 233.382L207.938 357.19C197.706 358.084 187.268 358.041 176.729 356.988Z"
                  fill="#D70745"
                />
                <path
                  d="M279.508 174.989C298.506 181.523 303.993 198.99 304.344 207.066L241.916 353.841C300.556 335.764 347.099 286.034 358.033 221.371C373.485 129.996 311.982 43.4029 220.662 27.9606C129.343 12.5184 42.7874 74.0745 27.3357 165.45C16.9205 227.041 41.4688 286.46 86.5447 323.38L86.6341 322.851L81.0443 169.27C84.0418 161.732 95.0332 146.963 115.258 147.144C115.673 147.016 116.089 146.892 116.506 146.77C124.721 127.044 152.368 95.864 198.819 126.025C199.616 125.937 200.468 125.87 201.366 125.83C251.001 116.995 276.802 153.565 278.245 174.073C278.668 174.375 279.089 174.68 279.508 174.989Z"
                  fill="#D70745"
                />
              </svg>
            </nuxt-link>
          </div>
        </div>
        <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
          <!-- Quick Search Movies -->
          <QuickSearch></QuickSearch>
          <nuxt-link to="/discover" class="hidden ml-4 lg:block nav-button">Discover</nuxt-link>
          <nuxt-link to="/about" class="hidden ml-4 lg:block nav-button">About</nuxt-link>
        </div>
        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-m-blue-900 focus:outline-none focus:bg-m-blue-900 focus:text-white"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <svg
              :class="isOpen ? 'hidden' : 'block'"
              class="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              :class="isOpen ? 'block' : 'hidden'"
              class="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
    -->
    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-class="transform -translate-y-8 opacity-0"
      enter-to-class="transform opacity-100"
      leave-active-class="transition duration-300 ease-linear"
      leave-class="transform opacity-100"
      leave-to-class="transform -translate-y-8 opacity-0"
    >
      <div v-show="isOpen" class="border-b-2 border-teal-900 lg:hidden">
        <div class="px-2 pt-2 pb-3">
          <nuxt-link to="/discover" class="nav-button-mobile" active-class="">Discover</nuxt-link>
          <nuxt-link to="/about" class="mt-1 nav-button-mobile" active-class="">About</nuxt-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import QuickSearch from '@/components/global/QuickSearch.vue'
export default {
  components: {
    QuickSearch
  },
  data () {
    return {
      isOpen: false,
      profileIsOpen: false
    }
  }
}
</script>

<style>
  .nav-button {
  @apply px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out;
  }
  .nav-button:hover {
    @apply text-white bg-m-blue-900;
  }
  .nav-button:focus {
    @apply outline-none text-white bg-m-blue-900;
  }

  .nav-button-mobile {
    @apply mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 transition duration-150 ease-in-out;
  }

  .nav-button-mobile:hover{
    @apply text-white bg-m-blue-900;
  }

  /* .nav-button-mobile:focus{
    @apply outline-none text-white bg-m-blue-900
  } */

  .nuxt-link-active{
    @apply bg-m-blue-900
  }
</style>
