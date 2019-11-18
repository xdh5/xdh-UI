<template>
<div class="x-button-group">
  <slot></slot>
</div>
</template>
<script>
export default{
  name: 'x-button-group',
  mounted(){
    for(let node of this.$el.children){
      if(node.nodeName.toLowerCase() !== 'button'){
        console.warn('x-btn-group的子元素应为x-btn')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.x-button-group{
  display: inline-flex; vertical-align: top;
  >.x-button{
    border-radius: 0px; margin-left: -2px;
    &:first-child{ border-top-left-radius: var(--border-radius); border-bottom-left-radius: var(--border-radius); };
    &:last-child{ border-top-right-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius); }
    &:hover{ position: relative; z-index: 1; }
  }
}
</style>