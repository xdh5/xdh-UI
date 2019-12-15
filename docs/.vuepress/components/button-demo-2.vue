<template>
<x-button-group>
  <x-button>上一页</x-button>
  <x-button>更多</x-button>
  <x-button>下一页</x-button>
</x-button-group>
</template>
<script>
import Button from '../../../src/components/button/button'
import ButtonGroup from '../../../src/components/button/button-group'
export default {
  name: 'button-demo-2',
  components:{
    'x-button': Button,
    'x-button-group': ButtonGroup
  }
}
</script>