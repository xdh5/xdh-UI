<template>
  <div
    class="popover"
    ref="popover"
  >
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      :class="{[`position-${position}`]:true}"
    >
      <slot
        name="content"
        :close="close"
      ></slot>
    </div>
    <span
      ref="triggerWrapper"
      style="display: inline-block;"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'x-popover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    this.addPopoverListeners()
  },
  beforeDestroy () {
    this.removePopoverListeners()
  },
  methods: {
    // 添加事件，防止鼠标移动和点击事件重合
    addPopoverListeners () {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    // 移除事件
    removePopoverListeners () {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    // 判断小三角形位置
    positionContent () {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      const {
        width,
        height,
        top,
        left
      } = triggerWrapper.getBoundingClientRect()
      const { height: height2 } = contentWrapper.getBoundingClientRect()
      let positions = {
        top: { top: top + window.scrollY, left: left + window.scrollX },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        }
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
    },
    // 单击事件判断
    onClickDocument (e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return // 如果点击的是触发器，不处理（针对hover时）
      } else if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return // 如果点击的是内容，不处理
      } else {
        this.close()
      }
    },
    open () {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close () {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick (event) {
      // 判断点击的是不是触发器
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
.popover { display: inline-block; vertical-align: top; position: relative; }
.content-wrapper {
  position: absolute; border: 1px solid #333; border-radius: 4px; filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5)); background: white; padding: 0.5em 1em; max-width: 20em; word-break: break-all; z-index: 999;
  &::before, &::after { content: ''; display: block; border: 10px solid transparent; width: 0; height: 0; position: absolute; }
  &.position-top {
    transform: translateY(-100%); margin-top: -10px;
    &::before, &::after { left: 10px; }
    &::before { border-top-color: black; border-bottom: none; top: 100%; }
    &::after { border-top-color: white; border-bottom: none; top: calc(100% - 1px); }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before, &::after { left: 10px; }
    &::before { border-top: none; border-bottom-color: black; bottom: 100%; }
    &::after { border-top: none; border-bottom-color: white; bottom: calc(100% - 1px); }
  }
  &.position-left {
    transform: translateX(-100%); margin-left: -10px;
    &::before, &::after { transform: translateY(-50%); top: 50%; }
    &::before { border-left-color: black; border-right: none; left: 100%; }
    &::after { border-left-color: white; border-right: none; left: calc(100% - 1px); }
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after { transform: translateY(-50%); top: 50%; }
    &::before { border-right-color: black; border-left: none; right: 100%; }
    &::after { border-right-color: white; border-left: none; right: calc(100% - 1px); }
  }
}
</style>
