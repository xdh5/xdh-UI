---
title: Carousel
---
### 轮播
**基础用法**


<ClientOnly>
  <carousel-demo-1></carousel-demo-1>
</ClientOnly>

``` html
<template>
  <x-carousel>
    <x-carousel-item name="a">
      <div class="demo">1</div>
    </x-carousel-item>
    <x-carousel-item name="b">
      <div class="demo">2</div>
    </x-carousel-item>
    <x-carousel-item name="c">
      <div class="demo">3</div>
    </x-carousel-item>
  </x-carousel>
</template>
<style>
.demo{
  width: 100%;
  height: 200px;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

**Cascader Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>autoPlay</td> <td>自动播放</td> <td>boolean</td> <td>-</td> <td>true</td> </tr>
  <tr> <td>autoPlayDelay</td> <td>自动播放间隔时间</td> <td>number</td> <td>-</td> <td>3000</td> </tr>
</table>

**Carousel-Item Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>name</td> <td>幻灯片的名字</td> <td>string</td> <td>-</td> <td>-</td> </tr>
</table>