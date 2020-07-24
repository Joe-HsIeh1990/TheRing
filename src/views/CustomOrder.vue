<template>
  <div class="bg-white">
    <loading :active.sync="isLoading" />
    <div class="pt-5 container CustomerOrder">
      <h1 class="text-center mb-4 CustomerOrder-title text-secondary">
        建立訂單
      </h1>
      <div class="row mb-5">
        <div class="col-sm-4">
          <div
            class="alert alert-success rounded-pill text-center"
            role="alert"
          >
            1.填寫訂單
          </div>
        </div>
        <div class="col-sm-4">
          <div
            class="alert bg-five rounded-pill text-center"
            role="alert"
          >
            2.確認付款
          </div>
        </div>
        <div class="col-sm-4">
          <div
            class="alert bg-five rounded-pill text-center"
            role="alert"
          >
            3.訂單完成
          </div>
        </div>
      </div>
      <div
        v-if="cart.total"
        class="row flex-row-reverse"
      >
        <div class="col-lg-5 mb-5">
          <div class="customerCart-order">
            <div class="p-3">
              <h2 class="h5">
                訂單確認
              </h2>
              <hr class="my-2">
              <div>
                <div
                  v-for="items in cart.carts"
                  :key="items.id"
                  class="d-flex customerCart-order-item align-items-start mb-3"
                >
                  <div class="d-flex flex-column mt-1">
                    <h5 class="mb-0">
                      {{ items.product.title }}
                    </h5>
                    <span>{{ items.qty }} 隻</span>
                  </div>
                  <span class="ml-auto order-item-price">{{ items.total | currency }}</span>
                </div>
                <div
                  v-if="cart.final_total&&cart.final_total !==cart.total"
                  class="d-flex customerCart-order-item align-items-start text-success"
                >
                  <div class="d-flex flex-column">
                    <h5 class="mb-0">
                      已使用優惠
                    </h5>
                    <span>{{ (cart.final_total/cart.total*100) }}% 折扣</span>
                  </div>
                  <span
                    class="ml-auto order-item-price"
                  >-{{ (cart.total -cart.final_total) | currency }}</span>
                </div>
                <hr class="my-2">
              </div>
            </div>
            <div class="px-3 pb-3 customerCart-order-Nextstep">
              <div class="d-flex justify-content-end align-items-end">
                <span class="subtotal mr-2">總計</span>
                <span class="total h3 mb-0 text-danger">{{ cart.final_total | currency }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 mb-5">
          <div>
            <h4 class="mb-4 d-flex">
              <span class="plane mr-1" />訂購人資料
            </h4>
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="createOrder">
                <div class="form-group">
                  <label for="username">收件人姓名</label>
                  <ValidationProvider
                    v-slot="{ errors , classes }"
                    name="姓名"
                    rules="required|name:2"
                  >
                    <div :class="classes">
                      <input
                        id="username"
                        v-model="form.user.name"
                        type="text"
                        class="form-control"
                        name="姓名"
                        placeholder="輸入姓名 必填!!"
                      >
                      <span class="text-danger">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="useremail">Email</label>
                  <ValidationProvider
                    v-slot="{ errors, classes }"
                    name="Email"
                    rules="required|email"
                  >
                    <div :class="classes">
                      <input
                        id="useremail"
                        v-model="form.user.email"
                        type="Email"
                        class="form-control"
                        name="Email"
                        placeholder="請輸入 Email 必填!!"
                      >
                      <span class="text-danger">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="usertel">收件人電話</label>
                  <ValidationProvider
                    v-slot="{ errors , classes }"
                    name="手機號碼"
                    rules="required|phone"
                  >
                    <div :class=" classes">
                      <input
                        id="usertel"
                        v-model="form.user.tel"
                        type="手機號碼"
                        class="form-control"
                        name="tel"
                        placeholder="請輸入電話 必填!!"
                      >
                      <span class="text-danger">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="useraddress">收件人地址</label>
                  <ValidationProvider
                    v-slot="{ errors , classes }"
                    name="地址"
                    rules="required|addres:6"
                  >
                    <div :class="classes">
                      <input
                        id="useraddress"
                        v-model="form.user.address"
                        type="text"
                        class="form-control"
                        name="地址"
                        placeholder="請輸入地址 必填!!"
                      >
                      <span class="text-danger">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="comment">留言</label>
                  <textarea
                    id="comment"
                    v-model="form.message"
                    class="form-control"
                    cols="30"
                    rows="10"
                  />
                </div>
                <div class="form-row align-content-center">
                  <div class="form-group col-md-6">
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click="backToCart"
                    >
                      上一步
                    </button>
                  </div>
                  <div class="form-group col-md-6">
                    <button
                      type="submit"
                      class="btn btn-dark text-warning"
                      :disabled="invalid"
                    >
                      確認送出
                    </button>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
    <check />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import $ from "jquery";
import { ValidationObserver } from "vee-validate";
import check from "../components/CheckModal";
export default {
  name: "CustomOrder",
  components: {
    ValidationObserver,
    check,
  },
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
          identity: "",
          passport: "",
        },
        message: "",
      },
      leave: false,
    };
  },
  computed: {
    ...mapGetters(["isLoading"]),
    ...mapGetters("cardModules", ["cart"]),
  },
  created() {
    this.$store.dispatch("cardModules/getCart");
  },
  methods: {
    createOrder() {
      const vm = this;
      const order = vm.form;
      vm.$store.dispatch("orderModules/createOrder", order).then(() => {
        vm.leave = true;
      });
    },
    backToCart() {
      this.$router.go(-1);
    },
  },

  beforeRouteLeave(to, from, next) {
    const vm = this;
    if (vm.leave) {
      next();
    } else {
      $("#check").modal("show");
      $(".determin").on("click", () => {
        next();
      });
      $(".cancel").on("click", () => {
        next(false);
      });
    }
  },
};
</script>
