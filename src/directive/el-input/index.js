import onlyNumber from './onlyNumber'
import onlyNumberToFloat from './onlyNumberToFloat'
const install = Vue => {
  // 只能输入数字，并且会自动四舍五入
  Vue.directive('onlyNumberToFloat', onlyNumberToFloat)
  Vue.directive('onlyNumber', onlyNumber)
}
/*
  Vue.use( plugin )
  安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。
  如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
  该方法需要在调用 new Vue() 之前被调用。
  当 install 方法被同一个插件多次调用，插件将只会被安装一次。
*/

if (window.Vue) {
  window['onlyNumber'] = onlyNumber
  window['onlyNumberToFloat'] = onlyNumberToFloat
  Vue.use(install); // eslint-disable-line
}

export default install
// 使用示例
// v-only-number-to-float="{max:100,min:0,precision:2}"
