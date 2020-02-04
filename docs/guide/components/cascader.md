---
title: Cascader
---
### 级联选择
**基础用法**


<ClientOnly>
  <cascader-demo-1></cascader-demo-1>
</ClientOnly>

``` html
<template>
  <x-cascader v-model="value" :options="options">
  </x-cascader>
</template>
<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {value:1, name:'浙江省', children:[{value:101, name: '杭州市'}]},
        {value:2, name:'福建省', children:[{value:201, name: '厦门市'}]}
      ]
    }
  }
}
</script>
```

**Cascader Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>v-model</td> <td>选中项绑定值</td> <td>-</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>options</td> <td>可选项数据源</td> <td>array</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>height</td> <td>下拉框高度</td> <td>number</td> <td>-</td> <td>100</td> </tr>
</table>