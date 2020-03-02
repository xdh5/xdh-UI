<template>
  <div class="x-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div style="display: none">
      <input ref="temp" :accept="accept" type="file" multiple @change="uploadFiles($event)">
    </div>
    <ol class="x-uploader-fileList">
      <li v-for="(file, index) in fileList" :key="index">
        <template>
          <x-icon name="file" class="x-uploader-file"></x-icon>
        </template>
        <span class="x-uploader-name">{{file.name}}</span>
        <template>
          <x-icon v-if="file.status === 'uploading'" name="loading" class="x-uploader-status">
          </x-icon>
          <x-icon v-else-if="file.status === 'success'" name="success" class="x-uploader-status">
          </x-icon>
          <x-icon v-else-if="file.status === 'failed'" name="error" class="x-uploader-status">
          </x-icon>
        </template>
        <x-icon v-if="file.status !== 'uploading'" name="delete" class="x-uploader-delete"
          @click="onRemoveFile(file)"></x-icon>
      </li>
    </ol>
  </div>
</template>
<script>
import Vue from 'vue'
import XIcon from './icon'
import axios from 'axios'
import plugin from './plugin'
Vue.use(plugin)

export default {
  name: 'xUploader',
  components: { XIcon },
  props: {
    name: { type: String, required: true }, // 上传文件传给后端的key
    action: { type: String, default: 'file' }, // 上传到哪个url
    size: { type: Number }, // 文件大小
    accept: { type: String } // 文件类型
  },
  data() {
    return {
      fileList: [],
      fileStatus: []
    }
  },
  methods: {
    // 点击 input
    onClickUpload() {
      this.$refs.temp.click()
    },
    // 改变 input
    uploadFiles(event) {
      let rawFiles = Array.from(event.target.files)
      if (!this.beforeUploadFiles(rawFiles)) {
        return
      }
      for (let i = 0; i < rawFiles.length; i++) {
        let rawFile = rawFiles[i]
        let formData = new FormData()
        formData.append(this.name, rawFile, rawFile.name)

        // 更新状态
        let index = this.fileList.indexOf(rawFile)
        rawFile.status = 'uploading'
        this.fileList.splice(index, 1, rawFile)

        axios
          .post(this.action, formData, {
            headers: {
              'Content-Type': 'multipart/form-data;charse=UTF-8'
            }
          })
          .then(response => {
            rawFile.status = 'success'
            this.fileList.splice(index, 1, rawFile)
            this.$emit('on-success', response, rawFiles, this.fileList)
          })
          .catch(error => {
            rawFile.status = 'failed'
            this.fileList.splice(index, 1, rawFile)
            this.$emit('on-error', error, rawFiles, this.fileList)
          })
      }
    },
    onRemoveFile(file) {
      let index = this.fileList.indexOf(file)
      this.fileList.splice(index, 1)
      this.$emit('on-remove', file, this.fileList)
    },
    // 上传前检验文件
    beforeUploadFiles(rawFiles) {
      for (let i = 0; i < rawFiles.length; i++) {
        let { size, type } = rawFiles[i]
        if (size / 1024 > this.size) {
          this.$message(`文件大于${this.size}`)
          return false
        }
      }
      this.fileList = this.fileList.concat(rawFiles)
      this.$emit('on-change', rawFiles, this.fileList)
      return true
    }
  }
}
</script>

<style scoped lang="less">
.x-uploader {
  &-fileList {
    list-style: none;
    width: 60%;
    margin-top: 20px;
    > li {
      font-size: 12px;
      display: flex;
      align-items: center;
      margin: 8px 0;
      position: relative;
    }
  }
  &-file {
    width: 15px;
    height: 15px;
  }
  &-status {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 0;
  }
  &-delete {
    width: 15px;
    height: 15px;
    position: absolute;
    right: -30px;
  }
  &-image {
    margin-right: 8px;
    border: none;
  }
  &-name {
    margin: 0 10px;
    &.success {
      color: green;
    }
    &.fail {
      color: red;
    }
  }
}
</style>
