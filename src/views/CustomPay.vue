<template>
  <div class="bg-white">
    <loading :active.sync="isLoading" />
    <div class="py-5 container CustomPay">
      <h1 class="text-center mb-4 text-secondary">
        訂單付款
      </h1>
      <div class="row mb-5">
        <div class="col-sm-4">
          <div
            class="alert alert-success rounded-pill text-center"
            role="alert"
          >
            1.填寫訂單
            <font-awesome-icon
              icon="check"
              class="ml-2"
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div
            class="alert alert-success rounded-pill text-center"
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
      <div class="CustomPay-message mb-5">
        <h2 class="mb-0 py-2 pl-3 h4 border bg-first">
          訂單訊息
        </h2>
        <div class="subscriber px-0">
          <div class="py-2 px-3 CustomPay-list border">
            <span class="mr-3 data">姓名:</span>
            <span>{{ order.user.name }}</span>
          </div>
          <div class="py-2 px-3 CustomPay-list border">
            <span class="mr-3 data">Email:</span>
            <span>{{ order.user.email }}</span>
          </div>
          <div class="py-2 px-3 CustomPay-list border">
            <span class="mr-3 data">手機號碼:</span>
            <span>{{ order.user.tel }}</span>
          </div>
          <div class="py-2 px-3 CustomPay-list border">
            <span class="mr-3 data">地址:</span>
            <span>{{ order.user.address }}</span>
          </div>
          <div class="py-2 px-3 CustomPay-list border">
            <span class="mr-3 data">留言備註:</span>
            <span>{{ order.message }}</span>
          </div>
        </div>
      </div>

      <div class="CustomPay-data mb-5 border">
        <h2 class="mb-0 py-2 pl-3 h4 bg-first">
          訂單資料
        </h2>
        <div class="subscriber">
          <div class="py-2 px-3 CustomPay-list border">
            <span class="mr-3 data">訂單成立時間:</span>
            <span>{{ order.create_at | timecurrency }}</span>
          </div>
          <div class="py-2 px-3 CustomPay-list border">
            <span class="mr-3 data">訂單編號:</span>
            <span>{{ orderId }}</span>
          </div>
          <div class="py-2 px-3 CustomPay-list border">
            <span class="mr-3 data">總金額:</span>
            <span class="total">{{ order.total | currency }}</span>
          </div>
        </div>
      </div>

      <div class="CustomPay-pay border mb-3">
        <h2 class="mb-0 py-2 pl-3 h4 border bg-dark text-white">
          信用卡資訊
        </h2>
        <div class="creditcard px-3 pt-3">
          <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="payOrder">
              <div class="py-2 CustomPay-card d-flex align-items-center">
                <label for="card-num">信用卡卡號:</label>
                <ValidationProvider
                  v-slot="{ errors , classes }"
                  name="信用卡ID"
                  rules="required|cardnum"
                >
                  <div :class="classes">
                    <input
                      id="card-num"
                      v-model="pay.id"
                      type="text"
                      class="form-lists"
                      name="card-num"
                      placeholder="請輸入16位信用卡卡號"
                    >
                    <span class="ml-md-2">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>
              <div class="py-2 CustomPay-card d-flex align-items-center">
                <label for="card-date">有效期限:</label>
                <ValidationProvider
                  v-slot="{ errors , classes }"
                  name="有效期限"
                  rules="required|carddate"
                >
                  <div :class="classes">
                    <input
                      id="card-date"
                      v-model="pay.date"
                      type="text"
                      class="form-lists"
                      name="card-date"
                      placeholder="例: 0320"
                    >
                    <span class="ml-md-2">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>
              <div class="py-2 form-group CustomPay-card d-flex align-items-center">
                <label for="card-pay">背面安全碼:</label>
                <ValidationProvider
                  v-slot="{ errors , classes }"
                  name="背面安全碼"
                  rules="required|pay"
                >
                  <div :class="classes">
                    <input
                      id="card-pay"
                      v-model="pay.num"
                      type="text"
                      class="form-lists"
                      name="card-pay"
                      placeholder="例: 540"
                    >
                    <span class="ml-md-2">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>
              <div class="text-right py-2 my-3">
                <button
                  type="submit"
                  class="btn btn-dark text-warning"
                  :disabled="invalid"
                >
                  確認付款
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
    <check />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { ValidationObserver } from "vee-validate";
import $ from "jquery";
import check from "../components/CheckModal";
export default {
  name: "CustomPay",
  components: {
    ValidationObserver,
    check,
  },
  data() {
    return {
      orderId: "",
      leave: false,
      pay: {
        id: "",
        date: "",
        num: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isLoading"]),
    ...mapGetters("ordermodules", ["order"]),
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.$store.dispatch("ordermodules/getOrder", this.orderId);
  },
  methods: {
    payOrder() {
      const vm = this;
      vm.$store.dispatch("ordermodules/payOrder", this.orderId).then(() => {
        vm.leave = true;
      });
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