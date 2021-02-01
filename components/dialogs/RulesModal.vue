<template>
  <Modal v-on="listeners">
    <h4 class="uppercase text-dark text-3xl font-bold mb-4">
      Rules
    </h4>

    <Instructions class="mx-auto" />
  </Modal>
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
