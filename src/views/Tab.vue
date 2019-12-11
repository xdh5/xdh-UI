<template>
<div id="app">
  <div class="wrapper">
    <h1 class="title-h1">标签页</h1>
    <div class="demo">
      <h2 class="title-h2">基础用法</h2>
      <x-tab v-model="active">
        <x-tab-pane name="tab1" lable="标题1"><div>内容1</div></x-tab-pane>
        <x-tab-pane name="tab2" lable="标题2"><div>内容2</div></x-tab-pane>
      </x-tab>
      <pre><code>
      &lt;template&gt;
        &lt;x-tab v-model=&quot;active&quot;&gt;
          &lt;x-tab-pane name=&quot;tab1&quot; lable=&quot;标题1&quot;&gt;&lt;div&gt;内容1&lt;/div&gt;&lt;/x-tab-pane&gt;
          &lt;x-tab-pane name=&quot;tab2&quot; lable=&quot;标题2&quot;&gt;&lt;div&gt;内容2&lt;/div&gt;&lt;/x-tab-pane&gt;
        &lt;/x-tab&gt;
      &lt;/template&gt;
      &lt;script&gt;
      export default {
        data () {
          return {
            active: &#x27;tab1&#x27;
          }
        }
      }
      &lt;/script&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">Tab Attributes</h2>
      <table class="demo-table">
        <tr>
          <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th>
        </tr>
        <tr>
          <td>v-model</td> <td>绑定值，选中选项卡的 name	</td> <td>String</td> <td>-</td> <td>第一个选项卡的 name</td>
        </tr>
      </table>
    </div>
    <div class="demo">
      <h2 class="title-h2">Tab-pane Attributes</h2>
      <table class="demo-table">
        <tr>
          <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th>
        </tr>
        <tr>
          <td>label</td> <td>选项卡标题</td> <td>String</td> <td>-</td> <td>-</td>
        </tr>
        <tr>
          <td>disabled</td> <td>是否禁用</td> <td>Boolean</td> <td>-</td> <td>false</td>
        </tr>
        <tr>
          <td>name</td> <td>与选项卡绑定值 value 对应的标识符，表示选项卡别名</td> <td>String</td> <td>-</td> <td>false</td>
        </tr>
      </table>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'tab',
  data () {
    return {
      active: 'tab1'
    }
  }
}
</script>
