<template>
  <div class="container relative w-full px-4 mx-auto mt-20 mb-24 text-gray-300 xl:max-w-4xl md:px-6 xl:px-0">
    <div v-if="$device.isDesktop" style="height:5vh;"></div>
    <h2 class="mb-4 ml-2 text-4xl font-extrabold">About</h2>
    <div class="w-full p-8 rounded-md opacity-75 md:p-16 bg-m-blue-900">
      <h2 class="mb-2 text-xl font-extrabold">What is Moviepark?</h2>
      <p class="mt-2 text-justify">
        Moviepark is a small open-source project that I created in order to keep improving my coding skills and learn new web technologies.
      </p>
      <p class="mt-2 text-justify">Also, the source code is available on Github under a MIT license so feel free to fork it or contribute if you feel like it!</p>

      <h2 class="mt-10 mb-2 text-xl font-extrabold">Privacy</h2>
      <p class="mt-2 text-justify">
        Moviepark itself doesn't store any personal data from its visitors nor it creates cookies.
      </p>
      <h2 class="mt-10 mb-2 text-xl font-extrabold">Credits</h2>
      <p class="mt-2 text-justify">
        <a href="https://unsplash.com/photos/evlkOfkQ5rE" target="_blank" rel="noopener" class="font-bold">Background image</a> by <a class="italic" href="https://unsplash.com/@felixmooneeram?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener">Felix Mooneeram</a>
      </p>
      <p class="mt-2 text-justify">
        <span class="font-bold">Posters, backdrop images and content</span> provided by <a class="italic" href="https://www.themoviedb.org/" target="_blank" rel="noopener">TMDb*</a>.
      </p>
      <p class="mt-4 text-sm italic text-justify">
        *Moviepark uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
    </div>
    <div v-if="$device.isDesktop" style="height:20vh;"></div>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
