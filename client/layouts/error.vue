<template>
  <div class="relative flex flex-col items-center justify-center w-full min-h-screen text-gray-300">
    <div class="mb-16 -mt-56">
      <h2
        class="inline text-4xl font-extrabold leading-10 tracking-tight text-gray-200 align-middle sm:text-5xl sm:leading-none md:text-6xl"
      >Moviepark</h2>
      <svg
        class="inline-block w-10 h-auto sm:w-16 md:w-20"
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.2729 58.6416L21.1392 36.6488C22.331 37.2726 24.9708 38.3976 27.9858 38.9075L25.6371 59.9284L25.5692 60.6742C23.7129 60.1652 21.9424 59.4805 20.2729 58.6416Z"
          fill="#D70745"
        />
        <path
          d="M30.3872 61.5684L35.6064 40.1961C37.4676 40.4808 41.5164 40.9032 42.8217 40.3153L35.7534 61.6031C33.9941 61.7569 32.1994 61.7495 30.3872 61.5684Z"
          fill="#D70745"
        />
        <path
          d="M48.0593 30.275C51.3259 31.3985 52.2694 34.4018 52.3298 35.7904L41.5957 61.0274C51.6784 57.9192 59.681 49.3685 61.5611 38.2502C64.2179 22.5388 53.6429 7.64981 37.9412 4.99464C22.2395 2.33946 7.35698 12.9236 4.70017 28.6349C2.90937 39.2251 7.13026 49.4416 14.8807 55.7898L14.8961 55.6989L13.935 29.2916C14.4504 27.9956 16.3403 25.4563 19.8178 25.4873C19.8892 25.4654 19.9607 25.4439 20.0324 25.423C21.4449 22.0314 26.1985 16.6701 34.1855 21.8561C34.3226 21.8409 34.469 21.8294 34.6233 21.8225C43.1577 20.3034 47.5941 26.5913 47.8421 30.1176C47.9149 30.1695 47.9873 30.222 48.0593 30.275Z"
          fill="#D70745"
        />
      </svg>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-16 h-auto mb-3 fill-current text-m-burgundy-600" viewBox="0 0 48 48">
      <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
    </svg>
    <h2 class="mb-4 text-2xl font-extrabold leading-10 tracking-tight text-gray-200 align-middle sm:text-3xl sm:leading-none">
      Oops! - Error {{ statusCode }}
    </h2>
    <div>{{ message }}</div>
    <p v-if="statusCode === 404">
      <nuxt-link to="/">
        <button
          type="button"
          class="inline-flex items-center justify-center w-full px-4 py-3 mt-6 mb-3 text-sm font-medium leading-4 text-gray-300 transition duration-150 ease-in-out border border-transparent rounded-md lg:px-3 lg:py-3 bg-m-burgundy-700 hover:bg-m-burgundy-600 focus:outline-none focus:border-m-burgundy-600 active:bg-m-burgundy-600"
        >Country Rooooads, Take me hooome</button>
      </nuxt-link>
    </p>
  </div>
</template>
<script>
export default {
  name: 'NuxtError',
  layout: 'layoutError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return this.error.statusCode
    },
    message () {
      return this.error.statusCode === 404 ? 'This is not the page you\'re looking for...' : this.error.message
    }
  },
  head () {
    return {
      title: 'Error ' + this.error.statusCode + ' - ' + 'Moviepark'
    }
  }
}
</script>
