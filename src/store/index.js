import Vue from 'vue'
import Vuex from 'vuex'

import productsModules from './productsModules';
import adminMemberModules from './adminMemberModules';
import cardModules from './cardModules';
import homeModules from './homeModules';
import orderModules from './orderModules';
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
  },
  mutations: {
    ISLOADING(state, status) {
      state.isLoading = status;
    },
  },
  actions: {
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  modules: {
    productsModules,
    adminMemberModules,
    cardModules,
    homeModules,
    orderModules

  }
})
