<template>
  <div :style="styleObject">
    <slot/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {}
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
      console.log('ok')
      const bodyOffsetHeight = document.body.offsetHeight
      const windowInnerHeight = window.innerHeight

      if (bodyOffsetHeight < windowInnerHeight) {
        this.styleObject = {
          height: `${windowInnerHeight}px`
        }
      } else {
        this.styleObject = {}
      }
    }
  }
}
</script>
