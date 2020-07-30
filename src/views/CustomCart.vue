<template>
  <div class="bg-white">
    <loading :active.sync="isLoading" />
    <div class="pt-5 container customerCart mb-2">
      <h1
        v-if="currentCart.length !== 0"
        class="text-center customerCart-title mb-5 text-secondary"
      >
        購物車
      </h1>
      <h5
        v-if="currentCart.length === 0"
        class="text-center py-5 mt-3 mb-5 nonecart"
      >
        目前您的購物車沒有任何商品!
      </h5>
      <hr v-if="currentCart.length === 0">
      <h3
        v-if="currentCart.length === 0"
        class="cart-recommend text-center mb-4 pl-2 font-weight-bold"
      >
        經典商品
      </h3>
      <div v-if="currentCart.length === 0">
        <CardCarousel :filterscard="filterscarousel" />
      </div>
      <div
        v-if="currentCart.length !== 0"
        class="row"
      >
        <div class="col-12">
          <table class="table table-borderless">
            <thead class="bg-primary">
              <th />
              <th>品名</th>
              <th>數量</th>
              <th class="text-right">
                價格
              </th>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in currentCart"
                :key="index"
              >
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="deleteCart(index)"
                  >
                    <i class="far fa-trash-alt" />
                  </button>
                </td>
                <td class="align-middle">
                  {{ item.product.title }}
                </td>
                <td
                  class="tableQty align-middle"
                  width="150px"
                >
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-dark"
                        :disabled="item.qty <= 1"
                        type="btton"
                        @click="item.qty--"
                      >
                        <font-awesome-icon
                          icon="minus"
                          class="text-warning"
                        />
                      </button>
                    </div>
                    <input
                      v-model.number="item.qty"
                      type="number"
                      class="form-control"
                      min="0"
                    >
                    <div class="input-group-append">
                      <button
                        class="btn btn-dark"
                        type="button"
                        @click="item.qty++"
                      >
                        <font-awesome-icon
                          icon="plus"
                          class="text-warning"
                        />
                      </button>
                    </div>
                  </div>
                </td>
                <td class="align-middle text-right">
                  {{ (item.product.price * item.qty) | currency }}
                </td>
              </tr>
            </tbody>
            <tfoot class="border-top">
              <tr>
                <td
                  colspan="3"
                  class="text-right"
                >
                  總計
                </td>
                <td class="text-right">
                  {{ totalPrice | currency }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <button
          href="#"
          class="btn btn-dark text-warning mx-auto"
          @click="updateCart"
        >
          下一步
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CardCarousel from "../components/CardCarousel";
export default {
  name: "CustomerCart",
  components: {
    CardCarousel,
  },
  data() {
    return {
      cartdisable: "",
      coupon_num: "",
      currentCart: [],
    };
  },
  computed: {
    filterscarousel() {
      let vm = this;
      let newarr = [];
      newarr = vm.carouselproducts.filter(
        (item) => item.unit.indexOf("hero") != -1
      );
      return newarr;
    },
    totalPrice() {
      sessionStorage.setItem("cart", JSON.stringify(this.currentCart));
      this.$bus.$emit("changCart");
      return this.currentCart.reduce(
        (total, item) => total + item.product.price * item.qty,
        0
      );
    },
    ...mapGetters("homeModules", ["carouselproducts"]),
    ...mapGetters(["isLoading"]),
    ...mapGetters("cardModules", ["cart"]),
  },
  created() {
    this.getCarts();
  },
  methods: {
    getCarts() {
      this.currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    },
    deleteCart(id) {
      this.currentCart.splice(id, 1);
      sessionStorage.setItem("cart", JSON.stringify(this.currentCart));
      this.$bus.$emit("changeCart");
    },
    updateCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/cart`;
      vm.$store.commit('ISLOADING', true);
      vm.$http
        .all(
          vm.currentCart.map((item) => {
            const cartItem = {
              product_id: item.product.id,
              qty: item.qty,
            };
            return vm.$http.post(api, { data: cartItem });
          })
        )
        .then(() => {
          vm.$store.commit('ISLOADING', false);
          vm.$router.push("/custom/customorder");
        });
    },
    ...mapActions("homeModules", ["CarouselProducts"]),
  },
};
</script>