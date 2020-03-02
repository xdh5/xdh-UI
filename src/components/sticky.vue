<template>
  <div class="x-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="x-sticky" :class="classes" :style="{left, width, top}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "x-sticky",
    props: {
      distance: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        sticky: false,
        left: undefined,
        width: undefined,
        height: undefined,
        top: undefined,
      }
    },
    mounted () {
      let that = this
      window.addEventListener('scroll', that.handleScroll)
    },
    beforeDestroy () {
      let that = this
      window.removeEventListener('scroll', that.handleScroll)
    },
    created () {
      this.timerId = null
    },
    computed: {
      classes () {
        return {
          sticky: this.sticky
        }
      }
    },
    methods: {
      offsetTop () {
        let {top} = this.$refs.wrapper.getBoundingClientRect()
        return {top: top + window.scrollY}
      },
      handleScroll () {
        let {top} = this.offsetTop()
        if (window.scrollY > top - this.distance) {
          let {height, left, width} = this.$refs.wrapper.getBoundingClientRect()
          this.height = height + 'px'
          this.left = left + 'px'
          this.width = width + 'px'
          this.top = this.distance + 'px'
          this.sticky = true
        } else {
          this.height = undefined
          this.left = undefined
          this.width = undefined
          this.top = undefined
          this.sticky = false
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .x-sticky {
    z-index: 99;
    &.sticky {
      position: fixed;
    }
  }
</style>