<template>
<div class="wrapper">
  <h1 class="title-h1">布局</h1>
  <div class="demo">
    <x-layout>
      <x-header class="header">header</x-header>
      <x-content class="content">content</x-content>
      <x-footer class="footer">footer</x-footer>
    </x-layout>
    <pre><code>
    &lt;x-layout&gt;
      &lt;x-header class=&quot;header&quot;&gt;header&lt;/x-header&gt;
      &lt;x-content class=&quot;content&quot;&gt;content&lt;/x-content&gt;
      &lt;x-footer class=&quot;footer&quot;&gt;footer&lt;/x-footer&gt;
    &lt;/x-layout&gt;
    </code></pre>
  </div>
  <div class="demo">
    <x-layout>
      <x-header class="header">header</x-header>
      <x-layout>
        <x-sider class="sider">sider</x-sider>
        <x-content class="content">content</x-content>
      </x-layout>
      <x-footer class="footer">footer</x-footer>
    </x-layout>
    <pre><code>
    &lt;x-layout&gt;
      &lt;x-header class=&quot;header&quot;&gt;header&lt;/x-header&gt;
      &lt;x-layout&gt;
        &lt;x-sider class=&quot;sider&quot;&gt;sider&lt;/x-sider&gt;
        &lt;x-content class=&quot;content&quot;&gt;content&lt;/x-content&gt;
      &lt;/x-layout&gt;
      &lt;x-footer class=&quot;footer&quot;&gt;footer&lt;/x-footer&gt;
    &lt;/x-layout&gt;
    </code></pre>
  </div>
  <div class="demo">
    <x-layout>
      <x-sider class="sider">sider</x-sider>
      <x-layout>
        <x-header class="header">header</x-header>
        <x-content class="content">content</x-content>
        <x-footer class="footer">footer</x-footer>
      </x-layout>
    </x-layout>
    <pre><code>
    &lt;x-layout&gt;
      &lt;x-header class=&quot;header&quot;&gt;header&lt;/x-header&gt;
      &lt;x-content class=&quot;content&quot;&gt;content&lt;/x-content&gt;
      &lt;x-footer class=&quot;footer&quot;&gt;footer&lt;/x-footer&gt;
    &lt;/x-layout&gt;
    </code></pre>
  </div>
</div>
</template>
<script>
export default {
  name: 'layout'
}
</script>
<style scoped lang="less">
.header, .footer, .content, .sider{
  display: flex;
  justify-content: center;
  align-items: center;
}
.header, .footer{
  background: #7dbcea;
  color: #fff;
  min-height: 50px;
}
.content{
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
}
.sider{
  background: #3ba0e9;
  color: #fff;
  min-width: 200px;
}
</style>
