<template>
  <svg class="x-icon" :class="{'x-loading': name === 'loading'}" @click="$emit('click')">
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
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.x-icon {
  height: 1em;
  width: 1em;
  margin-right: 0.3em;
}
.x-loading {
  animation: spin 2s infinite linear;
}
</style>
