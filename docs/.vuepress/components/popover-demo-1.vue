<template>
<div>
  <x-popover>
    <template slot="content">
      弹出内容
    </template>
    <x-button>点我</x-button>
  </x-popover>
  <x-popover  position="bottom">
    <template slot="content">
      弹出内容
    </template>
    <x-button>选择弹出位置</x-button>
  </x-popover>
  <x-popover trigger="hover">
    <template slot="content">
      弹出内容
    </template>
    <x-button>选择触发方式</x-button>
  </x-popover>
</div>
</template>
<script>
import Popover from '../../../src/components/popover'
import Button from '../../../src/components/button/button'

export default {
  name: 'popover-demo-1',
  components:{
    'x-popover': Popover,
    'x-button': Button
  }
}
</script>