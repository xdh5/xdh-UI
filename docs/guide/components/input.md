---
title: Input
---
### 输入框
**基础用法**


<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

``` html
<x-input value='文字'></x-input>
<x-input value='文字' disabled></x-input>
<x-input value='文字' readonly></x-input>
```

**错误信息**


<ClientOnly>
  <input-demo-2></input-demo-2>
</ClientOnly>

``` html
<x-input value='文字' error='错误信息'></x-input>
```

**事件**


<ClientOnly>
  <input-demo-3></input-demo-3>
</ClientOnly>

``` html js
<template>
  <x-input @focus='hello'></x-input>
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
**Input Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>value</td> <td>双向绑定输入值</td> <td>string</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>disabled</td> <td>禁用按钮</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
  <tr> <td>readonly</td> <td>只读状态</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
  <tr> <td>error</td> <td>错误信息</td> <td>string</td> <td>-</td> <td>-</td> </tr>
</table>

**Input Events**
<table style="font-size:14px">
  <tr> <th>事件名</th> <th>说明</th> <th>参数</th> </tr>
  <tr> <td>change</td> <td>改变输入值</td> <td>-</td> </tr>
  <tr> <td>input</td> <td>输入</td> <td>-</td> </tr>
  <tr> <td>focus</td> <td>焦聚</td> <td>-</td> </tr>
  <tr> <td>blur</td> <td>失焦</td> <td>-</td> </tr>
</table>