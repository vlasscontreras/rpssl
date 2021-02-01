<template>
  <div class="bg-white text-center px-6 py-3 sm:px-12 rounded-lg">
    <div class="text-score text-sm sm:text-base uppercase">
      Score
    </div>
    <div class="text-dark text-5xl sm:text-7xl">
      {{ score }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    score: {
      type: Number,
      required: true
    }
  }
})
</script>
