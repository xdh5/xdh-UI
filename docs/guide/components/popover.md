---
title: Popover
---
### 弹出框
**基础用法**


<ClientOnly>
  <popover-demo-1></popover-demo-1>
</ClientOnly>

``` html
<x-popover>
  <template slot="content">
    弹出内容
  </template>
  <x-button>点我</x-button>
</x-popover>
<x-popover  position="bottom">
  <template slot="content">
    弹出内容
  </template>
  <x-button>选择弹出位置</x-button>
</x-popover>
<x-popover trigger="hover">
  <template slot="content">
    弹出内容
  </template>
  <x-button>选择触发方式</x-button>
</x-popover>
```

**Popover Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>position</td> <td>选择popover位置</td> <td>string</td> <td>top / bottom / left / right</td> <td>top</td> </tr>
  <tr> <td>trigger</td> <td>选择触发方式</td> <td>string</td> <td>click / hover</td> <td>click</td> </tr>
</table>