<template>
  <div class="x-nav">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'x-nav',
  model: {
    prop: 'active',
    event: 'update' // 接收父组件v-model
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  props: {
    active: {
      type: String
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  mounted() {
    this.eventBus.$emit('selected', this.active) // 父组件通知子组件改变
    // 子组件通知父组件改变
    this.eventBus.$on('update', name => {
      this.$emit('update', name)
      this.eventBus.$emit('selected', name)
    })
  }
}
</script>

<style scoped lang="less">
.x-nav {
  display: flex;
  border-bottom: 1px solid #eeeeee;
  cursor: default;
  user-select: none;
  font-size: 14px;
}
</style>
