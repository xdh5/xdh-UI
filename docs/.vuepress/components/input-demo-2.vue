<template>
<div>
  <x-input value='文字' error='错误信息'></x-input>
</div>
</template>
<script>
import Input from '../../../src/components/input'

export default {
  name: 'input-demo-2',
  components:{
    'x-input': Input
  }
}
</script>