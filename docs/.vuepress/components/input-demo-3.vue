<template>
<div>
  <x-input @focus='hello'></x-input>
</div>
</template>
<script>
import Input from '../../../src/components/input'

export default {
  name: 'input-demo-3',
  components:{
    'x-input': Input
  },
  methods: {
    hello () {
      console.log('Hello!')
    }
  }
}
</script>