<template>
  <x-table :data="tableData" @sortChange="handleSortChange">
    <x-table-column lable="日期" prop="date" sortable></x-table-column>
    <x-table-column lable="姓名" prop="name"></x-table-column>
    <x-table-column lable="地址" prop="address"></x-table-column>
  </x-table>
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
  },
  methods:{
    handleSortChange(lable,order){
      console.log(lable,order)
    }
  }
}
</script>
<style lang="less" scoped>
.title{
  margin-top:30px;
  line-height: 0;
  font-size: 16px;
  font-weight: bold;
}
</style>