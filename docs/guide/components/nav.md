---
title: Nav
---
### 导航菜单
**基础用法**


<ClientOnly>
  <nav-demo-1></nav-demo-1>
</ClientOnly>

``` html
<template>
  <x-nav v-model="active">
    <x-nav-item name="a">选项1</x-nav-item>
    <x-nav-item name="b">选项2</x-nav-item>
    <x-sub-nav name="c">
      <template slot="title">选项3</template>
      <x-nav-item name="d">选项3.1</x-nav-item>
      <x-sub-nav name="e">
        <template slot="title">选项3.2</template>
        <x-nav-item name="f">选项3.2.1</x-nav-item>
      </x-sub-nav>
    </x-sub-nav>
  </x-nav>
</template>
<script>
export default {
  data () {
    return {
      active: 'a'
    }
  }
}
</script>
```

**Nav Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>v-model</td> <td>绑定值，选中选项卡的 name</td> <td>String</td> <td>-</td> <td>-</td> </tr>
</table>

**SubNav Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>name</td> <td>与选项卡绑定值 value 对应的标识符</td> <td>String</td> <td>-</td> <td>-</td> </tr>
</table>

**NavItem Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>name</td> <td>与选项卡绑定值 value 对应的标识符</td> <td>String</td> <td>-</td> <td>-</td> </tr>
</table>