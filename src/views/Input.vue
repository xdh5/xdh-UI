<template>
<div id="app">
  <div class="wrapper">
    <h1 class="title-h1">输入框</h1>
    <div class="demo">
      <h2 class="title-h2">基础用法</h2>
      <x-input value='文字'></x-input>
      <pre><code>
      &lt;x-input value='文字'&gt;&lt;/x-input&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">禁止状态</h2>
      <x-input value='文字' disabled></x-input>
      <pre><code>
      &lt;x-input value='文字' disabled&gt;&lt;/x-input&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">只读状态</h2>
      <x-input value='文字' readonly></x-input>
      <pre><code>
      &lt;x-input value='文字' readonly&gt;&lt;/x-input&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">错误信息</h2>
      <x-input value='文字' error='错误信息'></x-input>
      <pre><code>
      &lt;x-input value='文字' error='错误信息'&gt;&lt;/x-input&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">事件</h2>
      <x-input @focus='hello'></x-input>
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
    <div class="demo">
      <h2 class="title-h2">Input Attributes</h2>
      <table class="demo-table">
        <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
        <tr> <td>value</td> <td>双向绑定输入值</td> <td>String</td> <td>-</td> <td>-</td> </tr>
        <tr> <td>disabled</td> <td>禁用按钮</td> <td>Boolean</td> <td>true, false</td> <td>false</td> </tr>
        <tr> <td>readonly</td> <td>只读状态</td> <td>Boolean</td> <td>true, false</td> <td>false</td> </tr>
        <tr> <td>error</td> <td>错误信息</td> <td>String</td> <td>-</td> <td>-</td> </tr>
      </table>   
    </div>
    <div class="demo">
      <h2 class="title-h2">Input Events</h2>
      <table class="demo-table">
        <tr> <th>事件名</th> <th>说明</th> <th>参数</th> </tr>
        <tr> <td>change</td> <td>改变输入值</td> <td>-</td> </tr>
        <tr> <td>input</td> <td>输入</td> <td>-</td> </tr>
        <tr> <td>focus</td> <td>焦聚</td> <td>-</td> </tr>
        <tr> <td>blur</td> <td>失焦</td> <td>-</td> </tr>
      </table>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'input',
  methods: {
    hello () {
      console.log('Hello!')
    }
  }
}
</script>
