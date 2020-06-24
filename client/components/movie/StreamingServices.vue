<template>
  <section id="services" class="relative w-full mt-6 sm:mx-0">
    <div class="w-11/12 mx-auto sm:w-full">
      <h3 class="mb-1 text-2xl font-extrabold text-gray-300 md:ml-3 sm:mb-0 sm:text-2xl">Watch On</h3>
    </div>
    <div class="flex flex-wrap items-center flex-shrink-0 mx-6 space-x-4">
      <span v-for="(service, index) in infos.collection.locations" :key="index">
        <a :href="service.url" target="_blank" rel="noopener">
          <img :src="service.icon" alt="service.display_name" class="">
        </a>
      </span>
    </div>

  </section>
</template>

<script>
export default {
  props: {
    infos: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>
