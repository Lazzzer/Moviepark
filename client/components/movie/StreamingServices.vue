<template>
  <section id="services" class="relative w-full mt-6 sm:mx-0">
    <div class="w-11/12 mx-auto sm:w-full">
      <h3 class="mb-1 text-2xl font-extrabold text-center text-gray-300 sm:text-left md:ml-3 sm:mb-0 sm:text-2xl">Watch</h3>
    </div>
    <div class="flex flex-wrap items-center justify-center flex-shrink-0 w-11/12 mx-auto mt-3 sm:justify-start sm:w-full">
      <span v-for="(service, index) in filteredServicesList" :key="index" class="m-2 sm:m-0 sm:mb-2 sm:mr-2">

        <a :href="service.url" target="_blank" rel="noopener" class="relative block">
          <svg-icon v-if="service.name.includes('IVAUS')" name="us-flag" class="absolute z-10 w-4 h-4 rounded opacity-75 top-2 right-2" />
          <svg-icon v-if="service.name.includes('IVACH')" name="swiss-flag" class="absolute z-10 w-4 h-4 rounded opacity-75 top-2 right-2" />

          <svg-icon v-if="service.name.includes('iTunesIVA')" class="relative w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="itunes" />
          <svg-icon v-if="service.name.includes('AmazonInstantVideoIV')" class="relative w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="amazonInstantVideo" />
          <svg-icon v-if="service.name.includes('GooglePlayIV')" class="relative w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="googlePlay" />
          <svg-icon v-if="service.name.includes('HBOMaxIV')" class="relative w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="hboMax" />
          <svg-icon v-if="service.name.includes('DisneyPlusIV')" class="relative w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="disneyPlus" />
          <svg-icon v-if="service.name.includes('AmazonPrimeVideoIV')" class="relative w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="amazonPrimeVideo" />
          <svg-icon v-if="service.name.includes('NetflixIV')" class="relative w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="netflix" />
          <svg-icon v-if="service.name.includes('HuluIV')" class="relative w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="hulu" />
          <svg-icon v-if="service.name.includes('AppleTvPlusIV')" class="relative w-20 h-20 border border-transparent rounded-lg hover:border-teal-500" name="appleTvPlus" />
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
      servicesList: ['iTunesIVAUS', 'AmazonInstantVideoIVAUS', 'GooglePlayIVAUS', 'HBOMaxIVAUS', 'DisneyPlusIVAUS', 'AmazonPrimeVideoIVAUS', 'NetflixIVAUS', 'HuluIVAUS', 'AppleTvPlusIVAUS',
        'iTunesIVACH', 'AmazonInstantVideoIVACH', 'GooglePlayIVACH', 'HBOMaxIVACH', 'DisneyPlusIVACH', 'AmazonPrimeVideoIVACH', 'NetflixIVACH', 'HuluIVACH', 'AppleTvPlusIVACH']
    }
  },
  computed: {
    filteredServicesList () {
      return this.infos.collection.locations.filter(service => this.servicesList.includes(service.name))
    }
  }
}
</script>
