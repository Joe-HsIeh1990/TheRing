import axios from 'axios';

export default {
  strict: true,
  namespaced: true,
  state: {
    cart: {},
  },
  actions: {
    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/cart`;
      context.commit('ISLOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('ISLOADING', false, { root: true });
        if (response.data.success) {
          context.commit('CART', response.data.data);
        }
      });
    },
    addCouponCode(context, couponcode) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/coupon`;
      const coupon = {
        code: couponcode,
      };
      context.commit('ISLOADING', true, { root: true });
      return new Promise((resolve) => {
        axios.post(api, { data: coupon }).then((response) => {
          context.commit('ISLOADING', false, { root: true });
          if (response.data.success) {
            context.dispatch('getCart');
            resolve();
          }
        });
      });
    },
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    },
  },
  getters: {
    cart: state => state.cart,
    cartlength: state => state.cartlength,
    cartItem: state => state.cartItem,
  },
};