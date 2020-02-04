<template>
  <x-cascader
    v-model="value"
    :options="options">
  </x-cascader>
</template>
<script>
import Cascader from '../../../src/components/cascader/cascader'
export default {
  name: 'cascader-demo-1',
  components: {
    'x-cascader': Cascader
  },
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