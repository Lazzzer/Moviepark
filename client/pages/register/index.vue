<template>
  <div class="container relative w-full px-4 mx-auto mt-20 mb-24 text-gray-300 xl:max-w-4xl md:px-6 xl:px-0">
    Register Page
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  head () {
    return {
      title: 'Register'
    }
  }
}
</script>
