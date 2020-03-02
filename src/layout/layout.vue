<template>
<div class="x-layout" :class="{hasSider: hasSider}">
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'x-layout',
  data () {
    return {
      hasSider: false
    }
  },
  mounted () {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'x-sider') {
        this.hasSider = true
      }
    })
  }
}
</script>
<style scoped lang="less">
.x-layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
