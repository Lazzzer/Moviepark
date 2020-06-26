<template>
  <section id="services" class="relative w-full mt-6 sm:mx-0">
    <div class="w-11/12 mx-auto sm:w-full">
      <h3 class="mb-1 text-2xl font-extrabold text-center text-gray-300 sm:text-left md:ml-3 sm:mb-0 sm:text-2xl">Watch</h3>
    </div>
    <div class="flex flex-wrap items-center justify-center flex-shrink-0 w-11/12 mx-auto mt-3 sm:justify-start sm:w-full">
      <span v-for="(service, index) in filteredServicesList" :key="index" class="m-2 sm:m-0 sm:mb-2 sm:mr-2">
        <a v-if="service.name.includes('iTunesIVA')" :href="service.url" target="_blank" rel="noopener">
          <svg-icon class="w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="itunes" />
        </a>

        <a v-if="service.name.includes('AmazonInstantVideoIV')" :href="service.url" target="_blank" rel="noopener">
          <svg-icon class="w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="amazonInstantVideo" />
        </a>

        <a v-if="service.name.includes('GooglePlayIV')" :href="service.url" target="_blank" rel="noopener">
          <svg-icon class="w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="googlePlay" />
        </a>

        <a v-if="service.name.includes('HBOMaxIV')" :href="service.url" target="_blank" rel="noopener">
          <svg-icon class="w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="hboMax" />
        </a>

        <a v-if="service.name.includes('DisneyPlusIV')" :href="service.url" target="_blank" rel="noopener">
          <svg-icon class="w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="disneyPlus" />
        </a>

        <a v-if="service.name.includes('AmazonPrimeVideoIV')" :href="service.url" target="_blank" rel="noopener">
          <svg-icon class="w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="amazonPrimeVideo" />
        </a>

        <a v-if="service.name.includes('NetflixIV')" :href="service.url" target="_blank" rel="noopener">
          <svg-icon class="w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="netflix" />
        </a>

        <a v-if="service.name.includes('HuluIV')" :href="service.url" target="_blank" rel="noopener">
          <svg-icon class="w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="hulu" />
        </a>

        <a v-if="service.name.includes('AppleTvPlusIV')" :href="service.url" target="_blank" rel="noopener">
          <svg-icon class="w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="appleTvPlus" />
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
      servicesList: ['iTunesIVAUS', 'AmazonInstantVideoIVAUS', 'GooglePlayIVAUS', 'HBOMaxIVAUS', 'DisneyPlusIVAUS', 'AmazonPrimeVideoIVAUS', 'NetflixIVAUS', 'HuluIVAUS', 'AppleTvPlusIVAUS']
    }
  },
  computed: {
    filteredServicesList () {
      return this.infos.collection.locations.filter(service => this.servicesList.includes(service.name))
    }
  }
}
</script>
