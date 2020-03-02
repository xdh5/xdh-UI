---
title: Grid
---
### 网格
**基础用法**


<ClientOnly>
  <grid-demo-1></grid-demo-1>
</ClientOnly>

``` html
<template>
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
</template>
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
```

**分栏间隔**


<ClientOnly>
  <grid-demo-2></grid-demo-2>
</ClientOnly>

``` html
<template>
  <x-row class="demoRow" gutter="10">
    <x-col span="8"> <div>8</div> </x-col>
    <x-col span="8"> <div>8</div> </x-col>
    <x-col span="8"> <div>8</div> </x-col>
  </x-row>
</template>
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
```

**分栏偏移**


<ClientOnly>
  <grid-demo-3></grid-demo-3>
</ClientOnly>

``` html js
<template>
  <x-row class="demoRow" align="center">
    <x-col span="7"> <div>7</div> </x-col>
    <x-col span="7" offset="1"> <div>7</div> </x-col>
    <x-col span="7" offset="1"> <div>7</div> </x-col>
  </x-row>
</template>
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
```
**响应式布局**


<ClientOnly>
  <grid-demo-4></grid-demo-4>
</ClientOnly>

``` html js
<template>
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
</template>
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
```
**Row Attributes**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>gutter</td> <td>栅格间隙</td> <td>number</td> <td>-</td> <td>0</td> </tr>
  <tr> <td>align</td> <td>栅格位置</td> <td>string</td> <td>left / center / right</td> <td>left</td> </tr>
</table>

**Col Events**
<table style="font-size:14px">
  <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
  <tr> <td>span</td> <td>24栅格占位</td> <td>number</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>offset</td> <td>栅格位移</td> <td>number</td> <td>-</td> <td>-</td> </tr>
  <tr> <td>xs, sm, md, lg, xl</td> <td>栅格响应式</td> <td>object</td> <td>-</td> <td>-</td> </tr>
</table>