---
title: Button
---
### 按钮
**基础用法**


<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>

``` html
<x-button>普通按钮</x-button>
<x-button icon="settings" position="right" >带图标的按钮</x-button>
<x-button loading>loading状态</x-button>
<x-button disabled>禁止状态</x-button>
```

**按钮组**


<ClientOnly>
  <button-demo-2></button-demo-2>
</ClientOnly>

``` html
<x-button-group>
  <x-button>上一页</x-button>
  <x-button>更多</x-button>
  <x-button>下一页</x-button>
</x-button-group>
```

**事件**


<ClientOnly>
  <button-demo-3></button-demo-3>
</ClientOnly>

``` html js
<template>
  <x-button @click="hello">点击按钮</x-button>
</template>
<script>
export default {
  methods: {
    hello () {
      console.log('Hello!')
    }
  }
}
</script>
```
**Button Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>icon</td> <td>图标样式</td> <td>string</td> <td>见 icon</td> <td>-</td> </tr>
  <tr> <td>position</td> <td>图标位置</td> <td>string</td> <td>left / right</td> <td>left</td> </tr>
  <tr> <td>loading</td> <td>图标位置</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
  <tr> <td>disabled</td> <td>禁用按钮</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
</table>

**Button Events**
<table style="font-size:14px">
  <tr> <th>事件名</th> <th>说明</th> <th>参数</th> </tr>
  <tr> <td>click</td> <td>点击按钮</td> <td>-</td> </tr>
</table>