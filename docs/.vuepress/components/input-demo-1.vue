<template>
<div>
  <x-input value='文字'></x-input>
  <x-input value='文字' disabled></x-input>
  <x-input value='文字' readonly></x-input>
</div>
</template>
<script>
import Input from '../../../src/components/input'

export default {
  name: 'input-demo-1',
  components:{
    'x-input': Input
  }
}
</script>