<template>
  <div
    class="x-tab"
  >
    <div class="x-tab-header">
      <x-tab-item
        v-for="(value,key) in propsData"
        :key=key
        :active="active"
        :lable="value.lable"
        :disabled="value.disabled"
        :name="value.name"
        @selected="sonChangeAcitve"
      >
      </x-tab-item>
    </div>
    <div
      class="x-tab-content"
      ref="content"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'x-tab',
  data () {
    return {
      eventBus: new Vue(),
      propsData: []
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  model: {
    prop: 'active',
    event: 'changeActive' // 接收父组件v-model
  },
  props: {
    active: String
  },
  methods: {
    // 接收子组件传来的active，再传给父组件和其他子组件
    sonChangeAcitve (name) {
      this.$emit('changeActive', name)
      this.eventBus.$emit('selected', name)
    },
    // 检查子组件是否正确 并 接收和转换参数
    checkPanes () {
      let panesSlots = this.$slots.default.filter(
        vnode => vnode.componentOptions.tag === 'x-tab-pane'
      )
      if (panesSlots.length === 0) {
        console.warn('x-tab的子组件应该是x-tab-pane')
      } else {
        this.propsData = panesSlots.map(slot => {
          let propsData = slot.componentOptions.propsData
          if (propsData.disabled === '') {
            propsData.disabled = true
          }
          if (!propsData.lable) {
            propsData.lable = propsData.name
          }
          return propsData
        })
      }
    }
  },
  mounted () {
    this.eventBus.$emit('selected', this.active)
    this.checkPanes()
  }
}
</script>
<style lang="less" scoped>
@gray: rgb(228, 231, 237);
.x-tab-header {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 2px solid @gray;
}
.x-tab-content{
  padding: 10px;
}
</style>
