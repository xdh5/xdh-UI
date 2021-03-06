<template>
<div class="x-toast" :class="toastClasses">
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml">{{msg}}</slot>
      <div v-else v-html="msg"></div>
    </div>
    <span class="close" v-if="closeButton" @click="close">
      {{closeButton.text}}
    </span>
  </div>
</div>
</template>
<script>
export default {
  name: 'x-toast',
  data () {
    return {
      timer: null
    }
  },
  props: {
    msg: {
      type: String
    },
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator (value) {
        return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: Object,
      default () {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  mounted () {
    this.execAutoClose()
  },
  computed: {
    toastClasses () {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    // 自动关闭定时器
    execAutoClose () {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    // 关闭并清除可能存在的定时器
    close () {
      this.$el.remove()
      this.$destroy()
      clearTimeout(this.timer)
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>
<style scoped lang="less">
@keyframes slide-up {
  0% { opacity: 0; transform: translateY(100%); } 100% { opacity: 1; transform: translateY(0%); }
}
@keyframes slide-down {
  0% { opacity: 0; transform: translateY(-100%); } 100% { opacity: 1; transform: translateY(0%); }
}
@keyframes fade-in {
  0% { opacity: 0; } 100% { opacity: 1; }
}
.x-toast {
  position: fixed; left: 50%; transform: translateX(-50%); @animation-duration: 300ms; z-index: 999;
  &.position-top {
    top: 20px;
    .toast { border-top-left-radius: 0; border-top-right-radius: 0; animation: slide-down @animation-duration; }
  }
  &.position-bottom {
    bottom: 20px;
    .toast { border-bottom-left-radius: 0; border-bottom-right-radius: 0; animation: slide-up @animation-duration; }
  }
  &.position-middle {
    top: 50%; transform: translateX(-50%) translateY(-50%);
    .toast { animation: fade-in @animation-duration; }
  }
}
.toast {
  font-size: 14px; min-height: 40px; line-height: 1.8; display:flex; color: #909399; align-items: center; border-radius: 4px; border: 1px solid #ebeef5; background-color: #edf2fc; padding: 0 16px;
  .message { padding: 8px 16px 8px 0; min-width: 280px; max-width: 60vw; word-wrap:break-word;}
  .close { border-left:1px solid rgb(206, 208, 209); padding-left: 16px; flex-shrink: 0; cursor: pointer; }
}
</style>
