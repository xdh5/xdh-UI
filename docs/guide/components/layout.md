---
title: Layout
---
### 布局

<ClientOnly>
  <layout-demo-1></layout-demo-1>
</ClientOnly>

``` html
<template>
  <x-layout>
    <x-header class="header">header</x-header>
    <x-content class="content">content</x-content>
    <x-footer class="footer">footer</x-footer>
  </x-layout>
</template>
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
```

<ClientOnly>
  <layout-demo-2></layout-demo-2>
</ClientOnly>

``` html
<template>
  <x-layout>
    <x-header class="header">header</x-header>
    <x-layout>
      <x-sider class="sider">sider</x-sider>
      <x-content class="content">content</x-content>
    </x-layout>
    <x-footer class="footer">footer</x-footer>
  </x-layout>
</template>
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
```

<ClientOnly>
  <layout-demo-3></layout-demo-3>
</ClientOnly>

``` html js
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
```