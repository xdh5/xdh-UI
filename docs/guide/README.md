---
title: 快速开始
---
### 安装
**npm 安装**

``` powershell
npm i xdh-ui -S
```
### 引入
**完整引入**

在 main.js 中写入以下内容：

``` js
import Vue from 'vue';
import xdhUI from 'xdh-ui';
import 'xdh-ui/lib/xdh-ui.css'
import App from './App.vue';

Vue.use(xdhUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
**按需引入**
```js
import Vue from 'vue';
import { Button } from 'xdh-ui';
import 'xdh-ui/lib/xdh-ui.css'
import App from './App.vue';

Vue.component(Button.name, Button);
/* 或写为
 * Vue.use(Button)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```