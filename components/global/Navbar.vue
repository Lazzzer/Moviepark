<template>
  <nav>
    <div class="max-w-full mx-auto pt-2 px-2 sm:px-4 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <svg
              class="block h-8 w-auto"
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
          </div>
          <div class="hidden lg:block lg:ml-6">
            <div class="flex">
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm leading-5 font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >Discover</a>
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >About</a>
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
          <QuickSearch></QuickSearch>
        </div>
        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <!-- Icon when menu is closed. -->
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              :class="isOpen ? 'hidden' : 'block'"
              class="h-6 w-6"
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
            <!-- Icon when menu is open. -->
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              :class="isOpen ? 'block' : 'hidden'"
              class="h-6 w-6"
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
          <div @click="profileIsOpen = !profileIsOpen" class="ml-4 relative flex-shrink-0">
            <div>
              <button
                id="user-menu"
                class="flex text-sm rounded-full text-white focus:outline-none focus:shadow-solid transition duration-150 ease-in-out"
                aria-label="User menu"
                aria-haspopup="true"
              >
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt
                />
              </button>
            </div>
            <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                v-show="profileIsOpen"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
              >
                <div
                  class="py-1 rounded-md bg-white shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  >Your Profile</a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  >Settings</a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
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
    <div :class="isOpen ? 'block' : 'hidden'" class="lg:hidden">
      <div class="px-2 pt-2 pb-3">
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >Dashboard</a>
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >Team</a>
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >Projects</a>
        <a
          href="#"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >Calendar</a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-6 text-white">Tom Cook</div>
            <div class="text-sm font-medium leading-5 text-gray-400">tom@example.com</div>
          </div>
        </div>
        <div class="mt-3 px-2">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >Your Profile</a>
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >Settings</a>
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >Sign out</a>
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
      profileIsOpen: false
    }
  }
}
</script>
