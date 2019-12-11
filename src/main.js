import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from '@/components/button/button'
import ButtonGroup from '@/components/button/button-group'
import Icon from '@/components/icon'
import Input from '@/components/input'
import Row from '@/components/grid/row'
import Col from '@/components/grid/col'
import Layout from '@/components/layout/layout'
import Header from '@/components/layout/header'
import Sider from '@/components/layout/sider'
import Content from '@/components/layout/content'
import Footer from '@/components/layout/footer'
import Tab from '@/components/tab/tab'
import TabPane from '@/components/tab/tab-pane'
import TabItem from '@/components/tab/tab-item'

import Plugin from '@/plugin'

Vue.component('x-btn', Button)
Vue.component('x-btn-group', ButtonGroup)
Vue.component('x-icon', Icon)
Vue.component('x-input', Input)
Vue.component('x-row', Row)
Vue.component('x-col', Col)
Vue.component('x-layout', Layout)
Vue.component('x-header', Header)
Vue.component('x-sider', Sider)
Vue.component('x-content', Content)
Vue.component('x-footer', Footer)
Vue.component('x-tab', Tab)
Vue.component('x-tab-pane', TabPane)
Vue.component('x-tab-item', TabItem)
Vue.use(Plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
