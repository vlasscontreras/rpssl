<template>
  <Container class="pb-10">
    <Header />
    <Picker v-if="!(rpssl.playerShape && rpssl.cpuShape)" @picked="picked" />

    <Button @click="showRulesModal">
      Rules
    </Button>

    <transition name="fade">
      <RulesModal v-if="rulesModal" @close="hideRulesModal" />
    </transition>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data () {
    return {
      rulesModal: false
    }
  },

  computed: {
    ...mapState(['rpssl'])
  },

  methods: {
    showRulesModal () {
      this.rulesModal = true
    },

    hideRulesModal () {
      this.rulesModal = false
    },

    picked (id: number) {
      console.log(id)
    }
  }
})
</script>
