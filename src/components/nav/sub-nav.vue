<template>
  <div class="x-sub-nav" :class="{selected: isActive}" v-click-outside="close">
    <span class="x-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="x-sub-nav-down" :class="{open}">
        <x-icon name="down"></x-icon>
      </span>
      <span class="x-sub-nav-right" :class="{open}">
        <x-icon name="right"></x-icon>
      </span>
    </span>
    <div class="x-sub-nav-popover" v-show="open" ref="sub">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from '../click-outside'
import XIcon from '../icon'
export default {
  components: { XIcon },
  directives: { ClickOutside },
  name: 'x-sub-nav',
  inject: ['eventBus'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false,
      isActive: false,
      active: undefined
    }
  },
  methods: {
    onClick() {
      this.open = !this.open
    },
    close() {
      this.open = false
    }
  },
  mounted() {
    this.eventBus.$on('selected', active => {
      this.active = active
      this.isActive = false
      for (let vm of this.$children.slice(1)) {
        if (vm.name === active || vm.isActive) {
          this.isActive = true
          return
        }
      }
    })
  }
}
</script>

<style scoped lang="less">
.x-sub-nav {
  position: relative;
  &.selected {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid #409eff;
      width: 100%;
    }
  }
  &-label {
    padding: 10px 20px;
    display: block;
  }
  &-down{
    transition: transform 250ms;
    display: inline-flex;
    margin-left: 0.3em;
    height: 1em;
    width: 0.8em;
    &.open {
      transform: rotate(180deg);
    }
  }
  &-right {
    display: none;
  }
  &-popover {
    transition: height 250ms;
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    white-space: nowrap;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    border-radius: 2px;
    font-size: 14px;
    min-width: 8em;
    border: 1px solid #eeeeee;
    z-index: 999
  }
}
.x-sub-nav .x-sub-nav {
  &.selected {
    &::after {
      display: none;
    }
  }
  .x-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
  .x-sub-nav-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .x-sub-nav-right {
    transition: transform 250ms;
    display: inline-flex;
    margin-left: 0.3em;
    height: 1em;
    width: 0.8em;
    &.open {
      transform: rotate(180deg);
    }
  }
  .x-sub-nav-down{
    display: none;
  }
}
</style>
