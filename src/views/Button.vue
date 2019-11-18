<template>
<div id="app">
  <div class="wrapper">
    <h1 class="title-h1">按钮</h1>
    <div class="demo">
      <h2 class="title-h2">基础用法</h2>
      <x-btn>普通按钮</x-btn>
      <pre><code>
      &lt;x-btn icon=&quot;settings&quot;&gt;普通按钮&lt;/x-btn&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">带图标的按钮</h2>
      <x-btn icon="settings">带图标的按钮</x-btn>&emsp;
      <x-btn icon="settings" position="right">带图标的按钮</x-btn>
      <pre><code>
      &lt;x-btn icon=&quot;settings&quot;&gt;带图标的按钮&lt;/x-btn&gt;
      &lt;x-btn icon=&quot;settings&quot; position=&quot;right&quot;&gt;带图标的按钮&lt;/x-btn&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">loading状态</h2>
      <x-btn loading>loading状态</x-btn>
      <pre><code>
      &lt;x-btn loading&gt;loading状态&lt;/x-btn&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">禁止状态</h2>
      <x-btn disabled>禁止状态</x-btn>
      <pre><code>
      &lt;x-btn disabled&gt;禁止状态&lt;/x-btn&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">按钮组</h2>    
      <x-btn-group>
        <x-btn>上一页</x-btn>
        <x-btn>更多</x-btn>
        <x-btn>下一页</x-btn>
      </x-btn-group>
      <pre><code>
      &lt;x-btn-group&gt;
        &lt;x-btn&gt;上一页&lt;/x-btn&gt;
        &lt;x-btn&gt;更多&lt;/x-btn&gt;
        &lt;x-btn&gt;下一页&lt;/x-btn&gt;
      &lt;/x-btn-group&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">单击事件</h2>
      <x-btn @click="hello">点击按钮</x-btn>
      <pre><code>
      &lt;template&gt;
        &lt;x-btn @click=&quot;hello&quot;&gt;点击按钮&lt;/x-btn&gt;
      &lt;/template&gt;
      &lt;script&gt;
      export default{
        methods:{
          hello(){
            alert(&#x27;Hello!&#x27;)
          }
        }
      }
      &lt;/script&gt;
      </code></pre>
    </div>
  </div>
</div>
</template>
<script>
export default{
  name: 'x-button',
  methods:{
    hello(){
      alert('Hello!')
    }
  }
}
</script>