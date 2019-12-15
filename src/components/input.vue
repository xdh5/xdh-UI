<template>
  <div class="x-input" :class="{error}" >
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <x-icon name="error" class="error-icon" ></x-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  name: 'x-input',
  components: {
    'x-icon': Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: [String, Boolean],
      default: false
    }
  }
}
</script>
<style lang="less" scoped>
.x-input {
  display: inline-flex; align-items: center;
  input {
    height: 32px; border: 1px solid #999;; border-radius: 4px; padding: 0 8px; font-size: 14px;
    &:hover { border-color: #666; }
    &:focus { border-color: #409eff }
    &[disabled] { border-color: #bbb; color: #bbb; cursor: not-allowed; }
    &[readonly] { cursor: not-allowed; }
  }
}
.error {
  input {
    border: 1px solid #f1453d;
    &:hover { border: 1px solid #f1453d; }
  }
  .error-icon { fill: #f1453d; vertical-align: middle; margin-left: 0.3em; }
  .error-message { color: #f1453d; font-size: 12px; }
}
</style>
