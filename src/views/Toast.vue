<template>
<div id="app">
  <button @click="hello">sdad</button>
  <div class="wrapper">
    <h1 class="title-h1">输入框</h1>
    <div class="demo">
      <h2 class="title-h2">基础用法</h2>
      <x-input value='文字'></x-input>
      <pre><code>
      &lt;x-input value='文字'&gt;&lt;/x-input&gt;
      </code></pre>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'input',
  methods: {
    hello () {
      this.$message('qweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', {
        autoClose: 0
      })
    }
  }
}
</script>
