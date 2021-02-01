<template>
  <div class="modal-wrapper fixed top-0 left-0 flex justify-center items-center w-full h-full" tabindex="-1" aria-modal="true" role="dialog">
    <div class="backdrop fixed top-0 left-0 bg-black bg-opacity-30 w-full h-full" @click="close" />

    <div class="modal bg-white rounded-xl px-8 pt-8 pb-12 relative flex flex-col justify-center items-center sm:items-start w-full h-full sm:h-auto">
      <button class="absolute top-10 right-10 focus:outline-none" @click="close">
        <Close />
      </button>

      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    close () {
      this.$emit('close')
    }
  }
})
</script>

<style lang="scss" scoped>
.modal {
  @media (min-width: 640px) {
    width: 420px;
  }
}
</style>
