<template>
  <div class="x-nav-item" :class="{'active':active === name}" @click="onClick"
    :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'x-nav-item',
  inject: ['eventBus'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: undefined
    }
  },
  methods: {
    onClick() {
      this.eventBus.$emit('update', this.name)
    }
  },
  mounted() {
    this.eventBus.$on('selected', active => {
      this.active = active
    })
  }
}
</script>

<style scoped lang="less">
.x-nav-item {
  padding: 10px 20px;
  position: relative;
  font-size: 14px;
  &.active {
    color: #409eff;
    font-weight: bold;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid #409eff;
      width: 100%;
    }
  }
}
a {
  color: inherit;
  text-decoration: none;
}
.x-sub-nav .x-nav-item {
  &.active {
    background: #eeeeee;
    &::after {
      display: none;
    }
  }
}
</style>
