/* eslint-disable*/
import Toast from '@/components/toast'

let currentToast

export default {
  install (Vue, options) {
    Vue.prototype.$message = function (message, toastOptions) {
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
      })
    }
  }
}
























/* helpers */
function createToast ({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}