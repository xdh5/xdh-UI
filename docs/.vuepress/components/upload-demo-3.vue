<template>
  <x-upload name="file" action="https://www.baidu.com" @on-change="handleChange"
    @on-success="handleSuccess" @on-error="handleError" @on-remove="handleRemove">
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
  },
  methods: {
    handleChange(file, fileList) {
      console.log(file, fileList)
    },
    handleSuccess(response, rawFiles, fileList) {
      console.log(response, rawFiles, fileList)
    },
    handleError(error, rawFiles, fileList) {
      console.log(error, rawFiles, fileList)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    }
  }
}
</script>