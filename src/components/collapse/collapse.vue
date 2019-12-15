<template>
  <div class="x-collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'x-collapse',
  model: {
    prop: 'selected',
    event: 'changeSelected' // 接收父组件v-model
  },
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array // 展开的部分
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    // 发送消息
    this.eventBus.$emit('update:selected', this.selected)
    // 接收消息 - item被点击
    this.eventBus.$on('update:addSelected', name => {
      // 深拷贝，避免直接操作prop
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.accordion) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('changeSelected', selectedCopy)
    })
    //  接收消息 - item被移除
    this.eventBus.$on('update:removeSelected', name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index, 1)
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('changeSelected', selectedCopy)
    })
  }
}
</script>

<style scoped lang="less">
.x-collapse { border: 1px solid #ddd; border-radius: 4px; }
</style>
