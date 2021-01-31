<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.97 127.72" :class="classname">
    <path d="M64,125a60.93,60.93,0,1,1,58.26-42.86A61.06,61.06,0,0,1,64,125ZM64,7a57.05,57.05,0,1,0,57,57A57.06,57.06,0,0,0,64,7Z" />
    <path d="M64,5.22h0a5,5,0,0,0,4.58,5,54.06,54.06,0,0,1,47,69.72,5,5,0,0,0,4.73,6.64A5,5,0,0,0,125.09,83,64,64,0,0,0,69.39.23,5,5,0,0,0,64,5.22Z" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    spin: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classname () {
      return this.spin ? 'spin' : ''
    }
  }
})
</script>

<style lang="scss" scoped>
.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
