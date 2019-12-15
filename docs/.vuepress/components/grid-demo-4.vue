<template>
<div>
  <x-row class="demoRow" align="center">
    <x-col
    :sm={span:24,offset:0}
    :md={span:10,offset:0}
    :lg={span:6,offset:0}>
      <div>内容</div>
    </x-col>
    <x-col
    :sm={span:24,offset:0}
    :md={span:10,offset:4}
    :lg={span:6,offset:3}>
      <div>内容</div>
    </x-col>
    <x-col
    :sm={span:24,offset:0}
    :md={span:10,offset:4}
    :lg={span:6,offset:3}>
      <div>内容</div>
    </x-col>
  </x-row>
</div>
</template>
<script>
import Col from '../../../src/components/grid/col'
import Row from '../../../src/components/grid/row'

export default {
  name: 'grid-demo-4',
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