<template>
  <svg class="x-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
import './svg.js'
export default {
  name: 'x-icon',
  props: {
    name: {}
  }
}
</script>
<style lang="less" scoped>
.x-icon {
  height: 1em;
  width: 1em;
  margin-right: 0.3em;
}
</style>
