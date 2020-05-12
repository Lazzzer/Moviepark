<template>
  <nav>
    <div class="px-2 pt-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <nuxt-link to="/">
              <svg
                class="block w-auto h-8"
                width="387"
                height="384"
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
          <!-- Navbar-left desktop -->
          <div class="hidden lg:block lg:ml-6">
            <div class="flex">
              <nuxt-link to="/discover" class="ml-4 nav-button">Discover</nuxt-link>
              <nuxt-link to="/about" class="ml-4 nav-button">About</nuxt-link>
            </div>
          </div>
        </div>
        <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
          <!-- Quick Search Movies -->
          <QuickSearch></QuickSearch>
          <!-- Navbar-right desktop -->
          <div v-if="!isLogged" class="hidden lg:block lg:ml-6">
            <div class="flex">
              <nuxt-link v-if="!isLogged" to="/login" class="ml-4 nav-button">Login</nuxt-link>
              <nuxt-link v-if="!isLogged" to="/register" class="ml-4 nav-button">Register</nuxt-link>
            </div>
          </div>
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
        <div class="hidden lg:block lg:ml-4">
          <!-- Profile dropdown -->
          <div v-if="isLogged" class="relative flex-shrink-0 ml-4 outline-none focus:outline-none">
            <div>
              <button
                @click="profileIsOpen = !profileIsOpen"
                id="user-menu"
                class="flex text-sm outline-none focus:outline-none"
                aria-label="User menu"
                aria-haspopup="true"
              >
                <div
                  class="flex items-center justify-center cursor-pointer hover:outline-none nav-button focus:outline-none"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />

                  <span class="ml-2">John Doe</span>
                </div>
              </button>
            </div>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div
                v-show="profileIsOpen"
                class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
              >
                <div
                  class="py-1 rounded-md shadow-xs bg-m-blue-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-200 transition duration-150 ease-in-out bg-m-blue-900 hover:bg-teal-900 focus:outline-none focus:bg-teal-900"
                  >Your Profile</a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-200 transition duration-150 ease-in-out bg-m-blue-900 hover:bg-teal-900 focus:outline-none focus:bg-teal-900"
                  >Settings</a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-200 transition duration-150 ease-in-out bg-m-blue-900 hover:bg-teal-900 focus:outline-none focus:bg-teal-900"
                  >Sign out</a>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
    -->
    <div :class="isOpen ? 'block' : 'hidden'" class="border-b-2 border-teal-900 lg:hidden">
      <div class="px-2 pt-2 pb-3">
        <nuxt-link to="/discover" class="nav-button-mobile">Discover</nuxt-link>
        <nuxt-link to="/search" class="mt-1 nav-button-mobile">About</nuxt-link>
        <nuxt-link v-if="!isLogged" to="/search" class="mt-1 nav-button-mobile">Login</nuxt-link>
        <nuxt-link v-if="!isLogged" to="/search" class="mt-1 nav-button-mobile">Register</nuxt-link>
      </div>
      <!-- User's part -->
      <div v-if="isLogged" class="pt-4 pb-3 border-t border-teal-900">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-6 text-white">Tom Cook</div>
            <div class="text-sm font-medium leading-5 text-gray-400">tom@example.com</div>
          </div>
        </div>
        <div class="px-2 mt-3">
          <a href="#" class="nav-button-mobile">Your Profile</a>
          <a href="#" class="nav-button-mobile">Settings</a>
          <span class="nav-button-mobile">Sign out</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import QuickSearch from '@/components/global/QuickSearch.vue'
export default {
  components: {
    QuickSearch
  },
  data() {
    return {
      isOpen: false,
      profileIsOpen: false,
      isLogged: true
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

  .nav-button-mobile:focus{
    @apply outline-none text-white bg-m-blue-900
  }

  .router-link-active{
    @apply bg-m-blue-900
  }
</style>
