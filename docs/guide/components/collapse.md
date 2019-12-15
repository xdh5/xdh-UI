---
title: Collapse
---
### 折叠版面
**基础用法**


<ClientOnly>
  <collapse-demo-1></collapse-demo-1>
</ClientOnly>

``` html
<template>
  <x-collapse v-model="open">
    <x-collapse-item title="标题1" name="a"><div>内容1</div></x-collapse-item>
    <x-collapse-item title="标题2" name="b"><div>内容2</div></x-collapse-item>
    <x-collapse-item title="标题3" name="c"><div>内容3</div></x-collapse-item>
  </x-collapse>
</template>
<script>
export default {
  data () {
    return {
      open: ['a']
    }
  }
}
</script>
```

**手风琴模式**


<ClientOnly>
  <collapse-demo-2></collapse-demo-2>
</ClientOnly>

``` html
<template>
  <x-collapse v-model="open" accordion>
    <x-collapse-item title="标题1" name="a"><div>内容1</div></x-collapse-item>
    <x-collapse-item title="标题2" name="b"><div>内容2</div></x-collapse-item>
    <x-collapse-item title="标题3" name="c"><div>内容3</div></x-collapse-item>
  </x-collapse>
</template>
<script>
export default {
  data () {
    return {
      open: ['a']
    }
  }
}
</script>
```

**Collapse Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>v-model</td> <td>绑定值，选中选项卡的 name</td> <td>String</td> <td>-</td> <td>第一个选项卡的 name</td> </tr>
  <tr> <td>accordion</td> <td>是否手风琴模式</td> <td>Boolean</td> <td>-</td> <td>false</td> </tr>
</table>

**Collapse-item Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>name</td> <td>折叠面板绑定值 value 对应的标识符，表示选项卡别名</td> <td>String</td> <td>-</td> <td>false</td> </tr>
  <tr> <td>title</td> <td>折叠面板标题</td> <td>String</td> <td>-</td> <td>-</td> </tr>
</table>
