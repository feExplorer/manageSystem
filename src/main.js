import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

import ElementUI from 'element-ui'
// 定义主题
import '../theme/index.scss';
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

// 引入自定义验证规则
import Validate from '@/utils/filterRules'

import inputDirective from '@/directive/el-input'; // 添加此行=>自定义全局指令

// 引入v-charts
import VCharts from 'v-charts'

// 引入 iconfont
import './assets/iconfont/iconfont.css'
Vue.use(ElementUI, {
  locale
})
Vue.use(Validate)
Vue.use(inputDirective)
Vue.use(VCharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
