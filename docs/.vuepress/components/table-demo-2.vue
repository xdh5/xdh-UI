<template>
<div>
  <p class="title"> 斑马纹 </p>
  <x-table :data="tableData" striped>
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
  <p class="title"> 紧密模式 </p>
  <x-table :data="tableData" compact>
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
  <p class="title"> 边框 </p>
  <x-table :data="tableData" bordered>
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
  <p class="title"> 加载中 </p>
  <x-table :data="tableData" loading>
    <x-table-column lable="日期" prop="date"></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
</div>
</template>
<script>
import Table from '../../../src/components/table/table'
import TableColumn from '../../../src/components/table/table-column'

export default {
  name: 'table-demo-1',
  components: {
    'x-table': Table,
    'x-table-column': TableColumn
  },
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
<style lang="less" scoped>
.title{
  margin-top:30px;
  line-height: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center
}
</style>