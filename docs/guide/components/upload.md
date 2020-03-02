---
title: Upload
---
### 上传
**基础用法**

<ClientOnly>
  <upload-demo-1></upload-demo-1>
</ClientOnly>

``` html
<x-upload name="file" action="https://www.baidu.com">
  <x-button>点击上传</x-button>
</x-upload>
```

**限制文件大小和类型**

<ClientOnly>
  <upload-demo-2></upload-demo-2>
</ClientOnly>

``` html
  <x-upload name="file" action="https://www.baidu.com" @on-change="handleChange"
    @on-success="handleSuccess" @on-error="handleError" @on-remove="handleRemove">
    <x-button>点击上传</x-button>
  </x-upload>
```

**回调事件**

<ClientOnly>
  <upload-demo-3></upload-demo-3>
</ClientOnly>

``` html
<template>
  <x-upload name="file" action="https://www.baidu.com" @on-change="handleChange"
    @on-success="handleSuccess" @on-error="handleError" @on-remove="handleRemove">
    <x-button>点击上传</x-button>
  </x-upload>
</template>
<script>
export default {
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
```

**Upload Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>action</td> <td>是否增加表格密度</td> <td>boolean</td> <td>-</td> <td>false</td> </tr>
  <tr> <td>name</td> <td>上传的文件字段名</td> <td>string</td> <td>-</td> <td>file</td> </tr>
  <tr> <td>size</td> <td>上传的文件大小限制（kb）</td> <td>number</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>accept</td> <td>必选参数，上传的地址	</td> <td>string</td> <td>-</td> <td>-</td> </tr>
</table>

**Upload Events**
<table style="font-size:14px">
  <tr> <th>事件名</th> <th>说明</th> <th>参数</th> </tr>
  <tr> <td>on-change</td> <td>文件改变时的钩子</td> <td>file, fileList</td> </tr>
  <tr> <td>on-remove</td> <td>文件移除时的钩子</td> <td>file, fileList</td> </tr>
  <tr> <td>on-success</td> <td>文件上传成功时的钩子</td> <td>response, rawFiles, fileList</td> </tr>
  <tr> <td>on-error</td> <td>文件上传失败时的钩子</td> <td>error, rawFiles, fileList</td> </tr>
</table>