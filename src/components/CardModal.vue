<template>
  <div
    id="productModal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5
            id="exampleModalLabel"
            class="modal-title"
          >
            {{ theProduct.title }}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img
            :src="theProduct.imageUrl"
            class="img-fluid"
            alt
          >
          <div class="mt-3">
            <p class="modal-description text-secondary">
              {{ theProduct.description }}
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-baseline modal-price">
            <del class="h6 text-secondary">原價 {{ theProduct.origin_price | currency }}</del>
            <div class="h4 text-danger">
              現在購買
              <strong>{{ theProduct.price | currency }}</strong>
            </div>
          </div>
          <select
            v-model="counts"
            name="count"
            class="form-control mt-3"
          >
            <option
              v-for="num in 10"
              :key="num"
              :value="num"
            >
              總共 {{ num }} 隻
            </option>
          </select>
        </div>
        <div class="modal-footer">
          <div class="text-nowrap mr-4 modal-total">
            小計
            <strong>{{ counts * theProduct.price | currency }}</strong>
          </div>
          <a
            href="#"
            class="btn btn-dark btn-block text-warning px-4"
            :class="{ disabled:theProduct.id === cartdisable }"
            @click="addtoCart(theProduct.id,counts)"
          >立即下單</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "CardModal",
  props: {
    theProduct: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      counts: 1,
      cartdisable: "",
    };
  },
  methods: {
    addtoCart(id, qty) {
      const vm = this;
      vm.cartdisable = id;
      vm.$store.dispatch("cardModules/addtoCart", { id, qty }).then(() => {
        $("#productModal").modal("hide");
        vm.$bus.$emit(
            "message:push",
            "商品已加入購物車內",
            "danger"
          );
        vm.cartdisable = "";
        vm.counts = 1;
      });
    },
  },
};
</script>

<style>
</style>