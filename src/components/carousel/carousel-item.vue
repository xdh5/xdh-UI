<template>
<div>
  <template v-if="animationEnabled">
    <transition name="slide">
      <div class="x-carousel-item" v-if="visible" :class="{reverse}">
        <slot></slot>
      </div>
    </transition>
  </template>
  <template v-else>
    <div class="x-carousel-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </template>
</div>
</template>

<script>
export default {
  name: 'x-carousel-item',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: undefined,
      reverse: false, // 控制滑动方向
      animationEnabled: false // 使用第一次挂载 item 时不播放动画
    }
  },
  updated() {
    this.animationEnabled = true
  },
  computed: {
    visible() {
      return this.selected === this.name // 是否播放到这个item
    }
  }
}
</script>

<style lang="less" scoped>
.slide-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}
</style>
