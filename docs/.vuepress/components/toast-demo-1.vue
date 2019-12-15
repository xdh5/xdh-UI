<template>
  <div>
    <x-button @click="open1">打开后消失</x-button>
    <x-button @click="open2">手动关闭</x-button>
    <x-button @click="open3">自定义关闭按钮</x-button>
    <x-button @click="open4">使用 HTML 片段</x-button>
    <x-button @click="open5">自定义位置</x-button>
  </div>
</template>
<script>
import Vue from 'vue'
import Button from '../../../src/components/button/button'
import plugin from '../../../src/components/plugin'
Vue.use(plugin)

export default {
  name: 'toast-demo-1',
  components:{
    'x-button': Button
  },
  methods: {
    open1 () {
      this.$message('这是一条消息提示')
    },
    open2 () {
      this.$message({
        msg: '这是一条消息提示',
        autoClose: 0
      })
    },
    open3 () {
      this.$message({
        msg: '这是一条消息提示',
        closeButton: {
          text: '好的',
          callback: function () {
            console.log('关闭toast后的回调函数')
          }
        }
      })
    },
    open4 () {
      this.$message({
        msg: '<em>这是一条 HTML 片段</em>',
        enableHtml: true
      })
    },
    open5 () {
      this.$message({
        msg: '位置在中间',
        position: 'middle'
      })
    }
  }
}
</script>
