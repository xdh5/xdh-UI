<template>
  <div class="x-carousel" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="x-carousel-window" ref="window">
      <div class="x-carousel-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="x-carousel-dots">
      <span @click="onClickPrev" data-action="prev">
        <x-icon name="left"></x-icon>
      </span>
      <span v-for="n in childrenLength" :class="{active: selectedIndex === n-1}" :key="n"
        :data-index="n-1" @click="select(n-1)">
        {{n}}
      </span>
      <span @click="onClickNext" data-action="next">
        <x-icon name="right"></x-icon>
      </span>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'x-carousel',
  components: { 'x-icon': Icon },
  props: {
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayDelay: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      selected: undefined, // 下个准备展示的轮播
      childrenLength: 0,
      currentSelectedIndex: undefined, // 当前的轮播
      timerId: undefined
    }
  },
  mounted() {
    this.updateChildren()
    if (this.autoPlay) {
      this.playAutomatically()
    }
    this.childrenLength = this.items.length
  },
  updated() {
    this.updateChildren()
  },
  beforeDestroy() {
    this.pause()
  },
  computed: {
    // 当前选中了第几个
    selectedIndex() {
      let index = this.names.indexOf(this.selected)
      return index === -1 ? 0 : index
    },
    // item 的 vm
    items() {
      return this.$children.filter(vm => vm.$options.name === 'x-carousel-item')
    },
    // item 的 name
    names() {
      return this.items.map(vm => vm.name)
    }
  },
  methods: {
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      this.playAutomatically()
    },
    onClickPrev() {
      this.select(this.selectedIndex - 1)
    },
    onClickNext() {
      this.select(this.selectedIndex + 1)
    },
    playAutomatically() {
      if (this.timerId) {
        return
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        this.select(newIndex) // 告诉外界选中 newIndex
        this.timerId = setTimeout(run, this.autoPlayDelay)
      }
      this.timerId = setTimeout(run, this.autoPlayDelay)
    },
    pause() {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    select(newIndex) {
      this.currentSelectedIndex = this.selectedIndex
      if (newIndex === -1) {
        newIndex = this.names.length - 1
      }
      if (newIndex === this.names.length) {
        newIndex = 0
      }
      this.selected = this.names[newIndex]
    },
    // 如果没有选中项目则默认为第一项
    getSelected() {
      return this.selected || this.items[0].name
    },
    updateChildren() {
      let selected = this.getSelected()
      let reverse
      if (
        this.currentSelectedIndex === this.items.length - 1 &&
        this.selectedIndex === 0
      ) {
        reverse = false
      } else if (
        this.currentSelectedIndex === 0 &&
        this.selectedIndex === this.items.length - 1
      ) {
        reverse = true
      } else {
        reverse = !(this.selectedIndex > this.currentSelectedIndex)
      }
      this.items.forEach(vm => {
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = selected
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.x-carousel {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    .x-icon {
      fill: gray;
    }
    > span {
      width: 20px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #eeeeee;
      border-radius: 50%;
      margin: 0 8px;
      font-size: 12px;
      color: gray;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: #007aff;
        color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
