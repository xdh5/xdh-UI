---
title: Toast
---

### 消息提示
**基础用法**


<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

``` html
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
export default {
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
```
**Toast Attributes**

<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>msg</td> <td>提示文字</td> <td>String</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>autoClose</td> <td>自动关闭时间（0为不自动关闭）</td> <td>Number</td> <td>-</td> <td>3</td> </tr>
  <tr> <td>closeButton</td> <td>自定义关闭按钮，text为按钮文字，callback为关闭后回调函数</td> <td>Object</td> <td>-</td> <td>text: '关闭', callback: undefined</td> </tr>
  <tr> <td>enableHtml</td> <td>是否允许出现HTML片段</td> <td>Boolean</td> <td>true, false</td> <td>false</td> </tr>
  <tr> <td>position</td> <td>提示消息出现位置</td> <td>String</td> <td>top, bottom, middle</td> <td>top</td> </tr>
</table>