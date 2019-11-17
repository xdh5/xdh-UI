<template>
<svg class="icon">
  <use :xlink:href="`#i-${name}`"></use>
</svg>
</template>
<script>
export default{
  name: 'icon',
  props:{
    'name':{},
  }
}
</script>
<style lang="less" scoped>
.icon{
  height: 1em;
  width: 1em;
  margin-right:.3em
}
</style>