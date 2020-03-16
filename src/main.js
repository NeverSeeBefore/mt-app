// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 自定义指令  指令名  配置
Vue.directive('document-click', {
  // 绑定是调用 el binding vNode
  // 当前绑定的DOM元素 ，vue对象， 虚拟节点
  bind: function (el, binding, vNode) {
    // console.log('bind', el, binding, vNode)
    document.addEventListener('click', binding.value, false)
  },
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vNode) {
    // console.log('inserted')
  },
  // update：所在组件的 VNode 更新时调用
  update: function (el, binding, vNode) {
    // console.log('update')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
