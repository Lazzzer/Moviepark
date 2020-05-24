<template>
  <div class="relative w-full h-full min-h-screen font-sans bg-m-blue-800 scrollbar">
    <div class="absolute top-0 right-0 z-0 hidden w-full sm:block h-2/3 md:h-1/2"
         :style="{ 'background': 'url('+ require('assets/img/layout-bg.png')+') 55% 0% / 100% auto no-repeat', 'opacity':0.2}"
    ></div>
    <div class="absolute top-0 right-0 z-0 block w-full sm:hidden h-2/3 md:h-1/2"
         :style="{ 'background': 'url('+ require('assets/img/layout-bg-mobile.png')+') 55% 0% / 100% auto no-repeat', 'opacity':0.2 }"
    ></div>
    <nuxt />
  </div>
</template>
