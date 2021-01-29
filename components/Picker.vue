<template>
  <div class="picker text-center px-10 py-16 relative max-w-md mx-auto my-12">
    <Pentagon class="mx-auto max-w-full" />

    <div class="shape-wrapper absolute">
      <Shape class="cursor-pointer" type="scissors" @onPicked="pickPlayerShape" />
    </div>
    <div class="shape-wrapper absolute">
      <Shape class="cursor-pointer" type="spock" @onPicked="pickPlayerShape" />
    </div>
    <div class="shape-wrapper absolute">
      <Shape class="cursor-pointer" type="paper" @onPicked="pickPlayerShape" />
    </div>
    <div class="shape-wrapper absolute">
      <Shape class="cursor-pointer" type="lizard" @onPicked="pickPlayerShape" />
    </div>
    <div class="shape-wrapper absolute">
      <Shape class="cursor-pointer" type="rock" @onPicked="pickPlayerShape" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    pickPlayerShape (id: number) {
      this.$store.commit('rpssl/setPlayerShape', id)
    }
  }
})
</script>

<style lang="scss" scoped>
.picker {
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
}
</style>
