<template>
  <button
    :class="['x-button', `icon-position-${position}`]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <x-icon
      class="x-icon"
      v-if="icon && !loading"
      :name="icon"
    ></x-icon>
    <x-icon
      class="x-loading"
      v-if="loading"
      name="loading"
    ></x-icon>
    <slot></slot>
  </button>
</template>
<script>
import Icon from '../icon'
export default {
  name: 'x-button',
  components: {
    'x-icon': Icon
  },
  props: {
    icon: {},
    position: {
      type: String,
      default: 'left',
      validator: val => {
        return !(val !== 'left' && val !== 'right')
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less" scoped>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.x-button { outline: none; font-size: 14px; height: 32px; padding: 0 1em; border-radius: 4px; border: 1px solid #999; background: white; display: inline-flex; align-items: center; justify-content: center; vertical-align: top;cursor: pointer; }
&:hover { border-color: #666; }
&:active { background: #eee; }
.x-icon { order: 0; margin-right: 0.3em; }
.icon-position-right {
  .x-icon { order: 1; margin-right: 0em; margin-left: 0.3em; }
}
.x-loading { animation: spin 2s infinite linear; }
</style>
