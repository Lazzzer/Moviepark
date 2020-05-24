<template>
  <div
    class="flex flex-col items-center justify-center max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16"
  >
    <section class="relative mb-10 text-center">
      <div>
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

      <p
        class="max-w-md mx-auto text-base font-bold leading-7 text-m-burgundy-700 md:leading-4 sm:text-lg md:mt-3 md:text-xl md:max-w-3xl"
      >Your movie night companion</p>
    </section>

    <section id="trending" class="relative flex flex-col items-center w-full mb-4">
      <div class="w-full lg:w-custom-cards">
        <h3
          class="mb-2 text-xl font-extrabold text-gray-300 md:ml-3 md:mb-0 sm:text-2xl"
        >Trending this week</h3>
        <div class="w-full overflow-x-scroll noScrollbar md:scrollbar lg:noScrollbar">
          <div class="flex space-x-4 w-custom-cards-mini md:w-custom-cards md:p-4 md:space-x-6">
            <Card v-for="(card,index) in trendingCards.slice(0,5)" :key="index" :movie-infos="card" :animation="true" :is-searched="false"></Card>
          </div>
        </div>
      </div>
    </section>

    <section id="next" class="relative flex flex-col items-center w-full mb-4">
      <div class="w-full lg:w-custom-cards">
        <h3
          class="mb-2 text-xl font-extrabold text-gray-300 md:ml-3 md:mb-0 sm:text-2xl"
        >Next in theaters</h3>
        <div class="w-full overflow-x-scroll noScrollbar md:scrollbar lg:noScrollbar">
          <div class="flex space-x-4 w-custom-cards-mini md:w-custom-cards md:p-4 md:space-x-6">
            <Card v-for="(card,index) in nextCards.slice(0,5)" :key="index" :movie-infos="card" :animation="true" :is-searched="false"></Card>
          </div>
        </div>
      </div>
    </section>

    <section id="discover">
      <div class="max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-300 sm:text-4xl sm:leading-10">
          Don't know what to watch?
          <br />
          <span class="text-2xl leading-8 sm:text-3xl text-m-burgundy-700 sm:leading-9">Let's search it!</span>
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0 lg:ml-14">
          <nuxt-link to="/discover" class="inline-flex items-center justify-center w-full px-8 py-3 mx-5 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md w-fullrelative bg-m-burgundy-700 hover:bg-m-burgundy-600 focus:outline-none focus:border-m-burgundy-600 active:bg-m-burgundy-600">
            Discover
          </nuxt-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Card from '@/components/movie/Card.vue'
export default {
  components: {
    Card
  },
  async asyncData ({ $axios, env, error }) {
    try {
      const trending = await $axios.get(`${env.API_URL}/dummyTmdb/trending`)
      const nextTheaters = await $axios.get(`${env.API_URL}/dummyTmdb/nextTheaters`)

      return { trendingCards: trending.data.results, nextCards: nextTheaters.data.results }
    } catch (err) {
      if (err.response !== undefined) {
        return error({ statusCode: err.response.status, message: err.response.statusText })
      } else {
        error({ statusCode: 503, message: 'Houston, we have a problem.' })
      }
    }
  },
  head () {
    return {
      title: 'Moviepark',
      titleTemplate: null
    }
  }
}
</script>

<style>
  .scrollbarDiv{
    scrollbar-width: none;
  }
  .scrollbarDiv::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>
