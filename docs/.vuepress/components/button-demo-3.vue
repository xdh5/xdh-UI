<template>
  <x-button @click="hello">点击按钮</x-button>
</template>
<script>
import Button from '../../../src/components/button/button'

export default {
  name: 'button-demo-3',
  components:{
    'x-button': Button,
  },
  methods: {
    hello () {
      console.log('Hello')
    }
  }
}
</script>