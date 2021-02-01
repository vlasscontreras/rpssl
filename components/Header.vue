<template>
  <header class="mt-4">
    <div class="border-2 border-header-outline rounded-xl | flex items-center justify-between | max-w-4xl | mx-auto | px-6 py-4 md:px-8 md:py-6 | text-white">
      <div class="text-xl sm:text-2xl uppercase heading">
        <div>Rock</div>
        <div>Paper</div>
        <div>Scissors</div>
        <div>Lizard</div>
        <div>Spock</div>
      </div>

      <div class="col">
        <Score :score="rpssl.score" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['rpssl'])
  },

  mounted () {
    if (process.browser) {
      const currentScore = Number(localStorage.getItem('rpssl.score'))

      this.$store.commit('rpssl/setScore', currentScore)
    }
  }
})
</script>

<style scoped>
.heading {
  line-height: 1 !important;
}
</style>
