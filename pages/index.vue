<template>
  <Container class="pb-10">
    <Header />
    <Picker />

    <button class="border-2 border-header-outline hover:bg-white hover:border-white hover:text-dark focus:outline-none px-8 py-2 rounded-lg text-white text-xl transition-all uppercase table mx-auto sm:mr-0" @click="showRulesModal">
      Rules
    </button>

    <transition name="fade">
      <Modal v-if="rulesModal" @onClose="hideRulesModal">
        <h4 class="uppercase text-dark text-3xl font-bold mb-4">
          Rules
        </h4>

        <Instructions class="mx-auto" />
      </Modal>
    </transition>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      rulesModal: false
    }
  },

  methods: {
    showRulesModal () {
      this.rulesModal = true
    },

    hideRulesModal () {
      this.rulesModal = false
    }
  }
})
</script>
