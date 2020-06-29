<template>
  <nav class="relative z-10">
    <div class="px-2 pt-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <nuxt-link to="/">
              <svg class="hidden w-auto h-6 lg:block" viewBox="0 0 1024 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M239.086 163.963C275.667 163.963 297.324 140.546 297.324 106.006C297.324 71.4664 275.667 48.0494 239.086 48.0494C202.504 48.0494 180.849 71.4664 180.849 106.006C180.849 140.546 202.504 163.963 239.086 163.963ZM239.379 134.106C228.551 134.106 222.113 123.349 222.113 105.714C222.113 88.0777 228.551 77.3206 239.379 77.3206C249.622 77.3206 256.06 88.0777 256.06 105.714C256.06 123.349 249.622 134.106 239.379 134.106ZM415.308 49.5129H372.874L354.729 123.862H353.559L335.414 49.5129H292.979L330.731 161.914H377.555L415.308 49.5129ZM418.553 161.914H458.939V49.5129H418.553V161.914ZM438.747 37.8045C449.721 37.8045 458.647 29.5354 458.647 19.3637C458.647 9.19194 449.721 0.922852 438.747 0.922852C427.771 0.922852 418.846 9.19194 418.846 19.3637C418.846 29.5354 427.771 37.8045 438.747 37.8045ZM525.124 163.963C556.291 163.963 576.337 149.035 580.142 125.617H543.269C540.926 131.984 534.269 135.57 526.002 135.57C514.003 135.57 506.979 127.667 506.979 116.837V115.081H580.142V105.714C580.142 69.9296 558.194 48.0494 524.245 48.0494C489.419 48.0494 467.178 71.1736 467.178 106.006C467.178 142.376 489.128 163.963 525.124 163.963ZM506.979 92.8343C507.199 83.1016 515.247 76.4424 525.124 76.4424C535.148 76.4424 542.756 83.1749 542.975 92.8343H506.979ZM588.381 204.065H628.767V143.474H629.352C634.035 154.889 644.863 163.378 660.667 163.378C684.664 163.378 704.857 144.645 704.857 105.714C704.857 65.0268 683.201 48.0494 660.959 48.0494C644.278 48.0494 633.743 57.7089 629.352 69.1247H628.475V49.5129H588.381V204.065ZM627.89 105.714C627.89 89.0291 634.62 79.0768 645.742 79.0768C656.863 79.0768 663.301 89.0291 663.301 105.714C663.301 122.398 656.863 132.35 645.742 132.35C634.62 132.35 627.89 122.106 627.89 105.714ZM744.85 163.67C759.482 163.67 770.53 158.694 777.333 146.108H778.212V161.914H815.963V84.931C815.963 64.1485 796.283 48.0494 764.165 48.0494C730.582 48.0494 714.047 65.612 712.658 86.1019H749.824C750.776 79.1501 755.896 75.857 763.579 75.857C770.603 75.857 775.578 79.0768 775.578 84.931V85.2238C775.578 91.7366 768.408 93.7855 749.531 95.1759C726.338 96.8591 708.268 106.226 708.268 130.887C708.268 153.279 723.34 163.67 744.85 163.67ZM758.018 138.205C751.14 138.205 746.312 134.839 746.312 128.545C746.312 122.764 750.409 118.301 759.775 116.837C766.213 115.812 771.627 114.495 775.871 112.738V122.106C775.871 132.35 767.163 138.205 758.018 138.205ZM827.019 161.914H867.406V103.372C867.406 90.4926 876.258 82.004 888.183 82.004C892.354 82.004 899.086 82.6625 903.109 84.0529V49.5862C899.89 48.6348 896.379 48.0494 892.866 48.0494C880.868 48.0494 871.502 55.0745 867.406 70.881H866.236V49.5129H827.019V161.914ZM908.111 161.914H948.496V130.009L954.57 122.325L977.469 161.914H1023.71L984.347 98.7617L1022.54 49.5129H977.177L949.96 87.2728H948.496V12.0459H908.111V161.914Z" fill="#DAD6D6" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.657471 12.0449V161.913H40.4583V74.6853H41.6289L74.9913 160.743H98.9889L132.351 75.2706H133.522V161.913H173.323V12.0449H122.694L87.868 96.9313H86.1122L51.2865 12.0449H0.657471ZM26.7685 24.5342H12.4616C10.8812 24.5342 9.6001 25.8156 9.6001 27.3962V43.6927C9.6001 45.2734 10.8812 46.5548 12.4616 46.5548H26.7685C28.3489 46.5548 29.63 45.2734 29.63 43.6927V27.3962C29.63 25.8156 28.3489 24.5342 26.7685 24.5342ZM12.4611 59.5078H26.768C28.3484 59.5078 29.6295 60.7892 29.6295 62.3699V78.6664C29.6295 80.247 28.3484 81.5284 26.768 81.5284H12.4611C10.8807 81.5284 9.59961 80.247 9.59961 78.6664V62.3699C9.59961 60.7892 10.8807 59.5078 12.4611 59.5078ZM26.768 94.4814H12.4611C10.8807 94.4814 9.59961 95.7628 9.59961 97.3435V113.64C9.59961 115.221 10.8807 116.502 12.4611 116.502H26.768C28.3484 116.502 29.6295 115.221 29.6295 113.64V97.3435C29.6295 95.7628 28.3484 94.4814 26.768 94.4814ZM12.4611 129.457H26.768C28.3484 129.457 29.6295 130.738 29.6295 132.319V148.616C29.6295 150.196 28.3484 151.478 26.768 151.478H12.4611C10.8807 151.478 9.59961 150.196 9.59961 148.616V132.319C9.59961 130.738 10.8807 129.457 12.4611 129.457ZM161.258 24.5342H146.952C145.371 24.5342 144.09 25.8156 144.09 27.3962V43.6927C144.09 45.2734 145.371 46.5548 146.952 46.5548H161.258C162.839 46.5548 164.12 45.2734 164.12 43.6927V27.3962C164.12 25.8156 162.839 24.5342 161.258 24.5342ZM146.952 59.5078H161.258C162.839 59.5078 164.12 60.7892 164.12 62.3699V78.6664C164.12 80.247 162.839 81.5284 161.258 81.5284H146.952C145.371 81.5284 144.09 80.247 144.09 78.6664V62.3699C144.09 60.7892 145.371 59.5078 146.952 59.5078ZM161.258 94.4814H146.952C145.371 94.4814 144.09 95.7628 144.09 97.3435V113.64C144.09 115.221 145.371 116.502 146.952 116.502H161.258C162.839 116.502 164.12 115.221 164.12 113.64V97.3435C164.12 95.7628 162.839 94.4814 161.258 94.4814ZM146.952 129.457H161.258C162.839 129.457 164.12 130.738 164.12 132.319V148.616C164.12 150.196 162.839 151.478 161.258 151.478H146.952C145.371 151.478 144.09 150.196 144.09 148.616V132.319C144.09 130.738 145.371 129.457 146.952 129.457Z" fill="#D70745" />
              </svg>
              <svg class="block w-auto h-8 lg:hidden md:ml-2 md:h-10" viewBox="0 0 174 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.657471 0.0449219V149.913H40.4583V62.6853H41.6289L74.9913 148.743H98.9889L132.351 63.2706H133.522V149.913H173.323V0.0449219H122.694L87.868 84.9313H86.1122L51.2865 0.0449219H0.657471ZM26.7685 12.5342H12.4616C10.8812 12.5342 9.6001 13.8156 9.6001 15.3962V31.6927C9.6001 33.2734 10.8812 34.5548 12.4616 34.5548H26.7685C28.3489 34.5548 29.63 33.2734 29.63 31.6927V15.3962C29.63 13.8156 28.3489 12.5342 26.7685 12.5342ZM12.4611 47.5078H26.768C28.3484 47.5078 29.6295 48.7892 29.6295 50.3699V66.6664C29.6295 68.247 28.3484 69.5284 26.768 69.5284H12.4611C10.8807 69.5284 9.59961 68.247 9.59961 66.6664V50.3699C9.59961 48.7892 10.8807 47.5078 12.4611 47.5078ZM26.768 82.4814H12.4611C10.8807 82.4814 9.59961 83.7628 9.59961 85.3435V101.64C9.59961 103.221 10.8807 104.502 12.4611 104.502H26.768C28.3484 104.502 29.6295 103.221 29.6295 101.64V85.3435C29.6295 83.7628 28.3484 82.4814 26.768 82.4814ZM12.4611 117.457H26.768C28.3484 117.457 29.6295 118.738 29.6295 120.319V136.616C29.6295 138.196 28.3484 139.478 26.768 139.478H12.4611C10.8807 139.478 9.59961 138.196 9.59961 136.616V120.319C9.59961 118.738 10.8807 117.457 12.4611 117.457ZM161.258 12.5342H146.952C145.371 12.5342 144.09 13.8156 144.09 15.3962V31.6927C144.09 33.2734 145.371 34.5548 146.952 34.5548H161.258C162.839 34.5548 164.12 33.2734 164.12 31.6927V15.3962C164.12 13.8156 162.839 12.5342 161.258 12.5342ZM146.952 47.5078H161.258C162.839 47.5078 164.12 48.7892 164.12 50.3699V66.6664C164.12 68.247 162.839 69.5284 161.258 69.5284H146.952C145.371 69.5284 144.09 68.247 144.09 66.6664V50.3699C144.09 48.7892 145.371 47.5078 146.952 47.5078ZM161.258 82.4814H146.952C145.371 82.4814 144.09 83.7628 144.09 85.3435V101.64C144.09 103.221 145.371 104.502 146.952 104.502H161.258C162.839 104.502 164.12 103.221 164.12 101.64V85.3435C164.12 83.7628 162.839 82.4814 161.258 82.4814ZM146.952 117.457H161.258C162.839 117.457 164.12 118.738 164.12 120.319V136.616C164.12 138.196 162.839 139.478 161.258 139.478H146.952C145.371 139.478 144.09 138.196 144.09 136.616V120.319C144.09 118.738 145.371 117.457 146.952 117.457Z" fill="#D70745" />
              </svg>
            </nuxt-link>
          </div>
        </div>
        <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
          <!-- Quick Search Movies -->
          <QuickSearch></QuickSearch>
          <nuxt-link to="/discover" class="hidden ml-4 lg:block nav-button">Discover</nuxt-link>
          <nuxt-link v-if="$auth.loggedIn" to="/watchlist" class="hidden ml-4 lg:block nav-button">Watchlist</nuxt-link>
          <nuxt-link to="/about" class="hidden ml-4 lg:block nav-button">About</nuxt-link>
          <nuxt-link v-if="!$auth.loggedIn" to="/Login" class="hidden ml-4 lg:block nav-button">Login</nuxt-link>
          <nuxt-link v-if="!$auth.loggedIn" to="/Register" class="hidden ml-4 lg:block nav-button">Register</nuxt-link>

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
      :duration="{leave: 300}"
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
          <nuxt-link v-if="$auth.loggedIn" to="/watchlist" class="nav-button-mobile" active-class="">Watchlist</nuxt-link>

          <nuxt-link to="/about" class="mt-1 nav-button-mobile" active-class="">About</nuxt-link>
          <nuxt-link v-if="!$auth.loggedIn" to="/login" class="mt-1 nav-button-mobile" active-class="">Login</nuxt-link>
          <nuxt-link v-if="!$auth.loggedIn" to="/register" class="mt-1 nav-button-mobile" active-class="">Register</nuxt-link>

          <div v-if="$auth.loggedIn" class="mt-2">
            <div class="flex items-center justify-between px-5 py-4 rounded-lg bg-m-blue-900">
              <div class="flex items-center">
                <svg-icon name="user" class="w-10 h-10 p-2 border rounded-md bg-m-blue-800 border-m-burgundy-600" />
                <p class="ml-3 text-base font-medium leading-6 text-white">{{ $auth.user.username }}</p>
              </div>

              <div @click="logout()" class="px-4 py-2 text-sm text-white rounded-md bg-m-burgundy-600 focus:bg-m-burgundy-700 hover:bg-m-burgundy-700">Logout</div>
            </div>
          </div>

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
  },
  methods: {
    async logout () {
      await this.$auth.logout()
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
