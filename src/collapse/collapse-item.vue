<template>
  <div class="x-collapse-item">
    <div class="title" @click="toggle" :data-name="name" >
      {{title}}
    </div>
    <div class="content" ref="content" v-if="open" >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'x-collapse-item',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      open: false
    }
  },
  inject: ['eventBus'],
  mounted () {
    this.eventBus &&
      this.eventBus.$on('update:selected', names => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true
        } else {
          this.open = false
        }
      })
  },
  methods: {
    toggle () {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  }
}
</script>

<style scoped lang="less">
.x-collapse-item {
  > .title { border: 1px solid #999; margin-top: -1px; margin-left: -1px; margin-right: -1px; min-height: 32px; display: flex; align-items: center; padding: 0 8px; background: lighten(#ddd, 8%); }
  &:first-child {
    > .title { border-top-left-radius: 4px; border-top-right-radius: 4px; }
  }
  &:last-child {
    > .title:last-child { border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; }
  }
  > .content { padding: 8px; }
}
</style>
