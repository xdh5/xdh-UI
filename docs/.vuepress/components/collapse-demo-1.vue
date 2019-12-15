<template>
  <x-collapse v-model="open">
    <x-collapse-item title="标题1" name="a"><div>内容1</div></x-collapse-item>
    <x-collapse-item title="标题2" name="b"><div>内容2</div></x-collapse-item>
    <x-collapse-item title="标题3" name="c"><div>内容3</div></x-collapse-item>
  </x-collapse>
</template>
<script>
import Collapse from '../../../src/components/collapse/collapse'
import CollapseItem from '../../../src/components/collapse/collapse-item'

export default {
  name: 'collapse-demo-1',
  components:{
    'x-collapse': Collapse,
    'x-collapse-item': CollapseItem
  },
  data () {
    return {
      open: ['a']
    }
  }
}
</script>