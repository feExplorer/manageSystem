import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

import ElementUI from 'element-ui'
// 引入国际化
import i18n from './lang'
// 定义主题
import '../theme/index.scss';

// 引入自定义验证规则
import Validate from '@/utils/filterRules'

import inputDirective from '@/directive/el-input'; // 添加此行=>自定义全局指令

// 引入v-charts
import VCharts from 'v-charts'
// 引入右键菜单
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'

// 引入 iconfont
import './assets/iconfont/iconfont.css'

// 引入 mock
import './mock' // simulation data

// 挂载 全局filter
import * as filters from './filters' // global filters

// 引入自己的组件
import hl from './components/index'
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(Validate)
Vue.use(inputDirective)
Vue.use(VCharts)
Vue.use(contentmenu)
Vue.use(hl)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
