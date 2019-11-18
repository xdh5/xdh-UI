<template>
<button :class="['x-button', `icon-position-${position}`]" @click="$emit('click')" :disabled="disabled">
  <x-icon class="x-icon" v-if="icon && !loading" :name="icon"></x-icon>
  <x-icon class="x-loading" v-if="loading" name="loading"></x-icon>
  <slot></slot>
</button>
</template>
<script>
import Icon from './x-icon'
export default{
  name: 'x-button',
  components:{
    'x-icon': Icon
  },
  props:{
    icon:{},
    position:{
      type: String,
      default: 'left',
      validator: (val) => {
        return val !== 'left' && val !== 'right' ? false : true
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled:{
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less" scoped>
@keyframes spin{ 0% {transform: rotate(0deg)} 100% {transform: rotate(360deg)} }
.x-button{ outline: none; font-size:var(--font-size); height:var(--button-height); padding: 0 1em; border-radius: var(--border-radius); border: 1px solid var(--border-color); background: var(--button-bg); display: inline-flex; align-items: center; justify-content: center; vertical-align: top; }
&:hover{ border-color: var(--border-color-hover); }
&:active{ background: var(--button-active-bg); }
.x-icon{ order:0; margin-right:.3em }
.icon-position-right{ .x-icon{ order:1; margin-right:0em; margin-left: .3em; } }
.x-loading{ animation: spin 2s infinite linear; }
</style>