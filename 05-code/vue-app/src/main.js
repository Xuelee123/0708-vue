// 引入Vue
import Vue from 'vue'
// 引入组件
import App from './App.vue'
import store from './store'
// 设置是否显示提示信息
Vue.config.productionTip = false
// 实例化对象
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store  // 注册仓库
})
