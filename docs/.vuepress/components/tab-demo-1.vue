<template>
  <x-tab v-model="active">
    <x-tab-pane name="tab1" lable="标题1">内容1</x-tab-pane>
    <x-tab-pane name="tab2" lable="标题2">内容2</x-tab-pane>
  </x-tab>
</template>
<script>
import Tab from '../../../src/components/tab/tab'
import TabPane from '../../../src/components/tab/tab-pane'

export default {
  name: 'toast-demo-1',
  components:{
    'x-tab': Tab,
    'x-tab-pane': TabPane,
  },
  data () {
    return {
      active: 'tab1'
    }
  }
}
</script>
