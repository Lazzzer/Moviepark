/* eslint-disable vue/require-default-prop */
<template>
  <div class="text-white">{{ movieInfos.title }}</div>
</template>

<script>
export default {
  props: {
    movieInfos: {
      type: Object,
      required: true
    }
  }
}
</script>
