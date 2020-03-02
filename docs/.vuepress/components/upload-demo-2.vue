<template>
  <x-upload name="file" action="https://www.baidu.com" :sizeLimit="1024" accept="image/png">
    <x-button>点击上传</x-button>
  </x-upload>
</template>
<script>
import Upload from '../../../src/components/upload'
import Button from '../../../src/components/button/button'

export default {
  name: 'upload-demo-1',
  components: {
    'x-upload': Upload,
    'x-button': Button
  }
}
</script>