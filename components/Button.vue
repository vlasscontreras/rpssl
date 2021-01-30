<template>
  <button class="border-2 border-header-outline hover:bg-white hover:border-white hover:text-dark focus:outline-none px-8 py-2 rounded-lg text-white text-xl transition-all uppercase table mx-auto sm:mr-0" v-on="listeners">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    listeners () {
      return this.$listeners
    }
  }
})
</script>
