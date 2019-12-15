<template>
<div>
  <x-button>基础按钮</x-button>
  <x-button icon="settings" position="right" >带图标的按钮</x-button>
  <x-button loading>loading状态</x-button>
  <x-button disabled>禁止状态</x-button>
</div>
</template>
<script>
import Button from '../../../src/components/button/button'

export default {
  name: 'button-demo-1',
  components:{
    'x-button': Button
  }
}
</script>