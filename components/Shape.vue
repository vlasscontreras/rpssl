<template>
  <div :class="classname">
    <div class="rounded-full bg-white flex h-full items-center justify-center w-full inner">
      <component :is="shape.component" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import classnames from 'classnames'

import { ShapeSpec } from '@/types'
import Rock from '@/components/shapes/Rock.vue'
import Paper from '@/components/shapes/Paper.vue'
import Scissors from '@/components/shapes/Scissors.vue'
import Lizard from '@/components/shapes/Lizard.vue'
import Spock from '@/components/shapes/Spock.vue'

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
      validator (value) {
        return ['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(value)
      }
    }
  },

  data () {
    return {
      shape: this.getShapeSpec(this.type)
    }
  },

  computed: {
    classname () {
      return classnames(
        'inline-block',
        'p-3',
        'sm:p-4',
        'rounded-full',
        'w-28',
        'sm:w-36',
        'h-28',
        'sm:h-36',
        'bg-gradient-to-t',
        'outer',
        this.shape.classname
      )
    }
  },

  methods: {
    classnames,

    /**
     * Get the shape spec object for the given type
     *
     * @param {String} shape Shape name.
     * @return {ShapeSpec|null}
     */
    getShapeSpec (shape: String): ShapeSpec|null {
      const classname = `from-${shape}-start to-${shape}-end`

      switch (shape) {
        case 'rock':
          return {
            component: Rock,
            classname
          }

        case 'paper':
          return {
            component: Paper,
            classname
          }

        case 'scissors':
          return {
            component: Scissors,
            classname
          }

        case 'lizard':
          return {
            component: Lizard,
            classname
          }

        case 'spock':
          return {
            component: Spock,
            classname: 'from-cyan-start to-cyan-end'
          }

        default:
          return null
      }
    }
  }
})
</script>

<style scoped>
.outer {
  box-shadow: inset 0 -0.375em rgb(0, 0, 0, 0.2);
}

.inner {
  box-shadow: inset 0 0.375em rgb(0, 0, 0, 0.15);
}
</style>
