<template>
  <div :class="classnames('grid', 'grid-cols-2', 'gap-4', 'md:gap-8', 'lg:gap-16', 'items-start', 'md:items-center', 'text-center', 'md:grid-cols-3')">
    <div class="shape flex flex-col md:flex-col-reverse items-center order-1">
      <Shape :type="playerOneShape" class="mb-4 md:mb-0 sm:text-2xl md:text-3xl lg:text-5xl" :winner="winner === 1" />

      <h2 class="text-white uppercase text-lg md:text-2xl md:mb-10">
        You Picked
      </h2>
    </div>

    <div class="shape flex flex-col md:flex-col-reverse items-center order-2 md:order-3">
      <Shape v-if="winner === null" class="mb-4 md:mb-0 sm:text-2xl md:text-3xl lg:text-5xl" />
      <Shape v-else :type="playerTwoShape" class="mb-4 md:mb-0 sm:text-2xl md:text-3xl lg:text-5xl" :winner="winner === 2" />

      <h2 class="text-white uppercase text-lg md:text-2xl md:mb-10">
        The House Picked
      </h2>
    </div>

    <div class="shape flex flex-col items-center order-3 md:order-2 col-span-2 md:col-span-1 mt-10">
      <div v-if="winner === null">
        <Loader fill="#fff" class="w-32" spin />
      </div>

      <div v-else>
        <h2 class="text-white uppercase text-5xl mb-4">
          <span v-if="winner === 1">
            You Win
          </span>
          <span v-else-if="winner === 2">
            You Lose
          </span>
          <span v-else>
            Tie
          </span>
        </h2>

        <Button class="mx-auto block" inverted @click="resetGame">
          Play Again
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import classnames from 'classnames'
import { MetaInfo } from 'vue-meta'

import { winner, getShapeSpecById } from '@/lib/game'
import { ShapeSpec } from '@/types'
import { title } from '@/lib/meta'

export default Vue.extend({
  props: {
    playerOne: {
      type: Number,
      required: true
    },
    playerTwo: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      winner: null as Number|null
    }
  },

  head (): MetaInfo {
    let winner = ''

    if (this.winner === 1) {
      winner = 'You Win! | '
    } else if (this.winner === 2) {
      winner = 'You Lose! | '
    }

    return {
      title: winner + title
    }
  },

  computed: {
    ...mapState(['rpssl']),

    playerOneShape (): String|null {
      return this.getShapeName(this.playerOne)
    },

    playerTwoShape (): String|null {
      if (this.winner !== null) {
        return this.getShapeName(this.playerTwo)
      }

      return null
    }
  },

  mounted () {
    setTimeout(this.setWinner, 500)
  },

  methods: {
    classnames,

    getShapeName (id: number): String|null {
      const shape: ShapeSpec|null = getShapeSpecById(id)

      if (shape?.name) {
        return shape.name
      }

      return null
    },

    /**
     * Set the winner player from the given shapes
     */
    setWinner () {
      this.winner = winner(this.playerOne, this.playerTwo)

      // If player one wins, add to score
      if (this.winner === 1) {
        this.addScore()
      }
    },

    /**
     * Add 1 point to the current score.
     */
    addScore () {
      this.$store.commit('rpssl/setScore', this.rpssl.score + 1)
    },

    resetGame () {
      this.$store.commit('rpssl/reset')
    }
  }
})
</script>
