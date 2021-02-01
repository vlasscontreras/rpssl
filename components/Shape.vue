<template>
  <div :class="outerClass" @click="pick">
    <div :class="innerClass">
      <component :is="shape.component" v-if="shape" class="w-3/5 h-3/5" />
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
      default: null,
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

  data () {
    return {
      initialized: false
    }
  },

  computed: {
    shape (): ShapeSpec|null {
      return this.getShapeSpec(this.type)
    },

    outerClass (): string {
      return classnames(
        'shape',
        'inline-block',
        'rounded-full',
        'bg-gradient-to-t',
        'outer',
        'transition-shadow',
        this?.shape?.classname,
        {
          initialized: this.initialized,
          hoverable: this.hoverable,
          winner: this.winner,
          'no-shape': !this.shape
        }
      )
    },

    innerClass (): string {
      return classnames(
        'rounded-full',
        'flex',
        'h-full',
        'items-center',
        'justify-center',
        'w-full',
        'inner',
        'transition-shadow',
        {
          'bg-white': this.shape,
          'bg-black bg-opacity-10': !this.shape
        }
      )
    }
  },

  mounted () {
    this.initialized = true
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
  transform: scale(0);
  transition: transform 0.15s cubic-bezier(0.6, 0.6, 0.25, 1.45);

  &.initialized {
    transform: scale(1);
  }
}

.outer:not(.no-shape) {
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
