---
title: Tabs
---
### 标签页
**基础用法**


<ClientOnly>
  <tab-demo-1></tab-demo-1>
</ClientOnly>

``` html
<template>
  <x-tab v-model="active">
    <x-tab-pane name="tab1" lable="标题1">内容</x-tab-pane>
    <x-tab-pane name="tab2" lable="标题2">内容2</x-tab-pane>
  </x-tab>
</template>
<script>
export default {
  data () {
    return {
      active: 'tab1'
    }
  }
}
</script>
```

**Tab Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>v-model</td> <td>绑定值，选中选项卡的 name</td> <td>string</td> <td>-</td> <td>第一个选项卡的 name</td> </tr>
</table>

**Tab-pane Events**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>label</td> <td>选项卡标题</td> <td>string</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>disabled</td> <td>是否禁用</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
  <tr> <td>name</td> <td>与选项卡绑定值 value 对应的标识符，表示选项卡别名</td> <td>string</td> <td>-</td> <td>false</td> </tr>
</table>