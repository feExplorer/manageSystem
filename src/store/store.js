import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarState: true
  },
  modules: {
    permission
  },
  getters
})
