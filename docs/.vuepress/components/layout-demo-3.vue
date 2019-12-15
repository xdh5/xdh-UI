<template>
  <x-layout>
    <x-sider class="sider">sider</x-sider>
    <x-layout>
      <x-header class="header">header</x-header>
      <x-content class="content">content</x-content>
      <x-footer class="footer">footer</x-footer>
    </x-layout>
  </x-layout>
</template>
<script>
import Layout from '../../../src/components/layout/layout'
import Header from '../../../src/components/layout/header'
import Sider from '../../../src/components/layout/sider'
import Content from '../../../src/components/layout/content'
import Footer from '../../../src/components/layout/footer'

export default {
  name: 'layout-demo-3',
  components:{
    'x-layout': Layout,
    'x-header': Header,
    'x-sider': Sider,
    'x-content': Content,
    'x-footer': Footer
  }
}
</script>
<style lang="less" scoped>
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
