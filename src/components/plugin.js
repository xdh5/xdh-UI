/* eslint-disable*/
import Toast from './toast'

let currentToast

export default {
  install (Vue, options) {
    Vue.prototype.$message = function (propsData) {

      let Constructor = Vue.extend(Toast)
      if (typeof (propsData) === 'string') {
        propsData = {
          msg: propsData
        }
      }
      let toast = new Constructor({ propsData })

      if (currentToast) {
        currentToast.$destroy()
        currentToast.$el.remove()
      }

      currentToast = toast
      toast.$mount()

      document.body.appendChild(toast.$el)
      return toast
    }
  }
}