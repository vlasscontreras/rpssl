<template>
  <div :class="classname" @click="pick">
    <div class="rounded-full bg-white flex h-full items-center justify-center w-full inner">
      <component :is="shape.component" />
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
    }
  },

  computed: {
    shape (): ShapeSpec|null {
      return this.getShapeSpec(this.type)
    },

    classname (): string {
      return classnames(
        'inline-block',
        'p-3',
        'sm:p-4',
        'rounded-full',
        'w-24',
        'xs:w-28',
        'sm:w-36',
        'h-24',
        'xs:h-28',
        'sm:h-36',
        'bg-gradient-to-t',
        'outer',
        this?.shape?.classname
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

      shapeSpecs.classname = `from-${shape}-start to-${shape}-end`
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

<style scoped>
.outer {
  box-shadow: inset 0 -0.375em rgb(0, 0, 0, 0.2);
}

.inner {
  box-shadow: inset 0 0.375em rgb(0, 0, 0, 0.15);
}
</style>
