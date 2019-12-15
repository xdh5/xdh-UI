<template>
<div>
  <x-row class="demoRow" gutter="10">
    <x-col span="8"> <div>8</div> </x-col>
    <x-col span="8"> <div>8</div> </x-col>
    <x-col span="8"> <div>8</div> </x-col>
  </x-row>
</div>
</template>
<script>
import Col from '../../../src/components/grid/col'
import Row from '../../../src/components/grid/row'

export default {
  name: 'grid-demo-2',
  components:{
    'x-col': Col,
    'x-row': Row
  }
}
</script>
<style lang="less" scoped>
.demoRow>div>div{
  height: 30px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>