<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      {{result || '&nbsp;'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <x-cascader-items :options="options" class="popover"
        :height="height" :selected="selected"
        @update:selected="onUpdateSelected"></x-cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-items'
import ClickOutside from '../click-outside'
export default {
  name: 'x-cascader',
  components: { 'x-cascader-items': CascaderItems },
  directives: { ClickOutside },
  model: {
    prop: 'selected',
    event: 'changeSelected' // 接收父组件v-model
  },
  props: {
    // 下拉框选项
    options: {
      type: Array
    },
    // 下拉框的高度
    height: {
      type: [String, Number]
    },
    // 被选中的值
    selected: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      // 是否弹出选项
      popoverVisible: false,
    }
  },
  methods: {
    open() {
      this.popoverVisible = true
    },
    close() {
      this.popoverVisible = false
    },
    toggle() {
      this.popoverVisible ? this.close() : this.open()
    },
    onUpdateSelected(newSelected) {
      this.$emit('changeSelected', newSelected)
    }
  },
  computed: {
    // 显示结果
    result() {
      return this.selected.map(item => item.name).join(' / ')
    }
  }
}
</script>

<style scoped lang="less">
.cascader {
  display: inline-block;
  position: relative;
  .trigger {
    background: white;
    height: 38px;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    font-size: 14px;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    margin-top: 8px;
    z-index: 99;
    border: 1px solid #eeeeee;
    box-shadow: 1px 1px 1px #eee;
    font-size: 14px;
  }
}
</style>
