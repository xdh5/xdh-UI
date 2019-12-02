<template>
<div id="app">
  <div class="wrapper">
    <h1 class="title-h1">网格布局</h1>
    <div class="demo">
      <h2 class="title-h2">基础用法</h2>
      <x-row class="demoRow">
        <x-col span="8"> <div>8</div> </x-col>
        <x-col span="8"> <div>8</div> </x-col>
        <x-col span="8"> <div>8</div> </x-col>
      </x-row>
      <x-row class="demoRow">
        <x-col span="6"> <div>6</div> </x-col>
        <x-col span="6"> <div>6</div> </x-col>
        <x-col span="6"> <div>6</div> </x-col>
        <x-col span="6"> <div>6</div> </x-col>
      </x-row>
      <x-row class="demoRow">
        <x-col span="4"> <div>4</div> </x-col>
        <x-col span="4"> <div>4</div> </x-col>
        <x-col span="4"> <div>4</div> </x-col>
        <x-col span="4"> <div>4</div> </x-col>
        <x-col span="4"> <div>4</div> </x-col>
        <x-col span="4"> <div>4</div> </x-col>
      </x-row>
      <x-row class="demoRow">
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
        <x-col span="2"> <div>2</div> </x-col>
      </x-row>
      <pre><code>
      &lt;x-row class=&quot;demoRow&quot;&gt;
        &lt;x-col span=&quot;8&quot;&gt; &lt;div&gt;8&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;8&quot;&gt; &lt;div&gt;8&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;8&quot;&gt; &lt;div&gt;8&lt;/div&gt; &lt;/x-col&gt;
      &lt;/x-row&gt;
      &lt;x-row class=&quot;demoRow&quot;&gt;
        &lt;x-col span=&quot;6&quot;&gt; &lt;div&gt;6&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;6&quot;&gt; &lt;div&gt;6&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;6&quot;&gt; &lt;div&gt;6&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;6&quot;&gt; &lt;div&gt;6&lt;/div&gt; &lt;/x-col&gt;
      &lt;/x-row&gt;
      &lt;x-row class=&quot;demoRow&quot;&gt;
        &lt;x-col span=&quot;4&quot;&gt; &lt;div&gt;4&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;4&quot;&gt; &lt;div&gt;4&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;4&quot;&gt; &lt;div&gt;4&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;4&quot;&gt; &lt;div&gt;4&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;4&quot;&gt; &lt;div&gt;4&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;4&quot;&gt; &lt;div&gt;4&lt;/div&gt; &lt;/x-col&gt;
      &lt;/x-row&gt;
      &lt;x-row class=&quot;demoRow&quot;&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;2&quot;&gt; &lt;div&gt;2&lt;/div&gt; &lt;/x-col&gt;
      &lt;/x-row&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">分栏间隔</h2>
      <x-row class="demoRow" gutter="10">
        <x-col span="8"> <div>8</div> </x-col>
        <x-col span="8"> <div>8</div> </x-col>
        <x-col span="8"> <div>8</div> </x-col>
      </x-row>
      <pre><code>
      &lt;x-row class=&quot;demoRow&quot; gutter=&quot;10&quot;&gt;
        &lt;x-col span=&quot;8&quot;&gt; &lt;div&gt;8&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;8&quot;&gt; &lt;div&gt;8&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;8&quot;&gt; &lt;div&gt;8&lt;/div&gt; &lt;/x-col&gt;
      &lt;/x-row&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">分栏偏移</h2>
      <x-row class="demoRow" align="center">
        <x-col span="7"> <div>7</div> </x-col>
        <x-col span="7" offset="1"> <div>7</div> </x-col>
        <x-col span="7" offset="1"> <div>7</div> </x-col>
      </x-row>
      <pre><code>
      &lt;x-row class=&quot;demoRow&quot; align=&quot;center&quot;&gt;
        &lt;x-col span=&quot;7&quot;&gt; &lt;div&gt;7&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;7&quot; offset=&quot;1&quot;&gt; &lt;div&gt;7&lt;/div&gt; &lt;/x-col&gt;
        &lt;x-col span=&quot;7&quot; offset=&quot;1&quot;&gt; &lt;div&gt;7&lt;/div&gt; &lt;/x-col&gt;
      &lt;/x-row&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">响应式布局</h2>
      <x-row class="demoRow" align="center">
        <x-col
        :sm={span:24,offset:0}
        :md={span:10,offset:0}
        :lg={span:6,offset:0}>
          <div>内容</div>
        </x-col>
        <x-col
        :sm={span:24,offset:0}
        :md={span:10,offset:4}
        :lg={span:6,offset:3}>
          <div>内容</div>
        </x-col>
        <x-col
        :sm={span:24,offset:0}
        :md={span:10,offset:4}
        :lg={span:6,offset:3}>
          <div>内容</div>
        </x-col>
      </x-row>
      <pre><code>
      &lt;x-row class=&quot;demoRow&quot; align=&quot;center&quot;&gt;
        &lt;x-col
        :sm={span:24,offset:0}
        :md={span:10,offset:0}
        :lg={span:6,offset:0}&gt;
          &lt;div&gt;内容&lt;/div&gt;
        &lt;/x-col&gt;
        &lt;x-col
        :sm={span:24,offset:0}
        :md={span:10,offset:4}
        :lg={span:6,offset:3}&gt;
          &lt;div&gt;内容&lt;/div&gt;
        &lt;/x-col&gt;
        &lt;x-col
        :sm={span:24,offset:0}
        :md={span:10,offset:4}
        :lg={span:6,offset:3}&gt;
          &lt;div&gt;内容&lt;/div&gt;
        &lt;/x-col&gt;
      &lt;/x-row&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">Row Attributes</h2>
      <table class="demo-table">
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>gutter</td>
          <td>栅格间隙</td>
          <td>Number</td>
          <td>-</td>
          <td>0</td>
        </tr>
        <tr>
          <td>align</td>
          <td>栅格位置</td>
          <td>String</td>
          <td>left, center, right</td>
          <td>left</td>
        </tr>
      </table>
    </div>
    <div class="demo">
      <h2 class="title-h2">Col Attributes</h2>
      <table class="demo-table">
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>span</td>
          <td>24栅格占位</td>
          <td>Number</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>栅格位移</td>
          <td>Number</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>xs, sm, md, lg, xl</td>
          <td>栅格响应式</td>
          <td>Object</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'grid'
}
</script>
<style lang="less" scoped>
.demoRow>div>div{
  height: 30px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
