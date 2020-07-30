<template>
  <nav class="nav py-md-0 px-0">
    <Alert />
    <div
      class="nav-container d-flex px-0 flex-wrap justify-content-between align-content-center p-2"
    >
      <div class="nav-logo d-flex align-items-center">
        <router-link
          to="/"
          class="text-decoration-none"
        >
          <h2 class="text-white">
            AsStore
          </h2>
        </router-link>
      </div>
      <div class="d-flex">
        <div class="nav-cart pt-3 pr-3">
          <div class="cart">
            <button
              type="button"
              class="dropdown-toggle cart-check"
              :data-toggle="cartline"
              @click="cartdrop"
            >
              <font-awesome-icon
                icon="cart-plus"
                size="lg"
              />
              <span
                v-if="currentCart.length > 0"
                class="cart-num text-center text-white"
              >{{ currentCart.length }}</span>
            </button>
            <div class="dropdown-menu p-2">
              <h6 class="p-2">
                已加入購物車
              </h6>
              <table class="table mb-2">
                <tbody>
                  <tr
                    v-for="(item ,index ) in currentCart"
                    :key="index"
                  >
                    <td class="px-2">
                      <img
                        :src="item.product.imageUrl"
                        width="30"
                      >
                    </td>
                    <td class="ellipsis px-2 align-middle">
                      {{ item.product.title }}
                    </td>
                    <td class="text-nowrap px-2 align-middle">
                      {{ item.qty }} 隻
                    </td>
                    <td
                      class="text-right text-nowrap px-2 align-middle mincart-total"
                    >
                      {{ item.product.price * item.qty | currency }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <a
                href="#"
                class="GoCustomerCart btn btn-danger btn-block"
                @click.prevent="GoCustomerCart"
              >前往購物車</a>
            </div>
          </div>
        </div>
        <div
          class="hamburger"
          :class="{ 'hamburger-x' : ham }"
          @click="hamburger"
        >
          <span />
        </div>
      </div>
      <ul class="nav-content list-unstyled d-md-flex mb-0 align-items-center">
        <router-link
          to="/"
          class="text-decoration-none"
        >
          <li class="nav-list mr-0 mr-md-5 py-3 py-md-0 pl-3 pl-md-0">
            首頁
          </li>
        </router-link>
        <li
          class="nav-list mr-md-5 mr-0 py-3 py-md-0 pl-3 pl-md-0 text-white"
          @click.prevent="GoProduct"
        >
          商品
        </li>
        <router-link
          to="/custom/login"
          class="text-decoration-none"
        >
          <li class="nav-list mr-md-5 mr-0 py-3 py-md-0 pl-3 pl-md-0">
            <font-awesome-icon
              icon="user-cog"
              size="lg"
            />
          </li>
        </router-link>
        <li class="nav-list-cart">
          <div class="cart">
            <button
              type="button"
              class="dropdown-toggle cart-check"
              :data-toggle="cartline"
              @click="cartdrop"
            >
              <font-awesome-icon
                icon="cart-plus"
                size="lg"
              />
              <span
                v-if="currentCart.length > 0"
                class="cart-num text-center text-white"
              >{{ currentCart.length }}</span>
            </button>
            <div class="dropdown-menu p-2">
              <h6 class="p-2">
                已加入購物車
              </h6>
              <table class="table mb-2">
                <tbody>
                  <tr
                    v-for="(item ,num) in currentCart"
                    :key="num"
                  >
                    <td class="px-2">
                      <img
                        :src="item.product.imageUrl"
                        width="30"
                      >
                    </td>
                    <td class="ellipsis px-2 align-middle">
                      {{ item.product.title }}
                    </td>
                    <td class="text-nowrap px-2 align-middle">
                      {{ item.qty }} 隻
                    </td>
                    <td
                      class="text-right text-nowrap px-2 align-middle mincart-total"
                    >
                      {{ item.product.price * item.qty | currency }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <a
                href="#"
                class="GoCustomerCart btn btn-danger btn-block"
                @click.prevent="GoCustomerCart"
              >前往購物車</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import Alert from "../components/AlertMessage";
import $ from "jquery";
export default {
  name: "Navbar",
  components: {
    Alert,
  },
  data() {
    return {
      ham: false,
      cartline: "dropdown",
      time: 4,
      currentCart: [],
    };
  },
  computed: {
    totalNum() {
      return this.currentCart.reduce(
        (total, item) => total + item.product.price * item.qty,
        0
      );
    },
  },
  mounted() {
    let winwidth = window.innerWidth;
    if (winwidth >= 767) {
      $(".hamburger").hide();
      $(".nav-cart").hide();
      $(".nav-list-cart").show();
    } else {
      $(".nav-list-cart").hide();
      $(".nav-content").hide();
    }
  },
  created() {
    this.cartChange();
  },
  methods: {
    getCarts() {
      this.currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    },
    addtoCart(addItem, qty = 1) {
      let cartItem = {
        product: addItem,
        qty,
      };
      let sameItem = this.currentCart.findIndex(
        (item) => item.product.id === addItem.id
      );
      sameItem === -1
        ? this.currentCart.push(cartItem)
        : (this.currentCart[sameItem].qty += qty);
      sessionStorage.setItem("cart", JSON.stringify(this.currentCart));
    },
    cartChange() {
      const vm = this;
      vm.$bus.$on("addCart", (product, qty = 1) => {
        vm.addtoCart(product, qty);
      });
      vm.$bus.$on("changeCart", () => {
        vm.getCarts();
      });
    },
    cartdrop() {
      const vm = this;
      if (vm.currentCart.length === 0) {
        vm.cartline = "none";
        if (vm.$router.currentRoute.path === "/custom/products") {
          vm.$bus.$emit(
            "message:push",
            "您已經在產品頁面，請添加商品內容",
            "danger"
          );
        } else {
          vm.$bus.$emit(
            "message:push",
            `請添加購物車內容，4秒後將將協助您進入產品頁面`,
            "danger"
          );
          setTimeout(() => {
            vm.$router.push("/custom/products");
          }, 4000);
        }
      } else {
        vm.cartline = "dropdown";
      }
    },
    hamburger() {
      let vm = this;
      if (vm.ham === false) {
        $(".nav-content").slideDown("slow");
        vm.ham = true;
      } else {
        vm.ham = false;
        $(".nav-content").slideUp("slow");
      }
    },
    GoProduct() {
      this.$router.push("/custom/products");
    },
    GoCustomerCart() {
      this.$router.push("/custom/customcart");
    },
  },
};
</script>
<style lang="scss" scoped>
.cart {
  position: relative;
  height: auto;
  &-check {
    border: none;
    background: transparent;
    color: #ffff;
    height: 100%;
    padding: 0 0.5rem;
    transition: all 1s;
    &:active,
    &:focus {
      outline: 0;
    }
  }
  &-num {
    background: #ff0000;
    position: absolute;
    left: 20px;
    top: -10px;
    letter-spacing: 0;
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 16px;
    padding: 1px;
    border-radius: 50%;
    font-size: 12px;
    cursor: pointer;
  }
}
.dropdown-menu {
  left: -200% !important;

  width: 320px;
  @media (max-width: 992px) {
    left: -180% !important;
  }
  @media (max-width: 768px) {
    left: -170% !important;
  }
}
</style>

