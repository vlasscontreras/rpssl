<template>
  <div class="picker text-center px-10 py-16 relative max-w-md">
    <Pentagon class="mx-auto max-w-full" />

    <div v-for="shape in shapes" :key="shape.name" class="shape-wrapper absolute">
      <Shape class="cursor-pointer sm:text-xl md:text-2xl" :type="shape.name" @picked="pickPlayerShape" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { shapes } from '@/lib/game'

export default Vue.extend({
  computed: {
    shapes: () => shapes
  },

  methods: {
    pickPlayerShape (id: number) {
      this.$emit('picked', id)
    }
  }
})
</script>

<style lang="scss" scoped>
.shape-wrapper {
  &:nth-child(2) {
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
  }

  &:nth-child(3),
  &:nth-child(4) {
    top: 27%;
  }

  &:nth-child(3) {
    left: 0;
  }

  &:nth-child(4) {
    right: 0;
  }

  &:nth-child(5),
  &:nth-child(6) {
    bottom: 0%;
  }

  &:nth-child(5) {
    left: 7%;
  }

  &:nth-child(6) {
    right: 7%;
  }
}
</style>
