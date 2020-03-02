---
title: Table
---
### 表格
**基础用法**

<ClientOnly>
  <table-demo-1></table-demo-1>
</ClientOnly>

``` html
<template>
  <x-table :data="tableData">
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ]
    }
  }
}
</script>
```
**添加样式**

<ClientOnly>
  <table-demo-2></table-demo-2>
</ClientOnly>

``` html
<template>
<div>
  <x-table :data="tableData" striped>
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
  <x-table :data="tableData" compact>
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
  <x-table :data="tableData" bordered>
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
  <x-table :data="tableData" loading>
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
</div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ]
    }
  }
}
</script>
```

**添加索引**

自定义 ```type=index``` 列的行号。


<ClientOnly>
  <table-demo-3></table-demo-3>
</ClientOnly>


``` html
<template>
  <x-table :data="tableData">
    <x-table-column type="index"></x-table-column>
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ]
    }
  }
}
</script>
```
**添加多选**

选择多行数据时使用 ```type=selection```, 此时原始数据需要传入一个唯一的```id```值。```selectionChange``` 可以取得回调值，即被选中的data。

<ClientOnly>
  <table-demo-4></table-demo-4>
</ClientOnly>

``` html
<template>
  <x-table :data="tableData" @selectionChange="handleSelectionChange">
    <x-table-column type="selection"></x-table-column>
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ]
    }
  },
  methods:{
    handleSelectionChange(items){
      console.log(items)
    }
  }
}
</script>
```

**添加排序**

在列中设置```sortable```, 并通过 ```sortChange``` 可以取得回调值，即被选中的列和排序方式。

<ClientOnly>
  <table-demo-5></table-demo-5>
</ClientOnly>

``` html
<template>
  <x-table :data="tableData" @sortChange="handleSortChange">
    <x-table-column lable="日期" prop="date" sortable></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ]
    }
  },
  methods:{
    handleSortChange(lable,order){
      console.log(lable,order)
    }
  }
}
</script>
```

**Table Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>data</td> <td>显示的数据	</td> <td>array</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>striped</td> <td>是否为斑马纹 table</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
  <tr> <td>border</td> <td>是否带有纵向边框</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
  <tr> <td>compact</td> <td>是否增加表格密度</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
  <tr> <td>loading</td> <td>是否为加载状态</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
</table>

**TabColumn Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>label</td> <td>选项卡标题</td> <td>string</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>prop</td> <td>对应列内容的字段名</td> <td>string</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>width</td> <td>对应列的宽度	</td> <td>string</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>sortable</td> <td>对应列是否可以排序</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
  <tr> <td>type</td> <td>对应列的类型</td> <td>string</td> <td>selection / index</td> <td>-</td> </tr>
</table>

**Table Events**
<table style="font-size:14px">
  <tr> <th>事件名</th> <th>说明</th> <th>参数</th> </tr>
  <tr> <td>sort-change</td> <td>当表格的排序条件发生变化的时候会触发该事件</td> <td>lable, order</td> </tr>
  <tr> <td>selection-change</td> <td>当多选的时候会触发该事件</td> <td>items</td> </tr>
</table>