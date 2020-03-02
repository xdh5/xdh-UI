<template>
<div>
  <x-sticky>
    <x-button>sticky</x-button>
  </x-sticky>
</div>
</template>
<script>
import Sticky from '../../../src/components/sticky'
import Button from '../../../src/components/button/button'

export default {
  name: 'sticky-demo-1',
  components:{
    'x-sticky': Sticky,
    'x-button': Button
  }
}
</script>