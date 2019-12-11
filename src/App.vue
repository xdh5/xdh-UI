<template>
  <div id="app">
    <mlgb></mlgb>
  </div>
</template>
<script>
import mlgb from '@/views/Tab'
export default {
  components: {
    mlgb
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
.wrapper {
  margin: 20px;
}
pre {
  line-height: 1.4;
  margin: 0.85rem 0;
  background-color: #282c34;
  border-radius: 4px;
  code {
    color: #fff;
    font-size: 12px;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    padding: 0;
  }
}
.title-h1 {
  font-size: 24px;
  font-weight: normal;
  margin: 25px 0px;
}
.title-h2 {
  font-size: 20px;
  font-weight: normal;
  margin: 15px 0px;
}
.demo-table {
  width: 100%;
  font-size: 14px;
  line-height: 40px;
  border-collapse: collapse;
  th,td {
    border-bottom: 1px solid #909399;
    text-align: center
  }
  th {
    color: #909399;
    font-weight: normal;
  }
  td {
    color: #606266;
  }
}
</style>
