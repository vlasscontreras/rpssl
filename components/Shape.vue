<template>
  <div :class="classname" @click="pick">
    <div class="rounded-full bg-white flex h-full items-center justify-center w-full inner transition-shadow">
      <component :is="shape.component" class="w-3/5 h-3/5" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import classnames from 'classnames'

import { ShapeSpec } from '@/types'
import { getShapeSpecByName } from '@/lib/game'
import { capitalize } from '@/lib/util'

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
      validator (value) {
        return ['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(value)
      }
    },
    winner: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    shape (): ShapeSpec|null {
      return this.getShapeSpec(this.type)
    },

    classname (): string {
      return classnames(
        'shape',
        'inline-block',
        'rounded-full',
        'bg-gradient-to-t',
        'outer',
        'transition-shadow',
        this?.shape?.classname,
        {
          hoverable: this.hoverable,
          winner: this.winner
        }
      )
    }
  },

  methods: {
    /**
     * Get the shape spec object for the given type
     *
     * @param {String} shape Shape name.
     * @return {ShapeSpec|null}
     */
    getShapeSpec (shape: String): ShapeSpec|null {
      const shapeSpecs = getShapeSpecByName(shape)

      if (!shapeSpecs) {
        return null
      }

      // Dynamic shape specification
      const shapeName = capitalize(shape)

      shapeSpecs.component = () => import(`@/components/shapes/${shapeName}.vue`)

      return shapeSpecs
    },

    /**
     * Pick the shape and send the shape ID
     */
    pick (): void {
      this.$emit('picked', this?.shape?.id)
    }
  }
})
</script>

<style lang="scss" scoped>
.shape {
  padding: 0.675em;
  height: 6.25em;
  width: 6.25em;
}

.outer {
  box-shadow: inset 0 -0.375em rgb(0, 0, 0, 0.2);

  .inner {
    box-shadow: inset 0 0.375em rgb(0, 0, 0, 0.15);
  }

  &.hoverable:hover {
    box-shadow: inset 0 -0.15em rgb(0, 0, 0, 0.2);

    .inner {
      box-shadow: inset 0 0.15em rgb(0, 0, 0, 0.15);
    }
  }
}

.winner {
  animation: winner 4s infinite ease;
}

@keyframes winner {
  0% {
    box-shadow:
      0 0 0 1em rgba(#fff, 2.5%),
      0 0 0 2em rgba(#fff, 2.5%),
      0 0 0 3em rgba(#fff, 2.5%);
  }

  50% {
    box-shadow:
      0 0 0 1.5em rgba(#fff, 2.5%),
      0 0 0 3.5em rgba(#fff, 2.5%),
      0 0 0 5.5em rgba(#fff, 2.5%);
  }

  100% {
    box-shadow:
      0 0 0 1em rgba(#fff, 2.5%),
      0 0 0 2em rgba(#fff, 2.5%),
      0 0 0 3em rgba(#fff, 2.5%);
  }
}
</style>
