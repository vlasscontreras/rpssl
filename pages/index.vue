<template>
  <Container class="pb-10">
    <Header />

    <!-- Shape Picker -->
    <Picker v-if="playerHasNotPicked" class="my-12 mx-auto" @picked="picked" />

    <!-- Winner Announcer -->
    <Winner v-else class="mx-auto my-20 max-w-4xl" :player-one="rpssl.playerOneShape" :player-two="rpssl.playerTwoShape" />

    <!-- Rules -->
    <Button class="mx-auto sm:mr-0 table" @click="showRulesModal">
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

import { getRandomInt } from '@/lib/game'

export default Vue.extend({
  data () {
    return {
      rulesModal: false
    }
  },

  head () {
    return {
      title: 'Rock Paper Scissors Spock Lizard'
    }
  },

  computed: {
    ...mapState(['rpssl']),

    playerHasNotPicked (): boolean {
      return this.rpssl.playerOneShape === null && this.rpssl.playerTwoShape === null
    }
  },

  methods: {
    showRulesModal () {
      this.rulesModal = true
    },

    hideRulesModal () {
      this.rulesModal = false
    },

    picked (id: number) {
      // The player 2 will be the CPU
      const playerTwoShape = getRandomInt(0, 5)

      this.$store.commit('rpssl/setPlayerOneShape', id)
      this.$store.commit('rpssl/setPlayerTwoShape', playerTwoShape)
    }
  }
})
</script>
