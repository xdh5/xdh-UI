import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Icon from './components/icon'
import './assets/icon.js'

Vue.component('x-btn', Button)
Vue.component('x-btn-group', ButtonGroup)
Vue.component('x-icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
