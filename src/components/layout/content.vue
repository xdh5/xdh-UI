<template>
<div class="x-content">
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'x-content'
}
</script>
<style scoped lang="less">
.x-content {
  flex-grow: 1;
}
</style>
