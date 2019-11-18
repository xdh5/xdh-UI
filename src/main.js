import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from './components/x-button'
import ButtonGroup from './components/x-button-group'
import Icon from './components/x-icon'
import Input from './components/x-input'

Vue.component('x-btn', Button)
Vue.component('x-btn-group', ButtonGroup)
Vue.component('x-icon', Icon)
Vue.component('x-input', Input)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
