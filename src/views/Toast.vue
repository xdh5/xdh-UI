<template>
<div id="app">
  <div class="wrapper">
    <h1 class="title-h1">Toast 消息提示</h1>
    <div class="demo">
      <h2 class="title-h2">基础用法</h2>
      <x-btn @click="open1">打开后消失</x-btn>
      <pre><code>
      &lt;templete&gt;
        &lt;x-btn @click=&quot;open1&quot;&gt;打开后消失&lt;/x-btn&gt;
      &lt;/templete&gt;
      &lt;script&gt;
        export default {
          methods: {
            open1 () {
              this.$message(&#x27;这是一条消息提示&#x27;)
            }
          }
        }
      &lt;/script&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">取消自动关闭</h2>
      <x-btn @click="open2">手动关闭</x-btn>
      <pre><code>
      &lt;templete&gt;
        &lt;x-btn @click=&quot;open1&quot;&gt;手动关闭&lt;/x-btn&gt;
      &lt;/templete&gt;
      &lt;script&gt;
        export default {
          methods: {
            open2 () {
              this.$message({
                msg: &#x27;这是一条消息提示&#x27;,
                autoClose: 0
              })
            }
          }
        }
      &lt;/script&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">自定义关闭按钮</h2>
      <x-btn @click="open3">自定义关闭按钮</x-btn>
      <pre><code>
      &lt;templete&gt;
        &lt;x-btn @click=&quot;open1&quot;&gt;自定义关闭按钮&lt;/x-btn&gt;
      &lt;/templete&gt;
      &lt;script&gt;
        export default {
          methods: {
            open3 () {
              this.$message({
                msg: &#x27;这是一条消息提示&#x27;,
                closeButton: {
                  text: &#x27;好的&#x27;,
                  callback: function () {
                    console.log(&#x27;关闭toast后的回调函数&#x27;)
                  }
                }
              })
            }
          }
        }
      &lt;/script&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">使用 HTML 片段</h2>
      <x-btn @click="open4">使用 HTML 片段</x-btn>
      <pre><code>
      &lt;templete&gt;
        &lt;x-btn @click=&quot;open1&quot;&gt;使用 HTML 片段&lt;/x-btn&gt;
      &lt;/templete&gt;
      &lt;script&gt;
      export default {
        methods: {
          open4 () {
            this.$message({
              msg: &#x27;&lt;em&gt;这是一条 HTML 片段&lt;/em&gt;&#x27;,
              enableHtml: true
            })
          }
        }
      }
      &lt;/script&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">自定义位置</h2>
      <x-btn @click="open5">自定义位置</x-btn>
      <pre><code>
      &lt;templete&gt;
        &lt;x-btn @click=&quot;open5&quot;&gt;自定义位置&lt;/x-btn&gt;
      &lt;/templete&gt;
      &lt;script&gt;
        export default {
          methods: {
            open5 () {
              this.$message({
                msg: &#x27;位置在中间&#x27;,
                position: &#x27;middle&#x27;
              })
            }
          }
        }
      &lt;/script&gt;
      </code></pre>
    </div>
    <div class="demo">
      <h2 class="title-h2">Toast Attributes</h2>
      <table class="demo-table">
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>msg</td>
          <td>提示文字</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>autoClose</td>
          <td>自动关闭时间（0为不自动关闭）</td>
          <td>Number</td>
          <td>-</td>
          <td>3</td>
        </tr>
        <tr>
          <td>closeButton</td>
          <td>自定义关闭按钮，text为按钮文字，callback为关闭后回调函数</td>
          <td>Object</td>
          <td>-</td>
          <td>text: '关闭', callback: undefined</td>
        </tr>
        <tr>
          <td>enableHtml</td>
          <td>是否允许出现HTML片段</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>position</td>
          <td>提示消息出现位置</td>
          <td>String</td>
          <td>top, bottom, middle</td>
          <td>top</td>
        </tr>
      </table>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'input',
  methods: {
    open1 () {
      this.$message('这是一条消息提示')
    },
    open2 () {
      this.$message({
        msg: '这是一条消息提示',
        autoClose: 0
      })
    },
    open3 () {
      this.$message({
        msg: '这是一条消息提示',
        closeButton: {
          text: '好的',
          callback: function () {
            console.log('关闭toast后的回调函数')
          }
        }
      })
    },
    open4 () {
      this.$message({
        msg: '<em>这是一条 HTML 片段</em>',
        enableHtml: true
      })
    },
    open5 () {
      this.$message({
        msg: '位置在中间',
        position: 'middle'
      })
    }
  }
}
</script>
