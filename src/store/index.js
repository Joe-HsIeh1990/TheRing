import Vue from 'vue'
import Vuex from 'vuex'

import productsmodules from './productsmodules';
import adminmembermodules from './adminmembermodules';
import cardmodules from './cardmodules';
import homemodules from './homemodules';
import ordermodules from './ordermodules';
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
    productsmodules,
    adminmembermodules,
    cardmodules,
    homemodules,
    ordermodules

  }
})
