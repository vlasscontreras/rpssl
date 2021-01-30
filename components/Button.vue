<template>
  <button :class="classes" v-on="listeners">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import classnames from 'classnames'

export default Vue.extend({
  props: {
    inverted: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    listeners () {
      return this.$listeners
    },

    classes (): String {
      return classnames(
        'border-2',
        'focus:outline-none',
        'mx-auto',
        'px-8',
        'py-2',
        'rounded-lg',
        'sm:mr-0',
        'table',
        'text-xl',
        'transition-all',
        'uppercase',

        {
          // Normal.
          'bg-transparent': !this.inverted,
          'hover:bg-white': !this.inverted,
          'border-header-outline': !this.inverted,
          'hover:border-white': !this.inverted,
          'text-white': !this.inverted,
          'hover:text-dark': !this.inverted,

          // Inverted.
          'bg-white': this.inverted,
          'hover:bg-transparent': this.inverted,
          'border-header-white': this.inverted,
          'hover:border-header-outline': this.inverted,
          'text-dark': this.inverted,
          'hover:text-white': this.inverted
        }
      )
    }
  }
})
</script>
