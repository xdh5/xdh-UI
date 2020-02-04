---
title: Pagination
---
### 分页器
**基础用法**


<ClientOnly>
  <pagination-demo-1></pagination-demo-1>
</ClientOnly>

``` html
<template>
  <x-pagination :totalPage="8" :currentPage.sync="page"></x-pagination>
</template>
<script>
export default {
  data () {
    return {
      page: 1
    }
  }
}
</script>
```

**Tab Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>totalPage</td> <td>总页数</td> <td>number</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>currentPage</td> <td>当前页，支持 .sync 修饰符</td> <td>number</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>hideOnSinglePage</td> <td>总页数为1时是否显示翻页</td> <td>boolean</td> <td>-</td> <td>true</td> </tr>
</table>