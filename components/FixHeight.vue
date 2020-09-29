<template>
  <div :style="styleObject">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {},
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.fixHeight)
  },
  mounted() {
    this.fixHeight()
    window.addEventListener('resize', this.fixHeight)
  },
  methods: {
    fixHeight() {
      this.styleObject = {
        height: `${window.innerHeight}px`,
      }
    },
  },
}
</script>
